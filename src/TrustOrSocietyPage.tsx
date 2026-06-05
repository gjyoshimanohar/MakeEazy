import React from 'react';
import { ArrowLeft, HandHeart, CheckCircle2 } from 'lucide-react';

export default function TrustOrSocietyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="#startup"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Startup Services
        </a>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 overflow-hidden relative">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-orange-50 rounded-full blur-3xl opacity-50 z-0"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-5 mb-10">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 border border-orange-100 shadow-sm">
                <HandHeart className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Trust or Society</h1>
                <p className="text-slate-500 font-medium mt-1">For social, charitable, and community activities</p>
              </div>
            </div>

            <div className="text-justify">
              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8 first:mt-0">How this business model works</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                A trust or society is generally formed for charitable, religious, educational, cultural, social, or welfare purposes. A trust is usually managed by trustees, while a society is managed by a governing body or managing committee.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                These structures are commonly used by NGOs, welfare associations, educational groups, religious institutions, and community organizations. They are usually registered under state-specific laws, so the process and documents may vary from state to state.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">How it is better than others</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                A trust or society can be simpler and more suitable than a Section 8 Company for local-level social, religious, or community-based activities. It may also involve comparatively lower setup and compliance requirements depending on the state.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Who should choose this model</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                This model is suitable for charitable groups, religious organizations, educational societies, cultural associations, welfare groups, and NGOs working at a local or regional level.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Documents required for registration</h2>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <p className="text-slate-700 font-medium mb-4 text-left">Common documents include:</p>
                <ul className="space-y-3">
                  {[
                    "Trust deed or memorandum of association",
                    "Rules and regulations, in case of society",
                    "PAN cards of trustees/members",
                    "Aadhaar/address proofs of trustees/members",
                    "Passport-size photographs",
                    "Registered office address proof",
                    "Rent agreement or ownership proof",
                    "NOC from property owner",
                    "Utility bill of premises",
                    "Details of objectives and activities",
                    "Details of governing body or trustees",
                    "Affidavits or declarations, if required by state authority"
                  ].map((doc, i) => (
                    <li key={i} className="flex items-start gap-3 text-left">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-slate-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 text-center flex flex-col items-center border-t border-slate-100">
                <a 
                  href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center"
                >
                  Click Here to Register Your Business
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
