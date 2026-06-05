import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer" onClick={() => window.location.href = '/'}>
              <img 
                src="/logo.png" 
                alt="Make Eazy Logo" 
                className="h-14 w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement?.querySelector('.fallback-text')?.classList.remove('hidden');
                }}
              />
              <div className="fallback-text hidden flex items-center gap-1">
                <span className="font-display font-bold text-2xl tracking-tight text-blue-900">Make</span>
                <span className="font-display font-bold text-2xl tracking-tight text-orange-500">Eazy</span>
              </div>
            </div>
            
            <a href="/" className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-orange-500 transition-colors group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-slate-200 shadow-sm"
        >
          <h1 className="font-display text-4xl font-bold text-[#3150A0] mb-8">Terms and Conditions</h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-justify">
            <p className="text-lg text-slate-600 leading-normal mb-6 text-justify">
              These Terms and Conditions (the “Terms”) set forth the legally binding terms governing your access to and use of the website and services made available by MakeEazy Consultants Private Limited (“Company,” “we,” “us,” or “our”). By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must immediately cease use of this website and any related services.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Definitions and Interpretation</h2>
            <p>For the purposes of these Terms, unless the context otherwise requires:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>“Company,” “we,” “us,” and “our” mean MakeEazy Consultants Private Limited.</li>
              <li>“You,” “your,” “user,” and “client” mean any natural person, organisation, or legal entity accessing, browsing, or using the website or engaging the services.</li>
              <li>“Services” mean the services, consultations, products, deliverables, or solutions offered or provided by the Company through the website or otherwise.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Acceptance of Terms</h2>
            <p>
              By accessing or using the website, submitting an enquiry, or engaging the Services, you represent and warrant that you have read, understood, and agree to be legally bound by these Terms and by any other policies expressly incorporated herein, including the Privacy Policy, Disclaimer, and Confidentiality Policy.
            </p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Use of the Website</h2>
            <p>You shall use the website solely for lawful purposes and strictly in accordance with these Terms. Without limitation, you shall not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any manner that may damage, disable, overburden, impair, or compromise the operation, security, or availability of the website.</li>
              <li>Attempt to gain unauthorised access to any portion of the website, its servers, networks, databases, or any systems or infrastructure connected to it.</li>
              <li>Upload, post, transmit, distribute, or otherwise make available any material that is unlawful, fraudulent, defamatory, harmful, malicious, or otherwise objectionable.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Services & Engagement</h2>
            <p>Any engagement of the Services, whether initiated online or offline, shall be subject to separate discussions, proposals, confirmations, and, where applicable, formal written agreements. All information made available on this website is provided for general informational purposes only and shall not constitute an offer, solicitation, representation, warranty, or binding commitment on the part of the Company.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The final scope of work, timelines, fees, assumptions, and deliverables shall be governed exclusively by the applicable written proposal, quotation, statement of work, email confirmation, or formal agreement executed between the parties.</li>
              <li>The Company reserves the absolute right, at its sole discretion and without obligation to provide reasons, to accept, reject, suspend, or discontinue any enquiry, engagement, or request for Services.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Pricing, Payments & Refunds</h2>
            <p>Where applicable, the fees and charges for the Services shall be communicated separately through proposals, quotations, invoices, or other written correspondence issued by the Company.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All payments shall be made strictly in accordance with the agreed payment schedule, invoicing terms, and prescribed mode of payment.</li>
              <li>Without prejudice to any other rights or remedies available to the Company, the Company may suspend, withhold, delay, or discontinue the provision of any Services in the event of late payment, non-payment, or breach of payment obligations.</li>
              <li>Any refund, if approved by the Company, shall be governed by the applicable internal policies of the Company and the specific contractual terms agreed in relation to the relevant engagement.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. User Responsibilities</h2>
            <p>You acknowledge and agree that you shall be solely responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing true, accurate, current, and complete information in all communications, submissions, and dealings with the Company.</li>
              <li>Promptly reviewing, verifying, and approving any documents, deliverables, forms, or submissions prepared or processed on the basis of the information or instructions provided by you.</li>
              <li>Maintaining the confidentiality and security of any login credentials, account details, correspondence, or access information provided to you or used by you in connection with the website or the Services.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Intellectual Property</h2>
            <p>All content, materials, and intellectual property appearing on or made available through the website, including without limitation text, graphics, designs, logos, icons, layouts, software, and other proprietary material, are owned by or licensed to MakeEazy Consultants Private Limited and are protected by applicable intellectual property, copyright, trademark, and other proprietary rights laws.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Except as expressly permitted in writing by the Company, you shall not copy, reproduce, republish, upload, post, transmit, distribute, modify, adapt, display, perform, or create derivative works from any such content or material.</li>
              <li>Any unauthorised use, infringement, or misappropriation of the Company’s intellectual property rights may result in civil and/or criminal proceedings, to the fullest extent permitted by law.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Third-Party Links & Services</h2>
            <p>The website may contain links to third-party websites, tools, platforms, or services for convenience only. Such links do not constitute any endorsement, approval, recommendation, representation, or warranty by the Company. The Company does not control and shall not be responsible or liable for the content, availability, accuracy, terms, policies, practices, or acts or omissions of any third party.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted under applicable law, MakeEazy Consultants Private Limited, including its directors, officers, employees, consultants, agents, affiliates, and representatives, shall not be liable for any direct, indirect, incidental, consequential, exemplary, punitive, or special loss or damage arising out of or in connection with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your access to, use of, inability to use, or reliance upon the website or the Services.</li>
              <li>Any error, omission, interruption, delay, defect, inaccuracy, or incompleteness in any content, information, communication, or material made available through the website or the Services.</li>
              <li>Any loss of data, revenue, opportunity, goodwill, business, profits, or anticipated savings, whether arising in contract, tort, negligence, strict liability, or otherwise.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. No Guarantee of Outcomes</h2>
            <p>The Company shall use commercially reasonable efforts in the performance of the Services; however, no assurance, guarantee, warranty, or undertaking is given in respect of any specific outcome, result, approval, success, or benefit. Any outcome may be affected by factors beyond the Company’s reasonable control, including your actions, omissions, third-party decisions, and external circumstances.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">11. Indemnity</h2>
            <p>You agree to defend, indemnify, and hold harmless MakeEazy Consultants Private Limited and its directors, officers, employees, consultants, agents, affiliates, successors, and assigns from and against any and all claims, demands, actions, proceedings, liabilities, damages, losses, costs, and expenses (including reasonable legal fees and expenses) arising out of or in connection with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Any breach, violation, or non-compliance by you with these Terms or any applicable policy incorporated herein.</li>
              <li>Any misuse of the website, the Services, or any materials made available by the Company.</li>
              <li>Any actual or alleged violation of applicable law, regulation, third-party right, or contractual obligation by you.</li>
            </ul>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">12. Changes to Terms & Conditions</h2>
            <p>The Company reserves the right to amend, modify, update, or replace these Terms at any time and in its sole discretion, without prior notice, unless otherwise required by applicable law. Any such revised Terms shall become effective upon publication on this page or on such later date as may be specified. Your continued access to or use of the website following the publication of revised Terms shall constitute your acceptance of those revised Terms.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">13. Termination of Access</h2>
            <p>Without prejudice to any other rights or remedies available to the Company, the Company may, at any time and without prior notice, suspend, restrict, or terminate your access to the website or the Services, in whole or in part, if the Company reasonably believes that you have breached these Terms, violated applicable law, or otherwise engaged in conduct that may expose the Company to legal, operational, or reputational risk.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">14. Governing Law & Jurisdiction</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of laws principles. Any dispute, controversy, claim, or cause of action arising out of or relating to these Terms, the website, or the Services shall be subject to the exclusive jurisdiction of the competent courts located in Hyderabad, Telangana.</p>

            <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">15. Contact Us</h2>
            <p>If you have any questions, notices, or concerns regarding these Terms and Conditions, you may contact the Company using the details set out below:</p>
            <ul className="list-none space-y-1">
              <li><strong>Email:</strong> info@makeeazy.in</li>
              <li><strong>Phone:</strong> +91 9992819995</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
