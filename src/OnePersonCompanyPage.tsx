import React from 'react';
import { ArrowLeft, User, CheckCircle2 } from 'lucide-react';

export default function OnePersonCompanyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="/startup"
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
                <User className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">One Person Company</h1>
                <p className="text-slate-500 font-medium mt-1">Single individual with limited liability</p>
              </div>
            </div>

            <div className="text-justify">
              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8 first:mt-0">How this business model works</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                A One Person Company, or OPC, allows a single individual to start a company with limited liability. The owner acts as the shareholder and usually controls the company, while a nominee is appointed to ensure continuity in case the owner is unable to manage the company.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                An OPC is registered with the Ministry of Corporate Affairs and has a separate legal identity. It gives solo entrepreneurs the benefits of a company structure while allowing full control over the business. Startup India describes OPC as an improvement over proprietorship because it limits the owner's liability.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">How it is better than others</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                It is better than a sole proprietorship because the owner's liability is limited. It also gives the business a more professional image and legal recognition compared to an individual-owned informal business.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Who should choose this model</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                This model is suitable for solo entrepreneurs, consultants, freelancers, small business owners, and individuals who want full control with limited liability protection.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Documents required for registration</h2>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <p className="text-slate-700 font-medium mb-4 text-left">Common documents include:</p>
                <ul className="space-y-3">
                  {[
                    "PAN card of the owner/director",
                    "Aadhaar card/address proof of the owner/director",
                    "Passport-size photograph",
                    "Digital Signature Certificate",
                    "Director Identification Number, if applicable",
                    "Nominee's consent and KYC documents",
                    "Proof of registered office address",
                    "Rent agreement or ownership proof",
                    "NOC from property owner",
                    "Utility bill of registered office",
                    "Memorandum of Association",
                    "Articles of Association",
                    "Declaration and consent forms",
                    "PAN and TAN application details"
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
