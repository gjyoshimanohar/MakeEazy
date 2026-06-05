import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Building2, 
  Award, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  ShieldCheck, 
  Layers, 
  Check, 
  Sparkles,
  Building,
  Users,
  Scale,
  FileHeart,
  FileBadge,
  Timer,
  Fingerprint,
  TrendingUp,
  Coins,
  ShieldAlert,
  HelpCircle as FaqIcon
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is MSME', icon: Building2 },
  { id: 'eligibility', name: 'Eligibility & Classification', icon: Scale },
  { id: 'importance', name: 'Why It is Important', icon: AlertCircle },
  { id: 'benefits', name: 'Benefits of Udyam (12 Points)', icon: Sparkles },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process (10 Steps)', icon: Layers },
  { id: 'features', name: 'GST, PAN & NIC Code Links', icon: Fingerprint },
  { id: 'certificate', name: 'Certificate & Corrections', icon: FileBadge },
  { id: 'differences', name: 'Udyam vs Others', icon: FileHeart },
  { id: 'errors', name: 'Common Delay Reasons', icon: ShieldAlert },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle }
];

export default function UdyamRegistrationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Udyam Registration?",
      a: "Udyam Registration is the official MSME registration issued online by the Ministry of Micro, Small and Medium Enterprises to eligible micro, small, and medium enterprises."
    },
    {
      q: "Is Udyam Registration the same as MSME Registration?",
      a: "Yes. Udyam Registration is the current official form of MSME Registration in India."
    },
    {
      q: "Who can apply for Udyam Registration?",
      a: "Any eligible micro, small, or medium enterprise engaged in manufacturing, trading, or service activity may apply, subject to investment and turnover limits."
    },
    {
      q: "Is Udyam Registration mandatory?",
      a: "Udyam Registration is not mandatory for every business, but it is highly recommended for eligible MSMEs because it helps access government schemes, bank loans, tender benefits, and other MSME benefits."
    },
    {
      q: "Is there any government fee for Udyam Registration?",
      a: "No. Udyam Registration on the official government portal is completely free of government fees."
    },
    {
      q: "What documents are required for Udyam Registration?",
      a: "Generally, Aadhaar, PAN, GSTIN if applicable, business details, bank details, activity details, investment details, and turnover details are required."
    },
    {
      q: "Is GST required for Udyam Registration?",
      a: "GSTIN is required or used where applicable. If the business is not liable for GST registration under GST laws, it may still apply as per applicable rules and portal requirements."
    },
    {
      q: "What is the validity of Udyam Registration?",
      a: "Udyam Registration generally remains valid as long as the enterprise continues to exist and remains within the applicable MSME framework, subject to updates and classification changes."
    },
    {
      q: "Can a trader apply for Udyam Registration?",
      a: "Yes. Traders, wholesalers, and retailers may apply for Udyam Registration, subject to applicable rules and eligibility."
    },
    {
      q: "Can a service provider apply for Udyam Registration?",
      a: "Yes. Eligible service providers can apply for Udyam Registration if they fall within the MSME limits."
    },
    {
      q: "What is the benefit of Udyam Registration?",
      a: "Udyam Registration helps businesses access MSME loans, government schemes, subsidies, tender benefits, delayed payment protection, and business credibility."
    },
    {
      q: "What is the difference between Udyam Registration and Udyog Aadhaar?",
      a: "Udyog Aadhaar was the earlier MSME registration system. Udyam Registration is the current official MSME registration system which enforces online verification through Aadhaar, PAN, and GST-related details."
    },
    {
      q: "Can Udyam details be updated?",
      a: "Yes. Udyam Registration details can be updated online when business information changes."
    },
    {
      q: "Can MakeEazy help with Udyam Registration?",
      a: "Yes. MakeEazy provides complete assistance for Udyam Registration, including eligibility checking, detail preparation, NIC code selection, online filing support, certificate download, and update assistance."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <a 
          href="/other-registration"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Other Registrations
        </a>

        {/* Hero Section Banner */}
        <div className="bg-[#3150A0] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#1034A6]/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ministry of MSME Government of India
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Udyam Registration (MSME)
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Udyam Registration, also known as <strong className="text-white font-bold">MSME Registration</strong>, is an important government registration micro, small, and medium enterprises in India issued by the <strong className="text-white font-bold">Ministry of Micro, Small and Medium Enterprises</strong>.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Building2 className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar Layout & Mobile Navigation Tabs */}
        <div className="lg:flex lg:gap-8 items-start">
          
          {/* Sidebar / Left Navigation */}
          <div className="hidden lg:block w-72 shrink-0 sticky top-36 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-4 mb-4">Navigations</h3>
            <div className="space-y-1">
              {SECTIONS.map((section) => {
                const IconComponent = section.icon;
                const isActive = activeTab === section.id;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveTab(section.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold transition-all text-left cursor-pointer ${
                      isActive 
                        ? 'bg-blue-50 text-[#3150A0] border-l-4 border-[#3150A0] shadow-sm' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <IconComponent className={`w-4.5 h-4.5 shrink-0 ${isActive ? 'text-[#3150A0]' : 'text-slate-400'}`} />
                    {section.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Tab Selector */}
          <div className="lg:hidden mb-6">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 text-left">Navigate Content Section:</label>
            <select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-700 font-semibold px-4 py-3 rounded-2xl focus:outline-none focus:border-orange-500 cursor-pointer shadow-sm text-sm"
            >
              {SECTIONS.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.name}
                </option>
              ))}
            </select>
          </div>

          {/* Main Informative Content Panes */}
          <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 md:p-10 shadow-sm transition-all text-justify">
            
            {/* 1. OVERVIEW AND WHAT IS IT */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Building2 className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is Udyam Registration (MSME)?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  Udyam Registration, also known as <span className="font-bold text-slate-900">MSME Registration</span>, is an important government registration for micro, small, and medium enterprises in India. It is officially issued by the <span className="font-bold text-slate-900">Ministry of Micro, Small and Medium Enterprises (MoMSME)</span>, Government of India.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  Udyam Registration provides official government-recognized status to eligible businesses as MSMEs. It helps businesses access various government schemes, subsidized interest rates, financial assistance, priority sector lending benefits, tender fees exemptions, and other support programs designed to foster small business growth.
                </p>

                <p className="text-slate-700 leading-relaxed bg-[#3150A0]/5 border border-blue-50 p-4 rounded-xl">
                  At <strong className="text-slate-900">MakeEazy</strong>, we assist businesses, startups, manufacturers, traders, service providers, professionals, and entrepreneurs with complete Udyam Registration support, document guidance, online filing assistance, Udyam certificate downloading, modifications, correct configurations, and post-registration advisory checks.
                </p>



                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-500" />
                      What is the Udyam Certificate?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Udyam Registration is the official online portal registration. After successful submission, the business receives an official <strong>Udyam Registration Certificate</strong> containing a unique Udyam Registration Number. This certificate acts as clear proof that the business is recognized under the MSME framework.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      What is an MSME?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      MSME stands for Micro, Small and Medium Enterprise. MSMEs are businesses that fall within the prescribed investment in plant and machinery and turnover limits notified by the Government of India. They can be engaged in manufacturing, trading, or service activities.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50/40 border border-orange-150 rounded-2xl p-6 mt-6">
                  <h3 className="text-base font-bold text-orange-950 mb-2 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-orange-500 shrink-0" />
                    Who should apply for Udyam Registration?
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Udyam registration is suitable for any business falling under the micro, small, or medium enterprise category. This includes:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3 text-xs text-slate-700 font-semibold">
                    {[
                      "Proprietorship firms",
                      "Partnership firms",
                      "LLPs (LLP firms)",
                      "Private Limited Companies",
                      "Public Limited Companies",
                      "One Person Companies (OPC)",
                      "HUF (Hindu Undivided)",
                      "Co-operative societies",
                      "Trusts",
                      "Societies",
                      "Manufacturing units",
                      "Service providers",
                      "Traders",
                      "Retail / Wholesale businesses",
                      "Startups",
                      "Exporters",
                      "Freelancers",
                      "Entrepreneurs"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-2 py-1 bg-white border border-slate-200 rounded text-left">
                        <Check className="w-3.5 h-3.5 text-orange-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. ELIGIBILITY & CLASSIFICATION */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Udyam Registration Eligibility & MSME Classification</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  A business can apply for Udyam Registration if it qualifies as a micro, small, or medium enterprise based on two parameters: **Investment in plant and machinery or equipment** AND **Annual Turnover**. Let's review the classification rules:
                </p>

                {/* Classification Cards */}
                <div className="space-y-4 mt-6">
                  {[
                    {
                      category: "Micro Enterprise",
                      color: "border-emerald-200 bg-emerald-50/10",
                      titleColor: "text-emerald-700 bg-emerald-55",
                      investment: "Does not exceed ₹2.5 crore",
                      turnover: "Does not exceed ₹10 crore",
                      desc: "Suitable for smallest operations, home enterprises, local shops, and startup founders initiating their craft operations."
                    },
                    {
                      category: "Small Enterprise",
                      color: "border-orange-200 bg-orange-50/10",
                      titleColor: "text-orange-700 bg-orange-55",
                      investment: "Does not exceed ₹25 crore",
                      turnover: "Does not exceed ₹100 crore",
                      desc: "Designed for small-scale manufacturers, retail hubs, or regional IT shops looking to scale up with bank integrations."
                    },
                    {
                      category: "Medium Enterprise",
                      color: "border-blue-200 bg-blue-50/10",
                      titleColor: "text-[#3150A0] bg-blue-55",
                      investment: "Does not exceed ₹125 crore",
                      turnover: "Does not exceed ₹500 crore",
                      desc: "For mid-sized production houses, bulk exporters, large infrastructure firms, and mature corporate operations."
                    }
                  ].map((cat, idx) => (
                    <div key={idx} className={`border rounded-2xl p-6 ${cat.color} text-left`}>
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <h3 className="text-lg font-bold text-slate-900">{cat.category}</h3>
                        <span className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                          MoMSME Criteria
                        </span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-3">
                        <div className="bg-white p-3 border border-slate-200 rounded-xl">
                          <span className="text-xs text-slate-500 block uppercase font-bold">Investment Limit</span>
                          <span className="text-base font-extrabold text-[#3150A0] mt-1 block px-2 py-1 bg-blue-50/30 rounded inline-block">
                            {cat.investment}
                          </span>
                        </div>
                        <div className="bg-white p-3 border border-slate-200 rounded-xl">
                          <span className="text-xs text-slate-500 block uppercase font-bold">Annual Turnover Limit</span>
                          <span className="text-base font-extrabold text-orange-600 mt-1 block px-2 py-1 bg-orange-50/30 rounded inline-block">
                            {cat.turnover}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">{cat.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl mt-6">
                  <h4 className="font-bold text-blue-950 text-sm mb-2">Category Dynamic Changes:</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    If an enterprise crosses the prescribed investment or turnover limit of its current classification, its MSME category changes automatically through the portal backend, as linked directly to government income tax and GST filing portals. Keep your filings up-to-date!
                  </p>
                </div>
              </div>
            )}

            {/* 3. WHY IMPORTANT */}
            {activeTab === 'importance' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <AlertCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why is Udyam Registration Important?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed font-semibold">
                  Udyam Registration provides official government MSME recognition to a business. Many government schemes, bank credit benefits, subsidy schemes, and vendor setups mandatorily require active Udyam profiles.
                </p>

                <h4 className="font-bold text-slate-900 text-sm mb-3">Udyam Registration is highly useful for several operations:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "MSME Business Loans", desc: "Easier credit setups and prioritization under government schemes." },
                    { title: "Collateral-Free Loan Access", desc: "Borrow capital from banks under credit guarantee schemes without putting personal properties up as collateral." },
                    { title: "Claiming Government Subsidies", desc: "Qualify for rebates on patents, electricity bills, barcode setups, and ISO training approvals." },
                    { title: "Delayed Payment Protections", desc: "Allows accessing MSME Samadhaan protection, enabling quick statutory recovery from errant buyers." },
                    { title: "Tender Exemption & Preferences", desc: "Exemptions from earnest money deposit (EMD) and concessions on tender fee bills." },
                    { title: "Public Procurement Priority", desc: "Government purchases have statutory reservation policies favoring certified micro and small enterprises." },
                    { title: "Export Promotion Reliefs", desc: "Gain monetary subsidies on product exports and international trade expo installations." },
                    { title: "Corporate Trust & Credibility", desc: "Increases verification metrics before big clients, corporate vendors, and accounting auditors." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 font-bold font-mono text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3150A0] mb-0.5 text-sm">{item.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 mt-6">
                  <p className="text-xs text-orange-950 font-semibold leading-relaxed">
                    For small and growing businesses, Udyam Registration is one of the most useful basic certificates alongside PAN and GST.
                  </p>
                </div>
              </div>
            )}

            {/* 4. BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Benefits of Udyam Registration (12 Key Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Registering under the MoMSME Udyam schema unlocks several business advantages. Here are the 12 crucial points you must leverage:
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { num: "01", title: "Official MSME Recognition", desc: "Udyam Registration provides an official government-recognised MSME certificate which serves as valid proof of the business status." },
                    { num: "02", title: "Access to Government Schemes", desc: "Registered MSMEs immediately qualify for multiple Central and State Government schemes, incentives, and developmental programs." },
                    { num: "03", title: "Easier Bank Loan Processing", desc: "Banks recognize Udyam cards for prioritized and fast-tracked MSME business credits, overdraft limits, and working capital lines." },
                    { num: "04", title: "Collateral-Free Loan Benefits", desc: "Access collateral-free credit setups protected under the CGTMSE (Credit Guarantee Fund Trust for Micro and Small Enterprises) program." },
                    { num: "05", title: "Lower Loan Interest Rates", desc: "Banks, NBFCs, and financial institutes offer concessional interest rate brackets specifically for registered MSMEs." },
                    { num: "06", title: "Protection Against Delayed Payments", desc: "Buyers must pay MSMEs within 45 days. Delayed payments attract compounding interest rates at 3x the RBI bank bank rates." },
                    { num: "07", title: "Government Tender Exemption", desc: "Save significant security deposits (Earnest Money Deposit - EMD) and receive tender price concessions during public bids." },
                    { num: "08", title: "Subsidies & Rebates", desc: "Get support on technological upgrades, patent filings, trademark registrations, barcoding licenses, and ISO quality setups." },
                    { num: "09", title: "Business Credibility & Trust", desc: "Enables registration in massive corporate procurement chains, and improves verification indexes for customers and vendors." },
                    { num: "10", title: "Useful for Export Promotion", desc: "Avail priority export benefits, subsidized foreign exhibition stalls, and international marketing initiatives." },
                    { num: "11", title: "Ease with MSME Samadhaan", desc: "Allows filing formal delayed payment default cases easily on the MSME Samadhaan portal to recover outstanding dues." },
                    { num: "12", title: "Support for Ecosystem Growth", desc: "Connect with incubators, technology centers, government marketing events, cluster developments, and skill-building centers." }
                  ].map((benefit) => (
                    <div key={benefit.num} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#3150A0]/30 hover:shadow-md transition-all flex gap-4 text-justify">
                      <div className="text-xl font-black text-[#3150A0]/20 font-mono tracking-widest leading-none shrink-0 pt-1">
                        {benefit.num}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">{benefit.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for Udyam Registration</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  The portal operates entirely on a self-declaration and online verification model, making the process **100% paperless**. Maintaining supportive records ready, however, helps ensure error-free filing.
                </p>

                <div className="space-y-6">
                  {/* Basic Details Needed */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4 flex items-center gap-2">
                      <Fingerprint className="w-5 h-5 text-orange-500" />
                      Core Details Needed for All Entities
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        "Aadhaar number of the proprietor, partner, or authorised signatory",
                        "PAN of the business concern or applicant",
                        "GSTIN (GST Identification Number), if applicable",
                        "Mobile number linked with Aadhaar (for OTP validations)",
                        "Email ID for communications",
                        "Trade name / Business name of the enterprise",
                        "Type of organization structure",
                        "Correct business address proofs (office/factory)",
                        "Bank account details (account number and IFSC code)",
                        "Date of incorporation or commencement of business",
                        "Main business activity & NIC Code (2/4/5 Digit codes)",
                        "Current number of employees breakdown",
                        "Investment in plant, machinery & tools",
                        "Annual turnover declarations"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Entity Specific List */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
                      <h4 className="font-bold text-[#3150A0] border-b border-slate-100 pb-2 mb-3">Proprietorship Firm</h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        <li>• Aadhaar of Proprietor</li>
                        <li>• PAN of Proprietor</li>
                        <li>• Bank Account details</li>
                        <li>• GSTIN if applicable</li>
                        <li>• Office Address location</li>
                        <li>• Contact details</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
                      <h4 className="font-bold text-[#3150A0] border-b border-slate-100 pb-2 mb-3">Partnership Firm</h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        <li>• Aadhaar of Authorized Partner</li>
                        <li>• PAN of the Partnership Firm</li>
                        <li>• Partnership Deed parameters</li>
                        <li>• Core Bank details</li>
                        <li>• GSTIN if applicable</li>
                        <li>• Partner contact details</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm text-left">
                      <h4 className="font-bold text-[#3150A0] border-b border-slate-100 pb-2 mb-3">Company or LLP</h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        <li>• Aadhaar of Authorized Signatory</li>
                        <li>• PAN of the Company / LLP</li>
                        <li>• Certificate of Incorporation (COI)</li>
                        <li>• Core GSTIN properties</li>
                        <li>• Board Resolution details, if required</li>
                        <li>• Official Bank credentials</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-orange-50/20 border border-orange-100 rounded-xl p-4 text-left">
                    <h4 className="font-bold text-orange-950 text-sm mb-1">Trusts, Societies & Other Entities</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Need Aadhaar of authorized person, PAN of the entity/society, registration details, trust address details, and official banking credentials to register cleanly under the MSME portal.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. REGISTRATION PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Step-by-Step Udyam Registration Process</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Udyam Registration is managed through the official e-portal initialized by the Ministry of MSME. Below is the simplified 10-step workflow:
                </p>

                <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-8 text-left">
                  {[
                    {
                      step: "Step 1",
                      title: "Analyze and Check MSME Eligibility",
                      desc: "Calculate your total investment in machinery/tools and annual business turnover to determine the micro, small, or medium classification."
                    },
                    {
                      step: "Step 2",
                      title: "Prepare Required Details",
                      desc: "Keep Aadhaar card numbers, PAN card properties, GSTIN documents, banking IFC credentials, employee rosters, and commencement dates organized."
                    },
                    {
                      step: "Step 3",
                      title: "Visit the Official Government Portal",
                      desc: "Visit the official government Udyam Registration portal maintained strictly by the Ministry of MSME (free of cost)."
                    },
                    {
                      step: "Step 4",
                      title: "Aadhaar Registration & Validation",
                      desc: "Input the Aadhaar number of the primary proprietor or authorized signatory. Confirm using the OTP sent to their linked mobile."
                    },
                    {
                      step: "Step 5",
                      title: "Online Validation of PAN Details",
                      desc: "Enter the PAN information which is automatically verified online with CSD databases. For companies/LLPs, the business entity PAN is validated."
                    },
                    {
                      step: "Step 6",
                      title: "Fill Business & Organisation Details",
                      desc: "Enter details like trade name, organization type, banking credentials, physical office address, commencement date, and active headcount."
                    },
                    {
                      step: "Step 7",
                      title: "Select NIC Classification Codes",
                      desc: "Classify your primary and secondary activities under appropriate National Industrial Classification (NIC) digit codes."
                    },
                    {
                      step: "Step 8",
                      title: "Verify GSTIN, Turnover & Investments",
                      desc: "Input GST inputs if registered. Investment and turnover values are checked or fetched automatically through GSTN and Income Tax portal integrations."
                    },
                    {
                      step: "Step 9",
                      title: "Submit and Generate Udyam ID",
                      desc: "Confirm the self-declarations and submit the application. Receive a unique permanent Udyam Registration Number."
                    },
                    {
                      step: "Step 10",
                      title: "Download Udyam Certificate",
                      desc: "Download the official Udyam Registration Certificate featuring enterprise details, QR codes, and classification details."
                    }
                  ].map((s, index) => (
                    <div key={index} className="relative">
                      {/* Timeline Dot */}
                      <span className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-[#3150A0] border-4 border-white"></span>
                      
                      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-[#3150A0]/30 transition-all">
                        <span className="inline-block text-xs font-bold bg-[#3150A0]/10 text-[#3150A0] px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                          {s.step}
                        </span>
                        <h4 className="font-bold text-slate-900 mb-1 font-display text-base">{s.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mt-6">
                  <h4 className="font-bold text-emerald-950 text-base mb-1">Is Udyam Registration Free?</h4>
                  <p className="text-sm text-emerald-900 leading-relaxed">
                    Yes. The official government Udyam registration on their portal doesn’t charge any fee. Businesses should beware of scam websites acting as portals. For expert assistance on modifications and compliance filings, MakeEazy team handles the operations cleanly.
                  </p>
                </div>
              </div>
            )}

            {/* 7. TECHNICAL FEATURES (GST, PAN, NIC CODE) */}
            {activeTab === 'features' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Fingerprint className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">GST, PAN & NIC Code Integrations in Udyam</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  The modern Udyam Registration system is highly integrated with major government databases to ensure transparent data matching:
                </p>

                <div className="space-y-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">Udyam Registration and GST</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                       GSTIN is required or verified automatically depending on the nature of operations. The system imports business identification and annual turnover statistics dynamically from GST systems.
                    </p>
                    <p className="text-xs text-slate-600 italic">
                      Note: If your business crosses mandatory GST threshold limits, you should hold valid GSTIN records before registering/migrating to prevent compliance warnings.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">Udyam Registration and PAN</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                       PAN validation is mandatory. For proprietorship setups, the proprietor’s individual PAN is validated. For LLPs, partner structures, companies, trusts, and cooperative societies, the entity's registered business PAN is utilized.
                    </p>
                    <p className="text-xs text-red-700">
                      Warning: Incorrect or misconfigured PAN entries can lead to fatal validation rejections or database registry conflicts.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">Udyam Registration and NIC Code</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                      NIC Code stands for **National Industrial Classification Code**, which represents the specific nature of business activities (manufacturing, service, wholesale, retail trade).
                    </p>
                    <p className="text-xs text-slate-600">
                      Selecting correct 2, 4, or 5-digit NIC codes is vital during Udyam form submissions. Incorrect choices can directly affect eligibility for subsidies and government tender classifications.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 8. CERTIFICATES & CORRECTIONS */}
            {activeTab === 'certificate' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileBadge className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Udyam Certificate & Online Update Procedures</h2>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-2">What does the Udyam Certificate Contain?</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  On successful filing, you receive a printable certificate containing:
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-700 font-semibold mb-6">
                  {[
                    "Unique Udyam ID Number",
                    "Trade Name of Enterprise",
                    "Type of Organisation",
                    "Major Activity Classification",
                    "Exact NIC Codes",
                    "Official QR Code",
                    "Date of Incorporation",
                    "Date of MSME Registration",
                    "District Industry Centre (DIC)"
                  ].map((field, idx) => (
                    <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-center font-mono">
                      {field}
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-3">Updating or Correcting Udyam Portals</h3>
                  <p className="text-xs text-slate-650 leading-relaxed mb-4">
                    If details (bank account, address, employee count, activity types) change or need correction, they must be updated on the portal immediately to ensure compliance during bank loan applications or auditing:
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 text-xs text-slate-700">
                    {[
                      "Business address / physical office change",
                      "Mobile number / primary email ID modifications",
                      "Bank detail adjustments (IFSC or Account numbers)",
                      "NIC activity code updates (adding secondary businesses)",
                      "GSTIN update configurations",
                      "Investment detail adjustments",
                      "Yearly turnover parameters modification",
                      "Employee count corrections",
                      "Enterprise classification changes"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 9. DIFFERENCES */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileHeart className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Difference Between Udyam and Other Frameworks</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Understanding what Udyam represents compared to older MSME schemas and basic registrations is crucial for any business owner:
                </p>

                <div className="space-y-6">
                  {/* Udyam vs Udyog Aadhaar */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">1. Udyam Registration vs Udyog Aadhaar</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                      **Udyog Aadhaar (UAM)** was the older registration framework. It has been completely replaced by the secure **Udyam Registration system**.
                    </p>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      All previous businesses registered under Udyog Aadhaar must register afresh or migrate directly to Udyam to keep claiming MSME incentives.
                    </p>
                  </div>

                  {/* Udyam vs GST */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">2. Udyam Registration vs GST Registration</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                      They are entirely different compliances. **Udyam** provides official status recognition under the Ministry of MSME. **GST** is required for indirect tax compliances.
                    </p>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      Holding MSME certificates does not exempt a firm from obtaining a GSTIN if they cross mandatory tax boundaries.
                    </p>
                  </div>

                  {/* Udyam vs Startup India */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-[#3150A0] mb-2">3. Udyam Registration vs Startup India Registration</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-2">
                      **Udyam** is meant for all entities qualifying as micro, small, or medium based strictly on investment/turnover parameters.
                    </p>
                    <p className="text-xs text-slate-650 leading-relaxed">
                      **Startup India (DPIIT Recognition)** is specifically for innovative, developmental, or scalable startups with unique business models. A business can obtain both registrations successfully if eligible.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 10. ERROR CONSTRAINTS */}
            {activeTab === 'errors' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldAlert className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Common Reasons for Udyam Registration Errors or Delays</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  While online filing appears straightforward, even tiny mismatches can block registrations or trigger validation errors on the Shram Suvidha portal:
                </p>

                <div className="grid md:grid-cols-2 gap-3 text-xs text-slate-700">
                  {[
                    { title: "Aadhaar OTP issues", desc: "Aadhaar number not connected to an active, working mobile device." },
                    { title: "PAN card mismatch", desc: "PAN validation fails if the spelling or type of organization doesn’t match exactly." },
                    { title: "Incorrect Business Category", desc: "Entering wrong corporate categories resulting in legal classification blocks." },
                    { title: "Incorrect NIC code selection", desc: "Matching product activities with wrong service classifications." },
                    { title: "Turnover Mismatches", desc: "Improper input values conflicting with corresponding GST returns databases." },
                    { title: "Outdated business data", desc: "Mismatch between active GSTIN location details and submitted office addresses." },
                    { title: "Duplicate Registrations", desc: "Trying to submit a new application when an old registration number already exists." },
                    { title: "Portal errors & timeouts", desc: "Intermittent database issues during bank integrations or IT checks." }
                  ].map((err, idx) => (
                    <div key={idx} className="p-4 bg-red-50/20 border border-red-100 rounded-xl flex gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-red-950 text-sm mb-0.5">{err.title}</h4>
                        <p className="text-slate-600 text-xs leading-relaxed">{err.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 11. FAQS WITH INTERACTIVE ACCORDION */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Udyam Registration - FAQs</h2>
                </div>
                
                <p className="text-slate-600 leading-relaxed mb-6">
                  Find answers to commonly asked questions about registering and managing MSME status under the Udyam portal:
                </p>

                <div className="space-y-3">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-slate-50">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50/50 transition-colors font-semibold text-slate-900 text-sm"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <span className="shrink-0 text-[#3150A0] font-bold text-lg select-none">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-6 py-4 bg-slate-50 border-t border-slate-150 text-xs text-slate-700 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 12. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for Udyam (MSME) Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Our professional team guarantees a seamless, hassle-free online experience. We analyze your classification, select the correct National Industrial Classification (NIC) codes, align with PAN, map GSTIN requirements, and help download the official MSME certificate error-free.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Complete End-to-End Assistance:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-700">
                    {[
                      "Advanced category audit check",
                      "Correct NIC Code selection support",
                      "Assistance in Udyog Aadhaar migration",
                      "Adhaar, PAN & GST mapping validation",
                      "Correction of existing Udyam certificate info",
                      "MSME loan support guidance advisory",
                      "Delayed Payment claim advisory (Samadhaan)",
                      "Document verification and filing audits",
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-[#3150A0] text-white p-8 rounded-3xl mt-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Get Udyam Registration with MakeEazy</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                    Ready to scale your business and unlock exclusive MSME benefits? Get Udyam (MSME) Registration with India's most trusted corporate consulting team at MakeEazy today!
                  </p>
                  <p className="text-xs text-orange-300 font-bold uppercase tracking-wider mb-2">
                    Start Your Process Seamlessly Today!
                  </p>
                  <a 
                    href="https://desk.makeeazy.in/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white hover:bg-slate-100 text-[#3150A0] font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md active:scale-95 duration-150"
                  >
                    Register Online Now
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to unlock statutory MSME benefits, subsidies, and government tenders?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for Udyam Registration with MakeEazy</span>
                <Building2 className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
