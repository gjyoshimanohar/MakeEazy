import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Clock,
  Calendar,
  Tag,
  ArrowLeft,
  Linkedin
} from 'lucide-react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from './firebase';
import { BlogPost, DEFAULT_POSTS } from './BlogPage';
import { useParams, useNavigate } from 'react-router-dom';

const getAuthorBio = (author: string) => {
  const norm = author.toLowerCase();
  if (norm.includes('gyanesh') || norm.includes('manohar')) {
    return {
      description: 'CA Gyanesh Manohar is a practicing Chartered Accountant and senior corporate advisor with over 12 years of core statutory practice in GST litigations, private corporate formulations, auditing procedures, and foreign investments (FDI). He has advised hundreds of Indian startup founders on scaling in a tax-efficient, fully compliant framework.',
      avatarUrl: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200',
      designation: 'Senior Chartered Accountant',
      firm: 'MakeEazy Statutory Board'
    };
  }
  return {
    description: `${author} is a dedicated compliance specialist and professional legal consultant. They represent prominent enterprises across corporate filing preparations, trademark clearances, legal drafting, and general statutory structures.`,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    designation: 'Senior Compliance Specialist',
    firm: 'MakeEazy Advisory'
  };
};

export default function BlogArticlePage({ slug }: { slug?: string }) {
  const defaultPost = slug ? DEFAULT_POSTS.find(p => p.slug === slug) || null : null;
  const [post, setPost] = useState<BlogPost | null>(defaultPost);
  const [isLoading, setIsLoading] = useState(!defaultPost);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    async function fetchPost() {
      if (!slug) return;
      
      // Serve local default immediately if it exists (Stale-While-Revalidate pattern)
      const defaultPost = DEFAULT_POSTS.find(p => p.slug === slug);
      if (defaultPost) {
        setPost(defaultPost);
        setIsLoading(false);
      }
      
      try {
        // Background check firestore
        const postsCollection = collection(db, 'posts');
        const q = query(postsCollection, where('slug', '==', slug), limit(1));
        const snapshot = await getDocs(q);
        
        if (!snapshot.empty) {
          const doc = snapshot.docs[0];
          setPost({ id: doc.id, ...doc.data() } as BlogPost);
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.error('Error fetching blog from cloud:', err);
      }

      // If we didn't find anything locally or remotely, stop loading.
      if (!defaultPost) {
        setIsLoading(false);
      }
    }
    
    fetchPost();
  }, [slug]);

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
            <h1 className="text-3xl font-extrabold text-[#3150A0]">Article Not Found</h1>
            <p className="text-slate-500 mt-4 mb-8">The compliance log you are looking for does not exist or has been moved.</p>
            <button
               onClick={() => navigate('/blogs')}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation and Category */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
               onClick={() => navigate('/blogs')}
               className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-[#3150A0] transition-colors cursor-pointer bg-white px-4 py-2 border border-slate-200 rounded-full shadow-sm"
            >
               <ArrowLeft className="w-4 h-4" /> Back to Insights
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

               <h1 className="text-3xl md:text-5xl font-extrabold text-[#3150A0] leading-tight tracking-tight font-display">
               {post.title}
               </h1>

               <div className="flex items-center gap-3 pt-4">
               <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg shadow-inner uppercase shrink-0">
                  {post.author.charAt(0)}
               </div>
               <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight">
                     {post.author}
                  </h4>
                  <p className="text-[11px] font-bold text-[#f97316] uppercase tracking-wider">
                     Statutory Compliance Board
                  </p>
               </div>
               </div>
            </div>

            {/* Sub-excerpt info box */}
            <div className="bg-slate-50 border-l-4 border-orange-500 rounded-r-2xl p-5 md:p-6 text-sm md:text-base text-slate-700 italic font-medium leading-relaxed shadow-inner mb-10">
               "{post.excerpt}"
            </div>

            {/* Core Advisory Content prose */}
            <div 
               className="suneditor-content-view text-justify max-w-4xl mx-auto w-full mb-12"
               dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tag Cluster */}
            <div className="border-t border-slate-100 pt-8 space-y-3 mb-10">
               <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
               <Tag className="w-3.5 h-3.5" /> Filed keywords
               </h4>
               <div className="flex flex-wrap gap-2">
               {post.tags.map((tag) => (
                  <span key={tag} className="text-xs font-bold text-[#3150A0] bg-[#3150A0]/5 border border-[#3150A0]/10 px-3 py-1 rounded-xl">
                     #{tag}
                  </span>
               ))}
               </div>
            </div>

            {/* Author Bio Section */}
            {(() => {
               const authorName = post.author || 'CA Gyanesh Manohar';
               const fallbackBio = getAuthorBio(authorName);
               const authorInfo = {
                  description: post.authorBio || fallbackBio.description,
                  avatarUrl: post.authorAvatar || fallbackBio.avatarUrl,
                  designation: post.authorDesignation || fallbackBio.designation,
                  firm: post.authorFirm || fallbackBio.firm
               };
               const linkedinUrl = post.authorLinkedin || (
                  (authorName.toLowerCase().includes('gyanesh') || authorName.toLowerCase().includes('manohar')) 
                     ? 'https://www.linkedin.com' 
                     : ''
               );
               return (
                  <div className="border-t border-b border-slate-100 py-8 mb-10 text-left bg-slate-50/35 px-4 sm:px-6 rounded-2xl border border-slate-150/70" id="blog-author-bio">
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
                              <div className="absolute -bottom-1 -right-1 bg-green-500 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse" title="Verified Professional" />
                           </div>
                        </div>
                        
                        <div className="space-y-2 text-center sm:text-left flex-1">
                           <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
                              <h3 className="font-display font-extrabold text-base md:text-lg text-[#3150A0]">
                                 {authorName}
                              </h3>
                              <span className="hidden sm:inline text-slate-350 select-none">•</span>
                              <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-100/60 px-2.5 py-1 rounded-full inline-block leading-none">
                                 {authorInfo.designation}
                              </span>
                              {linkedinUrl && (
                                 <a 
                                    href={linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/80 border border-blue-100 px-2.5 py-1 rounded-full transition-all"
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
                  Connect with our certified CAs to file ROC returns, audit accounts, or register trademarks flawlessly starting from just ₹999. No hidden agency commissions.
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
