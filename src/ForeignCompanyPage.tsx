import React from 'react';
import { ArrowLeft, Globe, CheckCircle2 } from 'lucide-react';

export default function ForeignCompanyPage() {
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
                <Globe className="w-8 h-8" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Branch Office or Subsidiary of Foreign Company</h1>
                <p className="text-slate-500 font-medium mt-1">Establish a legal presence in India</p>
              </div>
            </div>

            <div className="text-justify">
              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8 first:mt-0">How this business model works</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                A foreign company can enter India by setting up a branch office, liaison office, project office, or Indian subsidiary. A subsidiary is usually incorporated as an Indian company, while branch and liaison offices are subject to specific regulatory permissions and conditions.
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                This model allows international businesses to operate in India, serve Indian customers, manage projects, conduct market research, or expand their global operations.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">How it is better than others</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                It is better for foreign businesses because it allows them to establish a legal presence in India. A subsidiary also provides a separate Indian legal identity, while branch or liaison offices may be useful for limited activities.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Who should choose this model</h2>
              
              <p className="text-slate-700 leading-relaxed mb-4">
                This model is suitable for foreign companies, multinational businesses, international service providers, exporters, technology companies, and businesses planning to enter the Indian market.
              </p>

              <h2 className="text-2xl font-bold text-[#3150A0] mb-3 mt-8">Documents required for registration</h2>
              
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <p className="text-slate-700 font-medium mb-4 text-left">Common documents include:</p>
                <ul className="space-y-3">
                  {[
                    "Certificate of incorporation of foreign company",
                    "Charter documents of the foreign company",
                    "Board resolution for setting up Indian presence",
                    "Details of directors and authorized representatives",
                    "Passport and address proof of foreign directors/representatives",
                    "Proof of registered office in India",
                    "Rent agreement or ownership proof",
                    "NOC from property owner",
                    "Utility bill of Indian office address",
                    "RBI/FEMA-related approvals, where applicable",
                    "MCA registration documents, where applicable",
                    "PAN and tax registration documents",
                    "Details of proposed business activities in India"
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
