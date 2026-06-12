import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Search,
  Clock,
  User,
  Tag,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Calendar,
  AlertCircle,
  TrendingUp,
  BookOpen,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  FileText,
  Mail,
} from "lucide-react";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "./firebase";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category:
    | "Startups & Companies"
    | "Taxation & GST"
    | "Licenses & Registrations"
    | "Advisory & Growth";
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  gradient: string;
  isCustom: boolean;
  authorLinkedin?: string;
  authorDesignation?: string;
  authorFirm?: string;
  authorBio?: string;
  authorAvatar?: string;
  bannerImage?: string;
  faqs?: Array<{ question: string; answer: string }>;
  createdAt?: any;
  authorId?: string;
}

export const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "roc-annual-filings-2026",
    title:
      "ROC Annual Filings Compliances for Indian Startups & Private Limited Companies",
    slug: "roc-annual-filings-checklist",
    excerpt:
      "Avoid hefty penalty rules of ₹100 per day! Keep your company active and compliant with this absolute ROC annual filing timeline and expert checklist.",
    category: "Startups & Companies",
    readTime: "6 min read",
    date: "June 05, 2026",
    author: "CA Gyanesh Manohar, MakeEazy Consultants Private Limited",
    tags: ["ROC filings", "MGT-7", "AOC-4", "Startups", "Compliances"],
    gradient: "from-[#3150A0] to-slate-900",
    isCustom: false,
    content: `
      <h2>Understanding Annual Filing Duties under Companies Act, 2013</h2>
      <p>Every Private Limited Company registered in India must file its financial statements and annual returns with the Registrar of Companies (ROC) each financial year. Compliance is not optional; delayed submissions attract severe penalties and can lead to striking-off of the company.</p>
      
      <h3>1. Crucial Forms & Mandatory Timelines</h3>
      <p>Your annual ROC filing involves structural packages submitted after the conclusion of your Annual General Meeting (AGM):</p>
      <ul>
        <li><strong>Form ADT-1 (Auditor Appointment):</strong> Filed within 15 days of the AGM where the statutory auditor is appointed.</li>
        <li><strong>Form AOC-4 (Financial Statements Filing):</strong> Contains the audited Balance Sheet, Profit & Loss Account, Director's Report, and Auditor's Report. Must be filed within 30 days from the conclusion of the AGM.</li>
        <li><strong>Form MGT-7 (Annual Return):</strong> Contains lists of shareholders, directors, transfer of shares, and key management details. Must be filed within 60 days from the conclusion of the AGM.</li>
      </ul>

      <h3>2. Detailed ROC Compliance Checklist</h3>
      <table>
        <thead>
          <tr>
            <th>Compliance Event</th>
            <th>Required Form</th>
            <th>Due Date Timeline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Board Meeting for audited accounts</td>
            <td>Internal Resolutions</td>
            <td>By September 5th of audit year</td>
          </tr>
          <tr>
            <td>Annual General Meeting (AGM)</td>
            <td>Internal Minutes</td>
            <td>On or before September 30th</td>
          </tr>
          <tr>
            <td>Submission of Financial Statement</td>
            <td>Form AOC-4</td>
            <td>Within 30 days of AGM (Oct 30th)</td>
          </tr>
          <tr>
            <td>Submission of Annual Return</td>
            <td>Form MGT-7</td>
            <td>Within 60 days of AGM (Nov 29th)</td>
          </tr>
        </tbody>
      </table>

      <h3>3. The Pain of Non-Compliance: Strict Fines</h3>
      <p>Delayed filing carries a heavy structural penalty. Under the updated regulations, the fine is <strong>₹100 per day per form</strong>, starting from the day the deadline expires, with no maximum ceiling parameters for defaults. For AOC-4 and MGT-7 combined, that equals a painful <strong>₹200 per day</strong> charge, which can completely drain a young startup’s treasury.</p>
      <p>Furthermore, active directors can face complete sign-off disqualification for 5 years if filings remain outstanding for over 3 successive years.</p>

      <h3>4. Pro-Tips for Founders to Avoid Hurdles</h3>
      <p>Always maintain precise double-entry clean accounting books during the fiscal cycle. Complete statutory audits by August to provide ample headroom before the heavy September AGM rush. This ensures smooth, error-free uploads on the Ministry of Corporate Affairs (MCA) portal.</p>
    `,
  },
];

