import { X } from 'lucide-react';

export default function BusinessHealthScore() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-10 shadow-xl text-center border border-slate-100 relative overflow-hidden">
        {/* Background decorative blobs */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full opacity-50 -z-0" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100 rounded-tr-full opacity-50 -z-0" />
        
        <div className="relative z-10">
          <div className="mb-8 flex justify-center">
            {/* Maintenance Illustration */}
            <div className="w-48 h-48 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 border-4 border-dashed border-orange-200 shadow-inner">
               <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-40">
                  <circle cx="100" cy="100" r="85" fill="#FFEDD5" />
                  
                  {/* Wrench */}
                  <g transform="translate(110, 90) rotate(45)">
                    <rect x="-10" y="-40" width="20" height="80" rx="6" fill="#94A3B8" />    
                    <path d="M -15 -45 C -15 -60, 15 -60, 15 -45 L 8 -40 L 8 -25 L -8 -25 L -8 -40 Z" fill="#64748B" />
                    <circle cx="0" cy="40" r="12" fill="#64748B" />
                    <circle cx="0" cy="40" r="6" fill="#FFEDD5" />
                  </g>

                  {/* Screwdriver */}
                  <g transform="translate(90, 110) rotate(-45)">
                    <rect x="-4" y="-30" width="8" height="60" fill="#CBD5E1" />
                    <path d="M -4 -30 L -2 -45 L 2 -45 L 4 -30 Z" fill="#94A3B8" />
                    <rect x="-8" y="30" width="16" height="40" rx="4" fill="#F97316" />
                    <rect x="-8" y="35" width="16" height="5" fill="#EA580C" />
                    <rect x="-8" y="45" width="16" height="5" fill="#EA580C" />
                    <rect x="-8" y="55" width="16" height="5" fill="#EA580C" />
                    <path d="M -8 70 C -8 80, 8 80, 8 70 Z" fill="#C2410C" />
                  </g>

                  {/* Gear */}
                  <g transform="translate(140, 140) rotate(15)">
                    <path d="M 0 -22 L 4 -22 L 6 -15 L 10 -13 L 16 -18 L 20 -15 L 16 -10 L 18 -5 L 25 -3 L 25 3 L 18 5 L 16 10 L 20 15 L 16 18 L 10 13 L 6 15 L 4 22 L -4 22 L -6 15 L -10 13 L -16 18 L -20 15 L -16 10 L -18 5 L -25 3 L -25 -3 L -18 -5 L -16 -10 L -20 -15 L -16 -18 L -10 -13 L -6 -15 Z" fill="#3B82F6" />
                    <circle cx="0" cy="0" r="12" fill="#FFEDD5" />
                    <circle cx="0" cy="0" r="8" fill="#1E40AF" />
                  </g>
                  
                  {/* Sparkles/Stars */}
                  <path d="M 50 50 Q 55 40 60 50 Q 70 55 60 60 Q 55 70 50 60 Q 40 55 50 50 Z" fill="#FBBF24" />
                  <path d="M 150 40 Q 153 35 156 40 Q 161 43 156 46 Q 153 51 150 46 Q 145 43 150 40 Z" fill="#FBBF24" />
               </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold font-display text-[#3150A0] mb-4 tracking-tight">Stay Tuned!</h2>
          <p className="text-lg text-slate-600 mb-8 leading-normal max-w-md mx-auto text-justify">
            We are bringing more advanced features. Stay connected to know more about "Business Health Score".
          </p>
          <a href="/" className="inline-flex bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-orange-500/20 items-center justify-center gap-2 group">
            <X className="w-5 h-5 group-hover:-rotate-90 transition-transform" />
            Go Back
          </a>
        </div>
      </div>
    </div>
  );
}
