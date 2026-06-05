import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
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
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <h1 className="font-display text-4xl font-bold text-[#3150A0] mb-8">Our Privacy Policy</h1>
          
          <div className="prose prose-slate max-w-none text-justify">
            <p className="text-lg text-slate-600 leading-normal mb-6 text-justify">
              At <strong className="text-[#3150A0]">MAKEEAZY</strong>, we value and respect your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you interact with our services. We are committed to ensuring that your personal information remains confidential and secure. Please read this policy carefully to understand our practices regarding your personal data.
            </p>

            <div className="space-y-6 text-slate-600">
              <ol className="list-decimal pl-5 space-y-6 text-justify">
                <li>
                  <strong className="text-[#3150A0]">Collection of Personal Information:</strong> We may collect various types of personal information from you, including but not limited to your name, contact details, email address, job title, and any other information necessary to provide our services effectively. We collect this information through our website, email communications, and other interactions with you.
                </li>
                
                <li>
                  <strong className="text-[#3150A0]">Use of Personal Information:</strong> We may use your personal information for the following purposes: a. Providing our tax and advisory services to you; b. Communicating with you regarding our services, updates, and relevant information; c. Responding to your inquiries and requests; d. Complying with legal obligations; e. Conducting research and analysis to improve our services.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Disclosure of Personal Information:</strong> We may disclose your personal information to third parties in the following circumstances: a. To our trusted partners and service providers who assist us in delivering our services and operating our business; b. As required by law, regulatory authorities, or government agencies; c. In the event of a merger, acquisition, or transfer of assets, your personal information may be transferred to the acquiring entity.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Security:</strong> We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. We regularly review and update our security procedures to ensure the ongoing confidentiality and integrity of your data.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Data Retention:</strong> We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected and to comply with legal obligations. When we no longer need your information, we will securely dispose of it.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Cookies and Tracking Technologies:</strong> Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect information about how you interact with our website. You can modify your browser settings to control the use of cookies and opt-out of certain tracking technologies.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Third-Party Websites:</strong> Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of such websites. We encourage you to review the privacy policies of those websites before providing any personal information.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Your Rights:</strong> You have the right to access, update, correct, or delete your personal information in our records. If you wish to exercise any of these rights or have any questions about our privacy practices, please contact us using the information provided below.
                </li>

                <li>
                  <strong className="text-[#3150A0]">Changes to the Privacy Policy:</strong> We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. The updated policy will be posted on our website, and the effective date will be revised accordingly.
                </li>
              </ol>

              <div className="pt-8">
                <h2 className="text-xl font-bold text-[#3150A0] mb-4">Contact Us:</h2>
                <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices,<br/>Please contact us at:</p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                  <h3 className="font-bold text-[#3150A0] mb-2">MAKEEAZY CONSULTANTS PRIVATE LIMITED</h3>
                  <p className="mb-1"><strong className="text-[#3150A0]">Mobile :</strong> +91 9992819995</p>
                  <p className="leading-normal">
                    <strong className="text-[#3150A0]">Address:</strong><br />
                    H No. 8-3-319/10/1, Sri Sairam’s Swarnalatha Estates,<br />
                    Sri Sai Saradhi Nagar, Hyderabad, Telangana – 500 073.
                  </p>
                </div>
                <p className="mt-8 italic text-justify text-slate-500" style={{ fontFamily: "'Book Antiqua', serif" }}>
                  By using our services or interacting with us, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
