import React from 'react';
import { Scale, ArrowLeft, ShieldAlert, FileWarning, Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LegalAndDocumentationPage() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/#home" className="inline-flex items-center text-sm font-semibold text-[#3150A0] hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50 max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 shadow-inner">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0] leading-tight">Safeguarding Your Future: The Power of Precision in Legal Documents</h1>
            </div>
          </div>
          
          <div className="text-justify space-y-6">
            <p className="text-slate-700 text-lg leading-relaxed">
              In the landscape of modern business, a handshake is a great start, but a well-drafted legal document is the ultimate foundation. Whether you are scaling operations, structuring a new entity, or onboarding vendors, the contracts you sign dictate your exposure to risk, tax liabilities, and regulatory scrutiny.
            </p>

            <p className="text-slate-700 text-lg leading-relaxed">
              Legal documents are not just formalities—they are strategic tools that define relationships, secure assets, and ensure your operational continuity.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-center text-[#3150A0] mb-6">
            Why Legal Documents Are Your Strongest Asset
          </h2>
          <p className="text-slate-600 text-lg text-center max-w-3xl mx-auto mb-12">
            A robust legal framework does more than just bind parties to an agreement; it acts as a pre-emptive shield for your business operations.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-[#3150A0] rounded-xl flex items-center justify-center mb-6 shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-800 mb-4">Risk Mitigation & Dispute Resolution</h3>
              <p className="text-slate-600 leading-relaxed text-justify flex-grow">
                Clear documentation eliminates ambiguity. It defines the exact boundaries of a relationship, outlines deliverables, and provides a clear roadmap for resolving disputes before they escalate into costly litigation or arbitration.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-[#3150A0] rounded-xl flex items-center justify-center mb-6 shrink-0">
                <FileWarning className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-800 mb-4">Regulatory Alignment</h3>
              <p className="text-slate-600 leading-relaxed text-justify flex-grow">
                In an environment where tax laws, corporate statutes, and audit requirements frequently shift, your agreements must seamlessly align with current statutory frameworks to prevent penalties.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-blue-50 text-[#3150A0] rounded-xl flex items-center justify-center mb-6 shrink-0">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-800 mb-4">Protecting Financial Interests</h3>
              <p className="text-slate-600 leading-relaxed text-justify flex-grow">
                From strict payment schedules and confidentiality clauses to intellectual property rights, legal contracts safeguard the financial health and proprietary edge of your business.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100 shadow-lg">
            <h2 className="font-display text-3xl font-bold text-[#3150A0] mb-6">
              The Danger of the "Copy-Paste" Approach
            </h2>
            <div className="space-y-4 text-justify mb-10">
              <p className="text-slate-700 text-lg leading-relaxed">
                It is a common misconception that any legal template will suffice. However, downloading a generic document online is a significant liability. Appropriate drafting is not about stringing together complex legal jargon; it is about applying strategic foresight to your specific situation.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                A single misplaced word or an omitted clause regarding tax liabilities can fundamentally alter the risk profile of a transaction.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-[#3150A0] text-white">
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm w-1/4">Aspect</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm w-3/8 border-l border-white/20">Generic Templates</th>
                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-sm w-3/8 border-l border-white/20">Custom Drafting</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#3150A0]">Protection</td>
                    <td className="py-5 px-6 border-l border-slate-100 text-orange-600 font-medium">Leaves operational and legal loopholes open</td>
                    <td className="py-5 px-6 border-l border-slate-100"><div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>Closes specific liability gaps</span></div></td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#3150A0]">Compliance</td>
                    <td className="py-5 px-6 border-l border-slate-100 text-orange-600 font-medium">Often outdated or region-agnostic</td>
                    <td className="py-5 px-6 border-l border-slate-100"><div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>Aligned with current corporate and tax frameworks</span></div></td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="py-5 px-6 font-bold text-[#3150A0]">Clarity</td>
                    <td className="py-5 px-6 border-l border-slate-100 text-orange-600 font-medium">Broad, vague terms open to interpretation</td>
                    <td className="py-5 px-6 border-l border-slate-100"><div className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" /><span>Precise definitions tailored to your exact transaction</span></div></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