const getBlogTime = (blog: BlogPost) => {
  if (!blog.date) return 0;
  const parsed = Date.parse(blog.date);
  if (!isNaN(parsed)) return parsed;
  if (blog.createdAt) {
    if (typeof blog.createdAt.toDate === "function") {
      return blog.createdAt.toDate().getTime();
    }
    const seconds = blog.createdAt.seconds;
    if (seconds) return seconds * 1000;
  }
  return 0;
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    return [...DEFAULT_POSTS].sort((a, b) => getBlogTime(b) - getBlogTime(a));
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Scroll window to top on change
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Live subscription to Firestore database
    const postsCollection = collection(db, "posts");
    const q = query(postsCollection, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedBlogs: BlogPost[] = [];
        snapshot.forEach((doc) => {
          fetchedBlogs.push({ id: doc.id, ...doc.data() } as BlogPost);
        });

        const sortedDefaults = [...DEFAULT_POSTS].sort(
          (a, b) => getBlogTime(b) - getBlogTime(a),
        );

        if (fetchedBlogs.length > 0) {
          // Merge custom posts from Cloud Firestore with our beautiful defaults
          const customIds = new Set(fetchedBlogs.map((b) => b.id));
          const nonDuplicatedDefaults = DEFAULT_POSTS.filter(
            (p) => !customIds.has(p.id),
          );
          const merged = [...fetchedBlogs, ...nonDuplicatedDefaults];
          merged.sort((a, b) => {
            const timeA = getBlogTime(a);
            const timeB = getBlogTime(b);
            if (timeA !== timeB) return timeB - timeA;
            // secondary fallback sorting by createdAt order
            const aCreated = a.createdAt?.seconds || 0;
            const bCreated = b.createdAt?.seconds || 0;
            return bCreated - aCreated;
          });
          setBlogs(merged);
        } else {
          setBlogs(sortedDefaults);
        }
        setIsLoading(false);
      },
      (error) => {
        console.error(
          "Failed to load posts from cloud database. Falling back to local static logs.",
          error,
        );
        setBlogs(
          [...DEFAULT_POSTS].sort((a, b) => getBlogTime(b) - getBlogTime(a)),
        );
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  // Filtering Logic
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    "All",
    "Startups & Companies",
    "Taxation & GST",
    "Licenses & Registrations",
    "Advisory & Growth",
  ];

  return (
    <div
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20"
      id="makeeazy-blog-feed"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0]">
                  Knowledge Hub
                </h1>
                <p className="text-slate-500 mt-1">
                  Latest analysis, compliance rules, and tactical strategies
                </p>
              </div>
            </div>
            {/* Search Box */}
            <div className="relative w-full md:w-96" id="blog-search-container">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title or category..."
                className="block w-full pl-11 pr-4 py-3 bg-slate-50 text-slate-900 placeholder-slate-400 text-sm font-medium rounded-xl border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar Category Filters */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-4">
              <h3 className="font-bold text-[#3150A0] uppercase tracking-wider text-xs flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-500" />
                Categories
              </h3>

              <div
                className="flex flex-col gap-1 md:gap-1.5"
                id="blog-categories-list"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-4 py-3 text-xs md:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                      selectedCategory === cat
                        ? "bg-slate-100 text-[#3150A0] border border-slate-200"
                        : "text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100"
                    }`}
                  >
                    <span>{cat === "All" ? "All Articles" : cat}</span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${selectedCategory === cat ? "translate-x-1 text-orange-500" : "text-slate-300"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Newsletter / Contact CTA component removed as per request */}
          </div>

          {/* Right Blogs List Feed Grid */}
          <div
            className="lg:col-span-3 space-y-6 text-left"
            id="blog-insights-feed"
          >
            {isLoading ? (
              /* Skeletal Loader Grid */
              <div className="grid md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200/80 rounded-3xl p-6 space-y-4 animate-pulse"
                  >
                    <div className="h-4 bg-slate-200 rounded w-1/3" />
                    <div className="space-y-2">
                      <div className="h-6 bg-slate-200 rounded w-5/6" />
                      <div className="h-4 bg-slate-200 rounded w-full" />
                    </div>
                    <div className="h-4 bg-slate-200 rounded w-1/2" />
                  </div>
                ))}
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-12 text-center space-y-4">
                <div className="text-4xl text-slate-400">🔍</div>
                <h3 className="font-display font-bold text-[#3150A0] text-lg">
                  No Matching Articles Found
                </h3>
                <p className="text-xs md:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                  Could not find any insights matching "{searchQuery}". Try
                  searching for popular topics like "GST", "ROC", "MSME" or
                  click another category list.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredBlogs.map((blog, idx) => (
                  <motion.a
                    href={`/blog/${blog.slug}`}
                    key={blog.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                    className="bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group block"
                  >

                    {blog.bannerImage && (
                      <div className="w-full h-40 bg-slate-100 overflow-hidden shrink-0">
                        <img src={blog.bannerImage} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    )}
                    <div className="p-6 md:p-7 space-y-4">

                      {/* Upper Category Badging */}
                      <div className="flex items-center justify-between text-[11px] font-bold font-mono tracking-wider">
                        <span className="text-[#f97316] uppercase">
                          {blog.category.split(" ")[0]}
                        </span>
                        <span className="text-slate-400 flex items-center gap-1 font-medium">
                          <Calendar className="w-3.5 h-3.5 stroke-[1.8]" />
                          {blog.date}
                        </span>
                      </div>

                      {/* Blog title and text summary */}
                      <div className="space-y-2">
                        <h3 className="font-display font-bold text-slate-900 text-base md:text-lg leading-snug tracking-tight text-[#3150A0] group-hover:text-blue-700 transition-colors line-clamp-2">
                          {blog.title}
                        </h3>
                        <p className="text-xs md:text-sm text-slate-500 line-clamp-3 leading-relaxed font-normal">
                          {blog.excerpt}
                        </p>
                      </div>

                      {/* Tag bubbles */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-bold text-slate-500 bg-slate-100 rounded-lg px-2 py-0.5 border border-slate-200/50"
                          >
                            {tag}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="text-[9px] font-bold text-slate-400 bg-slate-50 rounded-lg px-1.5 py-0.5">
                            +{blog.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Interactive Actions */}
                    <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-between gap-4">
                      <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-slate-400 stroke-[1.8]" />
                        {blog.readTime}
                      </span>

                      <span className="inline-flex items-center gap-1 text-[#3150A0] group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all text-slate-400">
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
