import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  ArrowLeft,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Database,
  LogOut,
  ChevronRight,
  Info,
  BookOpen,
  User,
  Clock,
  Layout,
  FileText,
  Sparkles,
  Lock,
  Compass,
  Undo,
  BarChart3,
} from "lucide-react";
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  writeBatch,
  getDocs,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db, auth, handleFirestoreError, OperationType } from "./firebase";
import { BlogPost, DEFAULT_POSTS } from "./BlogPage";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const CATEGORIES = [
  "Startups & Companies",
  "Taxation & GST",
  "Licenses & Registrations",
  "Advisory & Growth",
];

interface GradientPreset {
  name: string;
  val: string;
}

const GRADIENTS: GradientPreset[] = [
  { name: "Classic Slate Blue", val: "from-[#3150A0] to-slate-900" },
  { name: "Dark Indigo", val: "from-blue-900 to-indigo-950" },
  { name: "Advisory Ash", val: "from-slate-800 to-[#3150A0]" },
  { name: "Orange Amber Flare", val: "from-amber-600 to-orange-500" },
];

const convertToInputDateFormat = (dateStr: string) => {
  if (!dateStr) return new Date().toISOString().split("T")[0];
  const dateObj = new Date(dateStr);
  if (isNaN(dateObj.getTime())) {
    return new Date().toISOString().split("T")[0];
  }
  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
  const dd = String(dateObj.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

const formatDateToDisplay = (dateStr: string) => {
  if (!dateStr) return "";
  const dateObj = new Date(dateStr);
  if (isNaN(dateObj.getTime())) return dateStr;
  return dateObj.toLocaleDateString("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });
};

export default function BlogAdminPage() {
  const [user, setUser] = useState(auth.currentUser);
  const [customBlogs, setCustomBlogs] = useState<BlogPost[]>([]);
  const [isBlogsLoading, setIsBlogsLoading] = useState(true);

  // Form State
  const [isWriting, setIsWriting] = useState(false);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<BlogPost["category"]>(
    "Startups & Companies",
  );
  const [readTime, setReadTime] = useState("5 min read");
  const [author, setAuthor] = useState("CA Gyanesh Manohar");
  const [authorLinkedin, setAuthorLinkedin] = useState("");
  const [authorDesignation, setAuthorDesignation] = useState("");
  const [authorFirm, setAuthorFirm] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [authorAvatar, setAuthorAvatar] = useState("");
  const [tagsString, setTagsString] = useState("ROC, Startups, Compliances");
  const [gradient, setGradient] = useState("from-[#3150A0] to-slate-900");
  const [editorContent, setEditorContent] = useState("");
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);
  const [postDate, setPostDate] = useState(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  // Status flags
  const [writerFeedback, setWriterFeedback] = useState<string>("");
  const [isSyncingWithFirebase, setIsSyncingWithFirebase] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Check auth state
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      setUser(u);
      syncPostsWithCloud(u);
    });
    return () => unsub();
  }, []);

  // Store the unsubscribe function to avoid memory leaks
  const syncUnsubscribeRef = useRef<(() => void) | null>(null);

  // Sync posts from either Cloud Firestore (if admin) or localStorage as offline fallback sandbox
  const syncPostsWithCloud = (
    currentUser = auth.currentUser,
    forceRefresh = false,
  ) => {
    setIsBlogsLoading(true);
    const isAdminUser = !!currentUser;

    if (isAdminUser) {
      if (syncUnsubscribeRef.current) {
        syncUnsubscribeRef.current();
        syncUnsubscribeRef.current = null;
      }

      try {
        const postsCollection = collection(db, "posts");
        syncUnsubscribeRef.current = onSnapshot(
          postsCollection,
          async (snapshot) => {
            const cloudPosts: BlogPost[] = [];
            snapshot.forEach((docSnap) => {
              cloudPosts.push({
                id: docSnap.id,
                ...docSnap.data(),
              } as BlogPost);
            });

            // Store standard defaults too if they do not exist
            if (cloudPosts.length === 0 && forceRefresh) {
              // Sync defaults to Cloud
              await syncDefaultTemplatesToCloud();
              return;
            }

            setCustomBlogs(cloudPosts);
            setIsBlogsLoading(false);
          },
          (err) => {
            console.warn(
              "Error reading cloud records, loading local drafts sandbox instead...",
              err,
            );
            loadLocalDrafts();
          },
        );
      } catch (err) {
        console.warn(
          "Error setting up cloud listener, loading local drafts sandbox instead...",
          err,
        );
        loadLocalDrafts();
      }
    } else {
      if (syncUnsubscribeRef.current) {
        syncUnsubscribeRef.current();
        syncUnsubscribeRef.current = null;
      }
      // Local Sandbox Mode to allow absolute free-form sandbox design
      loadLocalDrafts();
    }
  };

  const loadLocalDrafts = () => {
    const stored = localStorage.getItem("makeeazy_sandbox_blogs");
    if (stored) {
      try {
        setCustomBlogs(JSON.parse(stored));
      } catch {
        setCustomBlogs([]);
      }
    } else {
      setCustomBlogs([]);
    }
    setIsBlogsLoading(false);
  };

  const saveLocalDrafts = (updatedList: BlogPost[]) => {
    localStorage.setItem("makeeazy_sandbox_blogs", JSON.stringify(updatedList));
    setCustomBlogs(updatedList);
  };

  // Pre-populate default templates to Cloud Firestore to build instantaneous live data stream
  const syncDefaultTemplatesToCloud = async () => {
    if (!user) {
      // Sandbox populate local list instantly instead
      saveLocalDrafts(DEFAULT_POSTS);
      triggerFeedback(
        "All sample templates synchronized instantly to your local storage sandbox!",
      );
      return;
    }

    setIsSyncingWithFirebase(true);
    try {
      const batch = writeBatch(db);
      DEFAULT_POSTS.forEach((post) => {
        const blogDocRef = doc(db, "posts", post.id);
        const serverDoc = {
          ...post,
          authorLinkedin: post.authorLinkedin || "",
          authorDesignation: post.authorDesignation || "",
          authorFirm: post.authorFirm || "",
          authorBio: post.authorBio || "",
          authorAvatar: post.authorAvatar || "",
          createdAt: Timestamp.now(),
          authorId: user.uid,
          isCustom: true,
        };
        batch.set(blogDocRef, serverDoc);
      });

      await batch.commit();
      triggerFeedback(
        "All default compliance insights successfully deployed live to Production Cloud Firestore!",
      );
      syncPostsWithCloud(user);
    } catch (err) {
      console.error("Batch sync aborted", err);
      triggerFeedback(
        "Failed to sync. Ensure you have correct admin policy permissions.",
      );
    } finally {
      setIsSyncingWithFirebase(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      triggerFeedback("Authenticated successfully!");
    } catch (error: any) {
      console.error(error);
      if (error && error.code === "auth/invalid-credential") {
        triggerFeedback("Invalid email or password.");
      } else if (
        error &&
        (error.code === "auth/operation-not-allowed" ||
          error.code === "auth/configuration-not-found")
      ) {
        triggerFeedback(
          "Error: Email/Password Authentication is not enabled. Go to your Firebase Console -> Authentication -> Sign-in method, click 'Email/Password', enable it (first toggle), and save.",
        );
      } else {
        triggerFeedback(`Sign-in failed: ${error?.message || "Network error"}`);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setCustomBlogs([]);
      triggerFeedback("Logged out successfully.");
    } catch (error) {
      console.error(error);
    }
  };

  const triggerFeedback = (msg: string) => {
    setWriterFeedback(msg);
    setTimeout(() => setWriterFeedback(""), 5500);
  };

  // Form Submission handles both cloud and sandbox
  const handleWriterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !editorContent) {
      triggerFeedback("Title and Core Prose Content are strictly required.");
      return;
    }

    const computedSlug =
      slug.trim() ||
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
    const computedId = editingPostId || `custom-insight-${Date.now()}`;
    const tagsArr = tagsString
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const postPayload: BlogPost = {
      id: computedId,
      title: title.trim(),
      slug: computedSlug,
      excerpt: excerpt.trim() || `${title.trim().substring(0, 100)}...`,
      content: editorContent,
      category,
      readTime: readTime.trim(),
      date: formatDateToDisplay(postDate),
      author: author.trim() || "CA Gyanesh Manohar",
      authorLinkedin: authorLinkedin.trim(),
      authorDesignation: authorDesignation.trim(),
      authorFirm: authorFirm.trim(),
      authorBio: authorBio.trim(),
      authorAvatar: authorAvatar.trim(),
      faqs,
      tags: tagsArr,
      gradient,
      isCustom: true,
      authorId: user?.uid || "offline-sandbox",
    };

    const isAdminUser = !!user;

    if (isAdminUser) {
      setIsSyncingWithFirebase(true);
      try {
        const path = `posts/${computedId}`;
        const docRef = doc(db, "posts", computedId);

        const currentPost = customBlogs.find((b) => b.id === computedId);
        const existingCreatedAt = currentPost?.createdAt || Timestamp.now();

        const dbPayload = {
          ...postPayload,
          createdAt: existingCreatedAt,
        };

        await setDoc(docRef, dbPayload);
        triggerFeedback(
          "Advisory post successfully published live on production cloud databases!",
        );
        syncPostsWithCloud(user);
        setIsWriting(false);
        resetForm();
      } catch (err) {
        console.error("Core publisher aborted.", err);
        triggerFeedback(
          "Access blocked. Ensure database is synchronized with matching compliance rule sets.",
        );
      } finally {
        setIsSyncingWithFirebase(false);
      }
    } else {
      // Local Sandbox Fallback
      let newList = [...customBlogs];
      if (editingPostId) {
        newList = newList.map((b) =>
          b.id === editingPostId ? postPayload : b,
        );
      } else {
        newList = [postPayload, ...newList];
      }
      saveLocalDrafts(newList);
      triggerFeedback(
        `Saved draft successfully inside your Local Sandbox! (${editingPostId ? "Modified" : "Created"})`,
      );
      setIsWriting(false);
      resetForm();
    }
  };

  const handleEditClick = (post: BlogPost) => {
    setEditingPostId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setCategory(post.category);
    setReadTime(post.readTime);
    setAuthor(post.author);
    setAuthorLinkedin(post.authorLinkedin || "");
    setAuthorDesignation(post.authorDesignation || "");
    setAuthorFirm(post.authorFirm || "");
    setAuthorBio(post.authorBio || "");
    setAuthorAvatar(post.authorAvatar || "");
    setFaqs(post.faqs || []);
    setTagsString(post.tags.join(", "));
    setGradient(post.gradient);
    setEditorContent(post.content);
    setPostDate(convertToInputDateFormat(post.date));
    setPreviewMode(false);
    setIsWriting(true);
  };

  const handleDeleteClick = async (postId: string) => {
    if (
      !window.confirm(
        "Are you absolutely sure you want to permanently delete this insight post? This cannot be undone.",
      )
    ) {
      return;
    }

    const isAdminUser = !!user;

    if (isAdminUser) {
      try {
        const docRef = doc(db, "posts", postId);
        await deleteDoc(docRef);
        triggerFeedback("Advisory removed securely from cloud servers.");
        syncPostsWithCloud(user);
      } catch (err) {
        console.error("Delete rejected.", err);
        triggerFeedback("Error deleting cloud post. Verification failed.");
      }
    } else {
      // Local Sandbox deletion
      const filtered = customBlogs.filter((post) => post.id !== postId);
      saveLocalDrafts(filtered);
      triggerFeedback("Advisory removed from local sandbox storage.");
    }
  };

  const resetForm = () => {
    setEditingPostId(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setCategory("Startups & Companies");
    setReadTime("5 min read");
    setAuthor("CA Gyanesh Manohar");
    setAuthorLinkedin("");
    setAuthorDesignation("");
    setAuthorFirm("");
    setAuthorBio("");
    setAuthorAvatar("");
    setFaqs([]);
    setTagsString("ROC, Startups, Compliances");
    setGradient("from-[#3150A0] to-slate-900");
    setEditorContent("");
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    setPostDate(`${yyyy}-${mm}-${dd}`);
    setPreviewMode(false);
  };

  const isAdminAuthenticated = !!user;

  const monthlyStats = React.useMemo(() => {
    const counts: Record<string, number> = {};
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    months.forEach((m) => (counts[m] = 0));
    customBlogs.forEach((post) => {
      // date is usually 'yyyy-mm-dd'
      const date = new Date(post.date);
      if (!isNaN(date.getTime())) {
        const monthName = months[date.getMonth()];
        counts[monthName] = (counts[monthName] || 0) + 1;
      }
    });
    return months.map((name) => ({ name, count: counts[name] }));
  }, [customBlogs]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24 font-sans text-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                <Lock className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0]">
                  Knowledge Hub
                </h1>
                <p className="text-slate-500 mt-1">Moderator Desk</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1 bg-orange-50 border border-orange-200 text-orange-600 px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-widest">
                Compliance Desk Console
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {!user ? (
            /* Portal Login View */
            <motion.div
              key="auth-login-box"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 text-center max-w-xl mx-auto shadow-xl space-y-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#3150A0]/10 flex items-center justify-center mx-auto text-[#3150A0]">
                <Lock className="w-8 h-8 stroke-[1.8]" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl md:text-2xl font-bold text-[#3150A0] tracking-tight">
                  Admin Authentication
                </h2>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-semibold">
                  Access live Cloud Production databases by entering your Admin
                  Account Credentials, or explore the full writer suite in
                  Sandbox Mode immediately.
                </p>
              </div>

              {writerFeedback && (
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 flex items-center justify-center gap-2">
                  <Info className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{writerFeedback}</span>
                </div>
              )}

              <form
                onSubmit={handleEmailSignIn}
                className="flex flex-col gap-4 text-left"
              >
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="krishiv@example.com"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800"
                  />
                </div>
                <div className="flex flex-col gap-3 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#3150A0] hover:bg-[#00103a] text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-98 cursor-pointer flex items-center justify-center gap-2 leading-none"
                  >
                    Authenticate
                  </button>
                </div>
              </form>
            </motion.div>
          ) : (
            /* Admin Work Desk View */
            <motion.div
              key="desk-dashboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Dynamic Auth status bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl gap-2 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-slate-700">
                    Moderator Access Session Active
                  </span>
                  {isAdminAuthenticated ? (
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 font-bold text-[10px] uppercase font-mono">
                      Cloud Sync Active ({user.email})
                    </span>
                  ) : (
                    <span
                      className="text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-100 font-bold text-[10px] uppercase font-mono"
                      title="Updates are saved locally to your current browser window"
                    >
                      Local Sandbox Mode ({user.email})
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/blogs"
                    className="font-bold hover:text-[#3150A0] text-[#3150A0] inline-flex items-center gap-1 py-0.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> View Feed
                  </a>
                  <button
                    onClick={handleLogout}
                    className="hover:text-red-650 hover:bg-red-50/50 font-bold text-slate-500 transition-all cursor-pointer inline-flex items-center gap-1.5"
                  >
                    <span>Secure logout</span>
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Status Notifications */}
              {writerFeedback && (
                <motion.div
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`p-4 rounded-xl text-xs font-bold flex items-center gap-2 text-left ${
                    writerFeedback.includes("successfully") ||
                    writerFeedback.includes("synchronized") ||
                    writerFeedback.includes("Active")
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                      : "bg-amber-50 border border-amber-200 text-amber-801"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{writerFeedback}</span>
                </motion.div>
              )}

              {isWriting ? (
                /* Composition / Edit Desk */
                <motion.div
                  key="composing-desk-wrapper"
                  className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 space-y-6 text-left shadow-lg"
                >
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-5 gap-4">
                    <div className="text-left">
                      <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono">
                        WORKSPACE
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#3150A0] tracking-tight mt-1 font-sans">
                        {editingPostId
                          ? "Edit Compliance Article"
                          : "Draft New Advisory Insight"}
                      </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setPreviewMode(false)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          !previewMode
                            ? "bg-[#3150A0] border-[#3150A0] text-white"
                            : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        Compiler
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewMode(true)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                          previewMode
                            ? "bg-[#3150A0] border-[#3150A0] text-white"
                            : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        Review Layout Render
                      </button>
                    </div>
                  </div>

                  {previewMode ? (
                    /* High Fidelity Preview Matcher */
                    <div className="border border-slate-200 rounded-2xl p-6 md:p-8 bg-slate-50/50 space-y-6">
                      <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-xs flex gap-2 items-start text-orange-800 font-semibold mb-4">
                        <Info className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <div>
                          <span>Real-time Rendering Check:</span> This renders
                          using the exact styling sheets and fonts applied on
                          public visitor insights view for maximum design
                          fidelity.
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3.5 text-xs font-bold text-slate-500 font-mono text-left font-semibold">
                        <span className="text-orange-500 uppercase tracking-wider">
                          {category}
                        </span>
                        <span>•</span>
                        <span>{formatDateToDisplay(postDate)}</span>
                        <span>•</span>
                        <span>{readTime || "5 min read"}</span>
                      </div>

                      <h1 className="font-display text-2xl md:text-3xl font-bold text-[#3150A0] leading-tight text-left">
                        {title || "Pending Strategic Title"}
                      </h1>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-xs uppercase">
                          {author ? author.charAt(0) : "C"}
                        </div>
                        <span className="text-xs font-bold text-slate-600">
                          By {author || "CA Gyanesh Manohar"}
                        </span>
                      </div>

                      <div className="suneditor-content-view text-justify max-w-none bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        {editorContent ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: editorContent }}
                          />
                        ) : (
                          <p className="text-slate-400 italic text-xs md:text-sm">
                            Write compliance content first, then check review
                            render!
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Editor Input Form */
                    <form onSubmit={handleWriterSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Title Input */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Advisory Title
                          </label>
                          <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => {
                              setTitle(e.target.value);
                              setSlug(
                                e.target.value
                                  .toLowerCase()
                                  .replace(/[^a-z0-9]+/g, "-")
                                  .replace(/(^-|-$)/g, ""),
                              );
                            }}
                            placeholder="e.g. Mandatory MSME Delayed Payment Rules under Section 15"
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800 font-semibold"
                          />
                        </div>

                        {/* URL Slug */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            URL Safe Slug
                          </label>
                          <input
                            type="text"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            placeholder="e.g. msme-delayed-payment-law-guide"
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-500 font-mono"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        {/* Category Selection */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
                            Primary Category
                          </label>
                          <select
                            value={category}
                            onChange={(e) =>
                              setCategory(
                                e.target.value as BlogPost["category"],
                              )
                            }
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none cursor-pointer text-slate-800 font-semibold"
                          >
                            {CATEGORIES.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Posting Date Selection */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Publish Date
                          </label>
                          <input
                            type="date"
                            required
                            value={postDate}
                            onChange={(e) => setPostDate(e.target.value)}
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-800 font-semibold"
                          />
                        </div>

                        {/* Estimated Reading Duration */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Read Time duration
                          </label>
                          <input
                            type="text"
                            value={readTime}
                            onChange={(e) => setReadTime(e.target.value)}
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-800"
                          />
                        </div>
                      </div>

                      {/* Author Info Section */}
                      <div className="border-[1.5px] border-slate-100 bg-slate-50/25 rounded-2xl p-5 md:p-6 space-y-6">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-[#3150A0]">
                            Advisory Author Profile
                          </h4>
                          <span className="text-[10px] font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-bold">
                            Dynamic Credentials Card
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          {/* custom author */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Advisory Specialist Name
                            </label>
                            <input
                              type="text"
                              value={author}
                              onChange={(e) => setAuthor(e.target.value)}
                              placeholder="e.g. CA Gyanesh Manohar"
                              className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800 font-semibold"
                            />
                          </div>

                          {/* author designation */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Author Designation
                            </label>
                            <input
                              type="text"
                              value={authorDesignation}
                              onChange={(e) =>
                                setAuthorDesignation(e.target.value)
                              }
                              placeholder="e.g. Senior Chartered Accountant (or leave blank for default)"
                              className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800 font-semibold"
                            />
                          </div>

                          {/* author firm */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Firm / Affiliation
                            </label>
                            <input
                              type="text"
                              value={authorFirm}
                              onChange={(e) => setAuthorFirm(e.target.value)}
                              placeholder="e.g. MakeEazy Statutory Board (or leave blank for default)"
                              className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800"
                            />
                          </div>

                          {/* author linkedin */}
                          <div className="space-y-1.5 text-left">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                              Author LinkedIn URL
                            </label>
                            <input
                              type="url"
                              value={authorLinkedin}
                              onChange={(e) =>
                                setAuthorLinkedin(e.target.value)
                              }
                              placeholder="e.g. https://www.linkedin.com/in/ca-gyanesh-manohar"
                              className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800 font-mono"
                            />
                          </div>
                        </div>

                        {/* author bio description */}
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Professional Bio / description
                          </label>
                          <textarea
                            rows={3}
                            value={authorBio}
                            onChange={(e) => setAuthorBio(e.target.value)}
                            placeholder="Detail the specialist's advisory qualifications, corporate consulting background, or statutory domain expertise. Leave empty to use the default compliance master biography."
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1.5 focus:ring-[#3150A0] focus:bg-white text-slate-800 leading-normal"
                          />
                        </div>

                        {/* author avatar placeholder uploader */}
                        <div className="space-y-2 text-left border-t border-dashed border-slate-100 pt-4">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                            Author Profile Photo
                          </label>
                          <div className="flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl">
                            <div className="relative shrink-0">
                              <img
                                src={
                                  authorAvatar ||
                                  "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200"
                                }
                                alt="Author Preview"
                                className="w-16 h-16 rounded-full object-cover border-2 border-orange-200 bg-slate-200 shadow-sm"
                              />
                              {authorAvatar && (
                                <button
                                  type="button"
                                  onClick={() => setAuthorAvatar("")}
                                  className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-all text-[8px] leading-none font-bold"
                                  title="Clear Photo"
                                >
                                  ✕
                                </button>
                              )}
                            </div>

                            <div className="flex-1 space-y-2 w-full">
                              <div className="flex flex-wrap items-center gap-2">
                                {/* Hidden file input */}
                                <input
                                  type="file"
                                  id="author-avatar-file"
                                  accept="image/*"
                                  className="hidden"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      if (file.size > 400 * 1024) {
                                        alert(
                                          "Please keep your dynamic avatar image files under 400KB to ensure rapid compliance database Sync.",
                                        );
                                        return;
                                      }
                                      const reader = new FileReader();
                                      reader.onload = (event) => {
                                        if (event.target?.result) {
                                          setAuthorAvatar(
                                            event.target.result as string,
                                          );
                                        }
                                      };
                                      reader.readAsDataURL(file);
                                    }
                                  }}
                                />
                                <button
                                  type="button"
                                  onClick={() =>
                                    document
                                      .getElementById("author-avatar-file")
                                      ?.click()
                                  }
                                  className="px-4 py-2 text-xs bg-[#3150A0] text-white font-semibold rounded-lg hover:bg-slate-800 transition-all cursor-pointer shadow-sm"
                                >
                                  Upload Profile Photo File
                                </button>

                                <span className="text-[10px] text-slate-400">
                                  or paste a custom web image URL:
                                </span>
                              </div>

                              <input
                                type="url"
                                value={
                                  authorAvatar.startsWith("data:")
                                    ? ""
                                    : authorAvatar
                                }
                                onChange={(e) =>
                                  setAuthorAvatar(e.target.value)
                                }
                                placeholder="Paste image web link (e.g. https://images.unsplash.com/...)"
                                className="w-full px-3 py-2 text-[11px] bg-white border border-slate-200 rounded-lg focus:outline-none text-slate-800 font-mono"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Excerpt Descriptions */}
                      <div className="space-y-1.5 text-left">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                          Summary Excerpt / Description
                        </label>
                        <textarea
                          rows={2}
                          value={excerpt}
                          onChange={(e) => setExcerpt(e.target.value)}
                          placeholder="Brief 2-line summary describing the risk weights or business relief of this advisory."
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-800 leading-normal"
                        />
                      </div>

                      {/* comma-seprated tags & custom gradient presets */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Tags (comma separated)
                          </label>
                          <input
                            type="text"
                            value={tagsString}
                            onChange={(e) => setTagsString(e.target.value)}
                            placeholder="e.g. ROC, Compliances, Startups"
                            className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-800"
                          />
                        </div>

                        <div className="space-y-1.5 text-left">
                          <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                            Insight Card Color Theme
                          </label>
                          <div className="flex flex-wrap items-center gap-3 pt-1">
                            {GRADIENTS.map((g) => (
                              <button
                                key={g.name}
                                type="button"
                                onClick={() => setGradient(g.val)}
                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${g.val} border-2 transition-all cursor-pointer ${
                                  gradient === g.val
                                    ? "border-orange-500 scale-110 shadow"
                                    : "border-slate-200 hover:scale-105"
                                }`}
                                title={g.name}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* HTML rich layout entry workspace */}
                      <div className="space-y-2 text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <label className="text-xs font-bold text-slate-705 uppercase tracking-wider inline-flex items-center gap-1">
                            <BookOpen className="w-4 h-4 text-[#3150A0]" />
                            Corporate Advisory Content
                          </label>
                        </div>

                        {/* Rich Text Editor */}
                        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                          <SunEditor
                            setContents={editorContent}
                            onChange={(content) => setEditorContent(content)}
                            setOptions={{
                              buttonList: [
                                [
                                  "undo",
                                  "redo",
                                  "font",
                                  "fontSize",
                                  "formatBlock",
                                ],
                                [
                                  "bold",
                                  "underline",
                                  "italic",
                                  "strike",
                                  "subscript",
                                  "superscript",
                                ],
                                [
                                  "fontColor",
                                  "hiliteColor",
                                  "textStyle",
                                  "removeFormat",
                                ],
                                "/",
                                [
                                  "outdent",
                                  "indent",
                                  "align",
                                  "horizontalRule",
                                  "list",
                                  "lineHeight",
                                ],
                                ["table", "link", "image", "video"],
                                ["fullScreen", "showBlocks", "codeView"],
                                ["preview"],
                              ],
                              minHeight: "400px",
                              resizingBar: false,
                              attributesBlacklist: {
                                "*": "style",
                              },
                            }}
                          />
                        </div>
                      </div>

                      {/* FAQs section */}
                      <div className="space-y-4 text-left border-t border-dashed border-slate-100 pt-6">
                        <label className="text-xs font-bold text-slate-705 uppercase tracking-wider inline-flex items-center gap-1">
                          Frequently Asked Questions (Optional)
                        </label>
                        {faqs.map((faq, index) => (
                          <div
                            key={index}
                            className="bg-slate-50 border border-slate-200 p-4 rounded-xl space-y-3 relative group"
                          >
                            <button
                              type="button"
                              onClick={() => {
                                const newFaqs = faqs.filter(
                                  (_, i) => i !== index,
                                );
                                setFaqs(newFaqs);
                              }}
                              className="absolute top-2 right-2 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              ✕
                            </button>
                            <input
                              type="text"
                              value={faq.question}
                              onChange={(e) => {
                                const newFaqs = [...faqs];
                                newFaqs[index].question = e.target.value;
                                setFaqs(newFaqs);
                              }}
                              placeholder="Question"
                              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3150A0]"
                            />
                            <textarea
                              value={faq.answer}
                              onChange={(e) => {
                                const newFaqs = [...faqs];
                                newFaqs[index].answer = e.target.value;
                                setFaqs(newFaqs);
                              }}
                              placeholder="Answer"
                              rows={2}
                              className="w-full px-3 py-2 text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#3150A0]"
                            />
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            setFaqs([...faqs, { question: "", answer: "" }])
                          }
                          className="px-4 py-2 border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold rounded-xl text-xs transition-all cursor-pointer inline-flex items-center gap-2"
                        >
                          + Add FAQ
                        </button>
                      </div>

                      {/* Submit and Cancel drawers */}
                      <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-100">
                        <button
                          type="button"
                          onClick={() => {
                            setIsWriting(false);
                            resetForm();
                          }}
                          className="px-5 py-2.5 border border-slate-200 text-slate-500 hover:bg-slate-50 font-bold rounded-xl text-xs transition-all cursor-pointer"
                        >
                          Cancel / Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSyncingWithFirebase}
                          className="px-6 py-2.5 bg-[#3150A0] hover:bg-blue-900 border border-transparent text-white font-bold rounded-xl text-xs transition-all shadow cursor-pointer disabled:opacity-50"
                        >
                          {isSyncingWithFirebase
                            ? "Synchronizing Cloud..."
                            : editingPostId
                              ? "Update & Deploy"
                              : "Publish Advisory"}
                        </button>
                      </div>
                    </form>
                  )}
                </motion.div>
              ) : (
                /* Admin lists panel dashboard */
                <motion.div
                  key="articles-admin-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-6"
                >
                  <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs text-left">
                    <div className="space-y-1.5 max-w-xl">
                      <h2 className="text-xl md:text-2xl font-bold text-[#3150A0] tracking-tight">
                        Advisory Database Overview ({customBlogs.length})
                      </h2>
                      <p className="text-xs md:text-sm text-slate-500 font-medium leading-normal">
                        Verify listings, update key metadata clauses, or
                        populate initial default pre-designed legal templates
                        dynamically under the Blogs portal.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                      <button
                        onClick={syncDefaultTemplatesToCloud}
                        disabled={isBlogsLoading || isSyncingWithFirebase}
                        className="flex-1 md:flex-initial border border-slate-200 bg-white hover:bg-slate-50 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl flex items-center justify-center gap-1.5 text-slate-700 transition cursor-pointer disabled:opacity-50"
                        title="Sync default template list to cloud or sandbox"
                      >
                        <Database className="w-4 h-4 text-slate-500" />
                        <span>Sync Defaults</span>
                      </button>

                      <button
                        onClick={() => {
                          resetForm();
                          setIsWriting(true);
                        }}
                        className="flex-1 md:flex-initial bg-[#3150A0] hover:bg-blue-950 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl flex items-center justify-center gap-1 text-white shadow transition-all cursor-pointer"
                      >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        <span>New Post</span>
                      </button>
                    </div>
                  </div>

                  {/* Monthly Publish Frequency Chart */}
                  <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
                    <h3 className="text-sm md:text-base font-bold text-blue-900 tracking-tight mb-6 flex items-center gap-2">
                       <BarChart3 className="w-5 h-5 text-orange-500" /> Publication Frequency
                    </h3>
                    <div className="h-64 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={monthlyStats} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <defs>
                            <linearGradient id="brandGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#1e3a8a" stopOpacity={1} />
                              <stop offset="100%" stopColor="#f97316" stopOpacity={0.85} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#64748B', fontSize: 12 }} 
                            dy={10} 
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#64748B', fontSize: 12 }} 
                            allowDecimals={false} 
                          />
                          <Tooltip 
                            cursor={{ fill: 'rgba(30, 58, 138, 0.04)' }} 
                            contentStyle={{ 
                              borderRadius: '12px', 
                              border: '1px solid #E2E8F0', 
                              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' 
                            }} 
                            labelStyle={{ color: '#1e3a8a', fontWeight: 'bold' }}
                          />
                          <Bar dataKey="count" fill="url(#brandGradient)" radius={[4, 4, 0, 0]} maxBarSize={40} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Listings block */}
                  {isBlogsLoading ? (
                    <div className="bg-white rounded-3xl border border-slate-200 p-8 space-y-4">
                      {[1, 2, 3].map((idx) => (
                        <div
                          key={idx}
                          className="animate-pulse space-y-2 py-4 border-b border-slate-100 last:border-b-0"
                        >
                          <div className="h-4 bg-slate-250 rounded w-1/4" />
                          <div className="h-5 bg-slate-250 rounded w-3/4" />
                        </div>
                      ))}
                    </div>
                  ) : customBlogs.length === 0 ? (
                    <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-16 text-center space-y-4">
                      <div className="text-4xl">📝</div>
                      <h3 className="font-display font-bold text-[#3150A0] text-lg">
                        Empty Advisory Feed
                      </h3>
                      <p className="text-xs md:text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                        Click on <strong>Sync Defaults</strong> above to
                        automatically seed standard pre-curated CAs legal
                        templates instantly.
                      </p>
                    </div>
                  ) : (
                    /* Dashboard Moderator Feed Grid */
                    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs p-6 md:p-8 space-y-2">
                      {[...customBlogs]
                        .sort((a, b) => {
                          const dateA = Date.parse(a.date) || 0;
                          const dateB = Date.parse(b.date) || 0;
                          if (dateA !== dateB) {
                            return dateB - dateA;
                          }
                          const timeA = a.createdAt
                            ? a.createdAt.seconds
                              ? a.createdAt.seconds * 1000
                              : new Date(a.createdAt).getTime()
                            : 0;
                          const timeB = b.createdAt
                            ? b.createdAt.seconds
                              ? b.createdAt.seconds * 1000
                              : new Date(b.createdAt).getTime()
                            : 0;
                          return timeB - timeA;
                        })
                        .map((post, index) => (
                          <div
                            key={post.id}
                            className={`group flex items-center justify-between py-5 text-left ${
                              index !== 0 ? "border-t border-slate-100" : ""
                            }`}
                          >
                            <div
                              className="flex-1 pr-6 cursor-pointer"
                              onClick={() => handleEditClick(post)}
                            >
                              <div className="flex items-center gap-2 text-[10px] md:text-[11px] font-bold tracking-widest uppercase mb-1 font-mono">
                                <span className="text-[#f97316]">
                                  {post.category.split(" ")[0]}
                                </span>
                                <span className="text-slate-300">•</span>
                                <span className="text-slate-400 font-medium">
                                  {post.date}
                                </span>
                              </div>
                              <h3 className="text-sm md:text-base font-bold text-[#3150A0] tracking-tight group-hover:text-blue-700 transition-colors mb-1">
                                {post.title}
                              </h3>
                              <p className="text-xs text-slate-400 line-clamp-1">
                                {post.excerpt}
                              </p>
                            </div>

                            <div className="flex items-center gap-3 shrink-0">
                              <button
                                onClick={() => handleEditClick(post)}
                                className="p-2.5 hover:bg-slate-50 border border-slate-150 rounded-xl transition-all text-slate-400 hover:text-[#3150A0] cursor-pointer"
                                title="Edit Details"
                              >
                                <Layout className="w-4 h-4 stroke-[2]" />
                              </button>
                              <button
                                onClick={() => handleDeleteClick(post.id)}
                                className="p-2.5 hover:bg-red-50 border border-transparent rounded-xl transition-all text-slate-400 hover:text-red-500 cursor-pointer"
                                title="Delete permanently"
                              >
                                <Trash2 className="w-4 h-4 stroke-[1.8]" />
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
