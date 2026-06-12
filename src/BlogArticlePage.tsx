import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Clock,
  Calendar,
  Tag,
  ArrowLeft,
  Linkedin,
  Twitter,
  Share2,
  MessageCircle,
  ChevronDown,
  Printer,
  List,
} from "lucide-react";
import {
  collection,
  query,
  where,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";
import { BlogPost, DEFAULT_POSTS } from "./BlogPage";
import { useParams, useNavigate } from "react-router-dom";

const getAuthorBio = (author: string) => {
  const norm = author.toLowerCase();
  if (norm.includes("gyanesh") || norm.includes("manohar")) {
    return {
      description:
        "CA Gyanesh Manohar is a practicing Chartered Accountant and senior corporate advisor with over 12 years of core statutory practice in GST litigations, private corporate formulations, auditing procedures, and foreign investments (FDI). He has advised hundreds of Indian startup founders on scaling in a tax-efficient, fully compliant framework.",
      avatarUrl:
        "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200",
      designation: "Senior Chartered Accountant",
      firm: "MakeEazy Statutory Board",
    };
  }
  return {
    description: `${author} is a dedicated compliance specialist and professional legal consultant. They represent prominent enterprises across corporate filing preparations, trademark clearances, legal drafting, and general statutory structures.`,
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    designation: "Senior Compliance Specialist",
    firm: "MakeEazy Consultants Private Limited",
  };
};

export default function BlogArticlePage({ slug }: { slug?: string }) {
  const defaultPost = slug
    ? DEFAULT_POSTS.find((p) => p.slug === slug) || null
    : null;
  const [post, setPost] = useState<BlogPost | null>(defaultPost);
  const [isLoading, setIsLoading] = useState(!defaultPost);
  const navigate = useNavigate();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number; element: HTMLElement }[]
  >([]);
  const [activeHeadingId, setActiveHeadingId] = useState<string>("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    async function fetchPost() {
      if (!slug) return;

      // Serve local default immediately if it exists (Stale-While-Revalidate pattern)
      const defaultPost = DEFAULT_POSTS.find((p) => p.slug === slug);
      if (defaultPost) {
        setPost(defaultPost);
        setIsLoading(false);
      }

      // Background check firestore
      const postsCollection = collection(db, "posts");
      const q = query(postsCollection, where("slug", "==", slug), limit(1));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          if (!snapshot.empty) {
            const doc = snapshot.docs[0];
            setPost({ id: doc.id, ...doc.data() } as BlogPost);
          }
          setIsLoading(false);
        },
        (err) => {
          console.error("Error fetching blog from cloud:", err);
          setIsLoading(false);
        },
      );
      return () => unsubscribe();
    }

    fetchPost();
  }, [slug]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTocSidebar, setShowTocSidebar] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    let unsubscribe = () => {};
    async function fetchRelated() {
      if (!post) return;

      const localRelated = DEFAULT_POSTS.filter(
        (p) =>
          p.slug !== post.slug &&
          (p.category === post.category ||
            p.tags.some((t) => post.tags.includes(t))),
      ).slice(0, 3);

      const postsCollection = collection(db, "posts");
      const q = query(
        postsCollection,
        where("category", "==", post.category),
        limit(4),
      );

      unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          let firestoreRelated: BlogPost[] = [];
          snapshot.forEach((doc) => {
            if (doc.data().slug !== post.slug) {
              firestoreRelated.push({ id: doc.id, ...doc.data() } as BlogPost);
            }
          });
          const combined = [...firestoreRelated, ...localRelated];
          const unique = combined
            .filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i)
            .slice(0, 3);
          setRelatedPosts(unique);
        },
        (err) => {
          console.error("Error fetching related from cloud:", err);
          setRelatedPosts(localRelated);
        },
      );
    }

    fetchRelated();
    return () => unsubscribe();
  }, [post?.slug, post?.category, post?.tags]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fullHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (fullHeight > 0) {
        setScrollProgress((scrollY / fullHeight) * 100);
      } else {
        setScrollProgress(0);
      }

      if (scrollY > 350) {
        setShowTocSidebar(true);
      } else {
        setShowTocSidebar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!contentRef.current || !post?.content) return;

    // Small delay to ensure innerHTML is fully rendered by the browser
    const timer = setTimeout(() => {
      if (!contentRef.current) return;

      const elements = Array.from(
        contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6"),
      ) as HTMLElement[];

      const extractedHeadings = elements.map((el, index) => {
        const id = el.id || `heading-${index}`;
        if (!el.id) {
          el.id = id;
        }
        return {
          id,
          text: el.innerText || el.textContent || "",
          level: Number(el.tagName.substring(1)),
          element: el,
        };
      });

      setHeadings(extractedHeadings);

      const headingElementsRef: Record<string, IntersectionObserverEntry> = {};
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            headingElementsRef[entry.target.id] = entry;
          });

          const visibleHeadings: string[] = [];
          Object.keys(headingElementsRef).forEach((key) => {
            if (headingElementsRef[key].isIntersecting) {
              visibleHeadings.push(key);
            }
          });

          if (visibleHeadings.length > 0) {
            const getIndex = (id: string) =>
              extractedHeadings.findIndex((h) => h.id === id);
            visibleHeadings.sort((a, b) => getIndex(a) - getIndex(b));
            setActiveHeadingId(visibleHeadings[0]);
          }
        },
        { rootMargin: "-120px 0px -40% 0px" },
      );

      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [post?.content]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex justify-center items-start">
        <div className="bg-white border border-slate-200/80 rounded-3xl p-6 md:p-12 space-y-4 animate-pulse w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-4 bg-slate-200 rounded w-1/4" />
          <div className="h-10 bg-slate-200 rounded w-3/4" />
          <div className="h-4 bg-slate-200 rounded w-1/3" />
          <div className="mt-8 space-y-3">
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-full" />
            <div className="h-4 bg-slate-200 rounded w-5/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-20 flex justify-center items-start">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-[#3150A0]">
            Article Not Found
          </h1>
          <p className="text-slate-500 mt-4 mb-8">
            The compliance log you are looking for does not exist or has been
            moved.
          </p>
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-bold shadow-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Go back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900 print:bg-white print:pt-0 print:pb-0">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-orange-500 z-50 transition-all duration-150 ease-out print:hidden"
        style={{ width: `${scrollProgress}%` }}
      />
      <Helmet>
        <title>
          {post.title} | MakeEazy Consultants Private Limited Insights
        </title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={
            post.tags?.join(", ") || "Tax, Compliance, Startups, Advisory"
          }
        />
        <meta name="author" content={post.author} />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content={`${post.title} - MakeEazy Consultants Private Limited`}
        />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:site_name"
          content="MakeEazy Consultants Private Limited"
        />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags &&
          post.tags.map((t) => (
            <meta property="article:tag" content={t} key={t} />
          ))}

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      {/* Left Sidebar: Table of Contents */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row gap-8 xl:gap-12 items-start justify-center">
        {headings.length > 0 && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: showTocSidebar ? 1 : 0,
              x: showTocSidebar ? 0 : -20,
              pointerEvents: showTocSidebar ? "auto" : "none",
            }}
            transition={{ duration: 0.3 }}
            className="hidden xl:block print:hidden w-[300px] shrink-0 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2 custom-scrollbar"
          >
            <div className="bg-white rounded-3xl border border-slate-200/70 p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
                <List className="w-4 h-4 text-orange-500" />
                Table of Contents
              </h3>
              <nav className="space-y-1 relative">
                {/* Visual track line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100" />

                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      try {
                        const el = document.getElementById(heading.id);
                        if (el) {
                          const yOffset = -120; // Adjust for fixed header
                          const y =
                            el.getBoundingClientRect().top +
                            window.scrollY +
                            yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        } else {
                          console.warn(
                            "TOC element not found for id:",
                            heading.id,
                          );
                          // Fallback: try finding by text content if ID was wiped out by a re-render
                          const allHeadings = Array.from(
                            contentRef.current?.querySelectorAll(
                              "h1, h2, h3, h4, h5, h6",
                            ) || [],
                          ) as HTMLElement[];
                          const fallbackEl = allHeadings.find(
                            (h) => (h.textContent || "") === heading.text,
                          );
                          if (fallbackEl) {
                            const yOffset = -120;
                            const y =
                              fallbackEl.getBoundingClientRect().top +
                              window.scrollY +
                              yOffset;
                            window.scrollTo({ top: y, behavior: "smooth" });
                          }
                        }
                      } catch (err) {
                        console.error("Scroll error:", err);
                      }
                    }}
                    className={`relative block w-full text-left font-medium transition-all duration-200 text-sm leading-snug py-2 px-3 pl-6 rounded-xl group ${
                      activeHeadingId === heading.id
                        ? "text-orange-600 bg-orange-50/50 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                    }`}
                    style={{
                      marginLeft: `${Math.max(0, (heading.level - 2) * 0.75)}rem`,
                    }}
                  >
                    {/* Active indicator dot */}
                    <div
                      className={`absolute left-[5.5px] top-[14px] w-1.5 h-1.5 rounded-full transition-all duration-300 z-10 ${
                        activeHeadingId === heading.id
                          ? "bg-orange-500 scale-100"
                          : "bg-slate-200 scale-0 group-hover:scale-100"
                      }`}
                    />
                    <span className="line-clamp-2">{heading.text}</span>
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}

        <div className="flex-1 w-full max-w-4xl min-w-0">
          {/* Navigation and Category */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#3150A0] transition-colors cursor-pointer bg-white px-4 py-2 border border-slate-200 rounded-full shadow-sm print:hidden"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
            </button>

            <div className="flex items-center gap-3 print:hidden">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#3150A0] transition-colors cursor-pointer bg-white px-4 py-2 border border-slate-200 rounded-full shadow-sm"
              >
                <Printer className="w-4 h-4" /> Print Article
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3 py-1.5 rounded-full border border-[#f97316]/20">
                {post.category}
              </span>
            </div>
          </div>

          {/* Article Container */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-sm flex flex-col p-5 md:p-8 lg:p-10 mb-8 print:border-none print:shadow-none print:p-0 print:mb-0 print:table print:w-full"
          >
            {/* Print Header removed globally */}

            <div className="print:table-row-group">
              <div className="print:table-row">
                <div className="print:table-cell w-full pt-0 print:pt-8">
                  {/* Visual Header Block */}
                  <div className="space-y-4 mb-8">
                    <div className="flex flex-wrap items-center gap-3.5 text-xs font-semibold text-slate-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {post.readTime}
                      </span>
                      <span className="text-slate-250">•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {post.date}
                      </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-[#3150A0] leading-tight tracking-tight font-display">
                      {post.title}
                    </h1>
                  </div>

                  {/* Sub-excerpt info box */}
                  <div className="bg-slate-50 border-l-4 border-orange-500 rounded-r-2xl p-5 md:p-6 text-sm md:text-base text-slate-700 italic font-medium leading-relaxed shadow-inner mb-10">
                    "{post.excerpt}"
                  </div>

                  <div className="w-full text-left">
                    <div
                      ref={contentRef}
                      className="suneditor-content-view text-justify max-w-none w-full mb-12"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                  </div>

                  {/* FAQS */}
                  {post.faqs && post.faqs.length > 0 && (
                    <div className="space-y-6 text-left mb-12 animate-fadeIn border-t border-slate-100 pt-8">
                      <h2 className="text-2xl font-bold text-[#3150A0]">
                        Frequently Asked Questions
                      </h2>
                      <div className="space-y-3 mt-6 animate-slideUp">
                        {post.faqs.map((faq, index) => {
                          const isOpen = openFaq === index;
                          return (
                            <div
                              key={index}
                              className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                            >
                              <button
                                onClick={() =>
                                  setOpenFaq(isOpen ? null : index)
                                }
                                className="group w-full flex justify-between items-center p-5 text-left font-bold text-sm md:text-base text-slate-800 hover:bg-slate-50 focus:outline-none transition-all duration-300"
                              >
                                <span className="pr-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-orange-500">{`${index + 1}. ${faq.question}`}</span>
                                <ChevronDown
                                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                />
                              </button>

                              {isOpen && (
                                <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 text-justify animate-fadeIn">
                                  {faq.answer}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Tag Cluster and Social Share Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8 mb-10 print:hidden">
                    {/* Tag Cluster */}
                    <div className="space-y-3 text-left">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5" /> Filed keywords
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-bold text-[#3150A0] bg-[#3150A0]/5 border border-[#3150A0]/10 px-3 py-1 rounded-xl"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Share Column */}
                    <div className="space-y-3 text-left md:text-right flex flex-col md:items-end justify-start">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 justify-start md:justify-end">
                        <Share2 className="w-3.5 h-3.5" /> Share Advisory
                        Externally
                      </h4>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {/* LinkedIn Share */}
                        <a
                          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + "/blog/" + post.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-9 h-9 text-white bg-[#0a66c2] hover:bg-[#004182] rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                          title="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>

                        {/* Twitter / X Share */}
                        <a
                          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + "/blog/" + post.slug)}&text=${encodeURIComponent(post.title)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-9 h-9 text-white bg-[#0f1419] hover:bg-[#272c30] rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                          title="Share on Twitter / X"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>

                        {/* WhatsApp Share */}
                        <a
                          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.origin + "/blog/" + post.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-9 h-9 text-white bg-[#25d366] hover:bg-[#20ba5a] rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                          title="Share on WhatsApp"
                        >
                          <MessageCircle className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Author Bio Section */}
                  {(() => {
                    const authorName = post.author || "CA Gyanesh Manohar";
                    const fallbackBio = getAuthorBio(authorName);
                    const authorInfo = {
                      description: post.authorBio || fallbackBio.description,
                      avatarUrl: post.authorAvatar || fallbackBio.avatarUrl,
                      designation:
                        post.authorDesignation || fallbackBio.designation,
                      firm: post.authorFirm || fallbackBio.firm,
                    };
                    const linkedinUrl =
                      post.authorLinkedin ||
                      (authorName.toLowerCase().includes("gyanesh") ||
                      authorName.toLowerCase().includes("manohar")
                        ? "https://www.linkedin.com"
                        : "");
                    return (
                      <div
                        className="border-t border-b border-slate-100 py-8 mb-10 text-left bg-slate-50/35 px-4 sm:px-6 rounded-2xl border border-slate-150/70"
                        id="blog-author-bio"
                      >
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#3150A0] mb-4">
                          Author & Publisher Profile
                        </h4>
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                          <div className="flex-shrink-0">
                            <div className="relative">
                              <img
                                src={authorInfo.avatarUrl}
                                alt={authorName}
                                referrerPolicy="no-referrer"
                                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-orange-200 shadow-md"
                              />
                              <div
                                className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse"
                                title="Verified Professional"
                              />
                            </div>
                          </div>

                          <div className="space-y-2 text-center sm:text-left flex-1">
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                              <h3 className="font-display font-bold text-base md:text-lg text-[#3150A0]">
                                {authorName}
                              </h3>
                              <span className="hidden sm:inline text-slate-350 select-none">
                                •
                              </span>
                              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-100/60 px-2.5 py-1 rounded-full inline-block leading-none">
                                {authorInfo.designation}
                              </span>
                              {linkedinUrl && (
                                <a
                                  href={linkedinUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-100 px-2.5 py-1 rounded-full transition-all"
                                  title="Connect on LinkedIn"
                                >
                                  <Linkedin className="w-3 h-3 text-blue-600 shrink-0" />
                                  LinkedIn
                                </a>
                              )}
                            </div>

                            <p className="text-slate-600 text-xs md:text-sm leading-relaxed max-w-3xl">
                              {authorInfo.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Immersive Footer Call To Action */}
                  {/* Call to Action ending block */}
                  <div className="bg-slate-50 rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 border border-slate-100 print:hidden">
                    <div className="text-left space-y-2 max-w-md">
                      <h4 className="text-base md:text-lg font-bold text-[#3150A0] tracking-tight">
                        Confused about legal deadlines or calculations?
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 leading-normal">
                        Connect with our certified CAs to file ROC returns,
                        audit accounts, or register trademarks flawlessly
                        starting from just ₹999. No hidden agency commissions.
                      </p>
                    </div>
                    <a
                      href="/contact-us"
                      className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-center text-xs md:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all text-nowrap cursor-pointer"
                    >
                      Discuss Compliances Instantly
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Footer removed globally */}
          </motion.div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-12 mb-8 print:hidden w-full">
              <h3 className="text-xl font-bold text-[#3150A0] mb-6 flex items-center gap-2">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <div
                    key={relatedPost.id}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      navigate(`/blog/${relatedPost.slug}`);
                    }}
                    className="group bg-white rounded-2xl border border-slate-200/60 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col"
                  >
                    <div className="h-40 overflow-hidden relative overflow-hidden bg-slate-100 pb-[56%]">
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur text-[#3150A0] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col pt-4">
                      <h4 className="text-sm font-bold text-slate-800 leading-snug group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-1 mt-4 text-[11px] font-medium text-slate-400 uppercase tracking-widest pt-4 border-t border-slate-100">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{relatedPost.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
