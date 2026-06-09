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
  ChevronUp,
} from "lucide-react";
import { collection, query, where, getDocs, limit } from "firebase/firestore";
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

  const [toc, setToc] = useState<{ id: string; text: string; level: number }[]>(
    [],
  );
  const [activeId, setActiveId] = useState<string>("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

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

      try {
        // Background check firestore
        const postsCollection = collection(db, "posts");
        const q = query(postsCollection, where("slug", "==", slug), limit(1));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          setPost({ id: doc.id, ...doc.data() } as BlogPost);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.error("Error fetching blog from cloud:", err);
      }

      // If we didn't find anything locally or remotely, stop loading.
      if (!defaultPost) {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  // Table of Contents heading parser
  useEffect(() => {
    if (!post || !contentRef.current) return;

    // Retrieve all H2 and H3 elements inside the core content view
    const headings = contentRef.current.querySelectorAll("h2, h3");
    const items: { id: string; text: string; level: number }[] = [];

    headings.forEach((heading, idx) => {
      // Apply scroll-margin-top to support offset scrolling nicely
      if (heading instanceof HTMLElement) {
        heading.style.scrollMarginTop = "120px";
      }
      let id = heading.id;
      if (!id) {
        const cleanText = heading.textContent ? heading.textContent.trim() : "";
        const slugified = cleanText
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-");
        id = slugified ? `heading-${slugified}-${idx}` : `heading-${idx}`;
        heading.id = id;
      }
      items.push({
        id,
        text: heading.textContent || "",
        level: heading.tagName.toLowerCase() === "h3" ? 3 : 2,
      });
    });

    setToc(items);
  }, [post, isLoading]); // Re-run when post loads or is fully fetched

  // IntersectionObserver to highlight active item
  useEffect(() => {
    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort visible entries by distance from the top of viewport and select the highest one
          const sorted = visibleEntries.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );
          setActiveId(sorted[0].target.id);
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: 0.1,
      },
    );

    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [toc]);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      if (element instanceof HTMLElement) {
        element.style.scrollMarginTop = "120px";
      }
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMobileTocOpen(false);
    }
  };

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
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 font-sans text-slate-900 selection:bg-orange-200 selection:text-orange-900">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation and Category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#3150A0] transition-colors cursor-pointer bg-white px-4 py-2 border border-slate-200 rounded-full shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Hub
          </button>

          <span className="text-[10px] font-bold uppercase tracking-widest text-[#f97316] bg-[#f97316]/10 px-3 py-1.5 rounded-full border border-[#f97316]/20">
            {post.category}
          </span>
        </div>

        {/* Article Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-sm flex flex-col p-6 md:p-10 lg:p-12 mb-12"
        >
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

          {/* Mobile collapsible Table of Contents */}
          {toc.length > 0 && (
            <div className="block lg:hidden mb-8 bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs">
              <button
                onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
                className="w-full px-5 py-4 flex items-center justify-between text-left font-bold text-xs uppercase tracking-wider text-[#3150A0] hover:bg-slate-100/50 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                  Table of Contents ({toc.length})
                </span>
                {isMobileTocOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-500" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                )}
              </button>
              {isMobileTocOpen && (
                <div className="border-t border-slate-250 px-5 py-4 bg-slate-50/50 space-y-2.5 max-h-[50vh] overflow-y-auto">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleScrollTo(e, item.id)}
                      className={`block text-xs font-medium leading-relaxed transition-all pl-3 border-l-2 py-0.5 hover:text-[#3150A0] text-left ${
                        item.level === 3 ? "ml-3" : ""
                      } ${
                        activeId === item.id
                          ? "border-orange-500 text-[#3150A0] font-bold"
                          : "border-slate-200 text-slate-500 hover:border-slate-450"
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Split layout for Content and Table of Contents */}
          <div
            className={`grid grid-cols-1 ${toc.length > 0 ? "lg:grid-cols-12" : ""} gap-10 items-start`}
          >
            {/* Table of Contents Sticky Sidebar on Desktop */}
            {toc.length > 0 && (
              <div className="hidden lg:block lg:col-span-4 xl:col-span-3 lg:sticky lg:top-28 space-y-4">
                <div className="bg-slate-50/75 border border-slate-205 p-5 rounded-2xl shadow-xs">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#3150A0] mb-3.5 flex items-center gap-2 border-b border-slate-200/80 pb-2.5">
                    <svg
                      className="w-4 h-4 text-orange-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                    Table of Contents
                  </h3>
                  <nav className="space-y-2 max-h-[60vh] overflow-y-auto pr-1">
                    {toc.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleScrollTo(e, item.id)}
                        className={`block text-xs leading-relaxed transition-all pl-3 border-l-2 py-0.5 hover:text-[#3150A0] text-left ${
                          item.level === 3
                            ? "ml-3 text-[11px] text-slate-450 font-medium"
                            : "text-slate-600 font-semibold"
                        } ${
                          activeId === item.id
                            ? "border-orange-500 text-[#3150A0] font-bold border-l-2"
                            : "border-slate-200 hover:border-slate-400"
                        }`}
                      >
                        {item.text}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            )}

            {/* Core Content */}
            <div
              className={`w-full ${toc.length > 0 ? "lg:col-span-8 xl:col-span-9" : ""}`}
            >
              <div
                ref={contentRef}
                className="suneditor-content-view text-justify max-w-none w-full mb-12"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
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
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex justify-between items-center p-5 text-left font-bold text-sm md:text-base text-slate-800 hover:text-orange-500 focus:outline-none transition-colors"
                      >
                        <span className="pr-4">{`${index + 1}. ${faq.question}`}</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 pt-8 mb-10">
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
                <Share2 className="w-3.5 h-3.5" /> Share Advisory Externally
              </h4>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {/* LinkedIn Share */}
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + "/blogs/" + post.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 text-white bg-[#0a66c2] hover:bg-[#004182] rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                {/* Twitter / X Share */}
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.origin + "/blogs/" + post.slug)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-9 h-9 text-white bg-[#0f1419] hover:bg-[#272c30] rounded-full transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
                  title="Share on Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>

                {/* WhatsApp Share */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.origin + "/blogs/" + post.slug)}`}
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
              designation: post.authorDesignation || fallbackBio.designation,
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
          <div className="bg-slate-50 rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6 border border-slate-100">
            <div className="text-left space-y-2 max-w-md">
              <h4 className="text-base md:text-lg font-bold text-[#3150A0] tracking-tight">
                Confused about legal deadlines or calculations?
              </h4>
              <p className="text-xs md:text-sm text-slate-500 leading-normal">
                Connect with our certified CAs to file ROC returns, audit
                accounts, or register trademarks flawlessly starting from just
                ₹999. No hidden agency commissions.
              </p>
            </div>
            <a
              href="/contact-us"
              className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3.5 rounded-xl text-center text-xs md:text-sm shadow-md hover:shadow-lg active:scale-95 transition-all text-nowrap cursor-pointer"
            >
              Discuss Compliances Instantly
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
