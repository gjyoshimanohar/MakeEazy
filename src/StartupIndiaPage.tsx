import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Rocket, 
  Award, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  Users, 
  Coins, 
  GraduationCap, 
  BookOpen, 
  Building, 
  Briefcase, 
  ShieldCheck, 
  Layers, 
  XOctagon, 
  Check, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is it', icon: Rocket },
  { id: 'eligibility', name: 'Eligibility Criteria', icon: Award },
  { id: 'benefits', name: 'Key Benefits (10 Points)', icon: Sparkles },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process', icon: Layers },
  { id: 'rejection', name: 'Common Rejection Reasons', icon: XOctagon },
  { id: 'why-makeeazy', name: 'Why MakeEazy & Package', icon: ShieldCheck },
  { id: 'faq', name: 'Frequently Asked Questions', icon: HelpCircle }
];

export default function StartupIndiaPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <a 
          href="#other-registration"
          className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Other Registrations
        </a>

        {/* Hero Section Banner */}
        <div className="bg-[#3150A0] rounded-3xl p-8 md:p-12 text-white mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                DPIIT Recognition Scheme
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Startup India Registration
              </h1>
              <p className="text-blue-100 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Officially known as <strong className="text-white font-bold">DPIIT Startup Recognition</strong>, this is a government initiative by the Department for Promotion of Industry and Internal Trade to empower, fund, and accelerate innovative business models in India.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Rocket className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
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
            
            {/* 1. OVERVIEW AND DESCRIPTION */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Rocket className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is Startup India Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  Startup India Registration, officially known as <span className="font-bold text-slate-900">DPIIT Startup Recognition</span>, is a government recognition granted to eligible startups in India by the Department for Promotion of Industry and Internal Trade (DPIIT) under the Startup India initiative.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  This recognition helps startups establish themselves as innovative businesses and access a range of government benefits, including tax incentives, compliance relaxations, intellectual property support, funding opportunities, and participation in startup-focused schemes and programs.
                </p>

                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-6 mt-4">
                  <h4 className="font-bold text-orange-900 text-base mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                    How It Differs from Normal Business Registration
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Startup India Registration is <span className="font-bold text-red-700">different from company registration</span>. Before applying for DPIIT Startup Recognition, the business <span className="font-bold text-slate-900">must already be legally registered</span> as a Private Limited Company, a Limited Liability Partnership (LLP), or a Registered Partnership Firm.
                  </p>
                </div>



                <p className="text-slate-700 leading-relaxed">
                  Once approved, the entity receives a valuable <strong className="text-[#3150A0]">DPIIT Certificate of Recognition</strong>. This certificate confirms that the entity has been recognised by DPIIT under the Startup India initiative, granting immediate access to a range of government schemes and tax exemptions.
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Eligible Legal Structure Entities:</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 text-center">
                      <span className="text-[#3150A0] font-bold text-3xl block">01</span>
                      <span className="text-sm font-bold text-slate-800 mt-1 block">Private Limited Company</span>
                    </div>
                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 text-center">
                      <span className="text-[#3150A0] font-bold text-3xl block">02</span>
                      <span className="text-sm font-bold text-slate-800 mt-1 block">Limited Liability Partnership (LLP)</span>
                    </div>
                    <div className="border border-slate-100 rounded-2xl p-4 bg-slate-50 text-center">
                      <span className="text-[#3150A0] font-bold text-3xl block">03</span>
                      <span className="text-sm font-bold text-slate-800 mt-1 block">Registered Partnership Firm</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs mt-3 italic text-left">*Note: Proprietorship firms are generally not eligible for DPIIT Startup Recognition.</p>
                </div>
              </div>
            )}

            {/* 2. ELIGIBILITY CRITERIA */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Eligibility Criteria for Startup India</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  To obtain Startup India Recognition, the applicant entity must meet the following basic conditions:
                </p>

                <div className="space-y-4 pt-2">
                  {[
                    {
                      num: "1",
                      title: "Type of Legal Entity",
                      desc: "The business must be incorporated or registered as a Private Limited Company (under the Companies Act), Limited Liability Partnership (under the LLP Act), or a Registered Partnership Firm (under the Indian Partnership Act)."
                    },
                    {
                      num: "2",
                      title: "Age of the Entity",
                      desc: "The entity must fall within the prescribed period (up to 10 years from its date of incorporation or registration). Startup India recognition is primarily intended for newly established and growing businesses."
                    },
                    {
                      num: "3",
                      title: "Turnover Limit",
                      desc: "The entity's annual turnover must not exceed ₹100 Crores in any financial year since its incorporation or registration."
                    },
                    {
                      num: "4",
                      title: "Innovation, Development, or Improvement",
                      desc: "The business should focus on innovation, development, or improvement of products, services, or processes, or have a scalable business model with high potential for employment generation or wealth creation."
                    },
                    {
                      num: "5",
                      title: "Not Formed by Splitting or Reconstruction",
                      desc: "The entity must not have been formed by splitting up or reconstructing an existing business. Startup India Recognition is intended to support genuinely new and innovative ventures, not restructured businesses."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border border-slate-100 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all">
                      <span className="w-8 h-8 rounded-full bg-blue-100 text-[#3150A0] font-bold flex items-center justify-center shrink-0">
                        {item.num}
                      </span>
                      <div className="text-left">
                        <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                        <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. KEY BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Benefits of Startup India (10 Major Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Startup India Registration offers ten outstanding advantages to eligible startups. While some benefits are available immediately after DPIIT recognition, certain tax-related benefits require separate approval and fulfilment of additional conditions.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: "1. DPIIT Recognition Certificate",
                      desc: "Once approved, the startup receives a Certificate of Recognition. This certificates strengthens the startup's identity and credibility with investors, banks, government departments, incubators, and other business stakeholders."
                    },
                    {
                      title: "2. Income Tax Exemption Benefits",
                      desc: "Eligible recognized startups may apply for a 3-year consecutive income tax exemption under Section 80-IAC. Subject to conditions, this reduces the tax burden during early growth stages."
                    },
                    {
                      title: "3. Angel Tax Exemption Support",
                      desc: "Eligible startups may also apply for exemptions relating to investments received from angel investors under Section 56(2)(viib). This is highly helpful while raising funds."
                    },
                    {
                      title: "4. Self-Certification Under Laws",
                      desc: "Startups may be permitted to self-certify compliance under 6 labour laws and 3 environmental laws, reducing inspection frequencies and compliance burden during initial years."
                    },
                    {
                      title: "5. Intellectual Property Rights (IPR) Benefits",
                      desc: "Provides support for fast-track patent applications and up to an 80% discount on filing fees for patents and up to a 50% discount on trademarks."
                    },
                    {
                      title: "6. Easier Access to Government Schemes",
                      desc: "Startups gain direct eligibility for various Central and State Government schemes, matching grants, incubation facilities, government challenges, and incubation mentorship."
                    },
                    {
                      title: "7. Improved Business Credibility",
                      desc: "Official government endorsement improves business trust with corporate clients, international partners, banks, and the general public."
                    },
                    {
                      title: "8. Support for Fundraising",
                      desc: "Many venture capital networks, seed funds, incubators, and accelerators mandate DPIIT Startup Recognition before screening startups for funding."
                    },
                    {
                      title: "9. Public Procurement Benefits",
                      desc: "DPIIT recognized startups receive relaxations in standard government tenders, including exemption from prior experience, turn-over criteria, and Earnest Money Deposit (EMD)."
                    },
                    {
                      title: "10. Networking and Ecosystem Access",
                      desc: "Provides access to the national Startup India Hub, bridging lines between legal mentors, prospective clients, potential co-founders, and state incubators."
                    }
                  ].map((benefit, idx) => (
                    <div key={idx} className="border border-slate-100 bg-slate-50/50 rounded-2xl p-5 hover:border-blue-200 hover:bg-white hover:shadow-sm transition-all text-left">
                      <h4 className="font-bold text-[#3150A0] text-base mb-1.5">{benefit.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-justify">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for Startup India Setup</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  The documents may vary depending on the nature of the entity and business activity. Generally, the following documents and details are required:
                </p>

                <div className="space-y-6">
                  {/* Category 1 */}
                  <div>
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Basic Entity Documents
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4">
                      {[
                        "Certificate of Incorporation or Partnership Registration Certificate",
                        "PAN Card of the business entity",
                        "Details of directors, partners, or authorised signatories",
                        "Registered office address proof",
                        "Official Email ID and mobile number of directors/partners",
                        "Business activity details with brief summary"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 2 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Business Information
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4">
                      {[
                        "Brief description of the business activity highlight",
                        "Details of innovative products, services, or processes",
                        "Explanation of innovation, uniqueness, or scalability parameters",
                        "Website link, business profile, or pitch deck, if available",
                        "Details of funding, if already received",
                        "Details of patents, trademarks, or incubator support documentation, if any"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category 3 */}
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Supporting Documents, If Available
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3 pl-4">
                      {[
                        "Pitch deck or presentation materials",
                        "Product screenshots, mockups, or active demo links",
                        "Active website or application links",
                        "Trademark or patent application details",
                        "Incubator or accelerator recommendation letter",
                        "Investment agreement of funding",
                        "Comprehensive business plan & concept proof",
                        "Customer validation or early revenue proof documents"
                      ].map((item, id) => (
                        <div key={id} className="flex gap-2.5 items-start text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-slate-500 text-xs mt-3 italic text-left">
                      *Note: Not all supporting documents are mandatory in every case, but a strong and clear application description improves the chances of smooth & direct approval.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Startup India Registration Step-by-Step</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Startup India Registration is completed entirely online. The process generally involves nine well-structured steps:
                </p>

                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-6">
                  {[
                    {
                      step: "Step 1",
                      title: "Business Incorporation",
                      desc: "Before applying for Startup India Recognition, the business must be legally registered as a Private Limited Company, LLP, or Registered Partnership Firm. If the entity is not yet registered, the first step is to complete business registration with MakeEazy."
                    },
                    {
                      step: "Step 2",
                      title: "Check Eligibility",
                      desc: "The startup must be reviewed by compliance experts to confirm whether it meets the regulatory conditions for Startup India Recognition, incorporating limits such as turnover, age, and legal formation."
                    },
                    {
                      step: "Step 3",
                      title: "Prepare Documents and Business Description",
                      desc: "A clear and well-structured business description must be prepared. This is one of the most important parts of the application, as DPIIT assesses whether the business is innovative, scalable, or capable of generating employment or wealth. It must cover: What the startup does, the problem it solves, products/services, innovation/uniqueness, target market, scalability, and current stage of the business."
                    },
                    {
                      step: "Step 4",
                      title: "Create or Access Startup India / NSWS Account",
                      desc: "The application is submitted through the designated government portal (National Single Window System or Startup India Hub). Create appropriate credentials."
                    },
                    {
                      step: "Step 5",
                      title: "Fill the Startup Recognition Application",
                      desc: "The applicant must enter the required business, entity, authorised signatory, and detailed business activity details in the online application form."
                    },
                    {
                      step: "Step 6",
                      title: "Upload Required Documents",
                      desc: "All required documents, including Incorporation certificates, PAN card, patents/trademarks (if any), and support documents must be uploaded carefully to prevent failure."
                    },
                    {
                      step: "Step 7",
                      title: "Submit the Application",
                      desc: "Review all the entered details thoroughly, accept the regulatory declaration, and digitally submit the application online to the department."
                    },
                    {
                      step: "Step 8",
                      title: "Application Review by DPIIT",
                      desc: "The application is scrutinized and reviewed by the concerned DPIIT officer. If the application is complete and meets all eligibility criteria, recognition is granted."
                    },
                    {
                      step: "Step 9",
                      title: "Receive DPIIT Certificate of Recognition",
                      desc: "Once approved, the startup receives a system-generated DPIIT Certificate of Recognition containing a unique recognition number which can be downloaded directly or accessed through DigiLocker."
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="relative text-left">
                      {/* Round Bullet */}
                      <span className="absolute -left-[31px] top-1.5 w-4 h-4 bg-orange-500 rounded-full border-2 border-white ring-4 ring-orange-100 flex items-center justify-center shrink-0"></span>
                      <h4 className="font-bold text-slate-800 text-base">{step.step}: {step.title}</h4>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed text-justify">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. REJECTION REASONS */}
            {activeTab === 'rejection' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <XOctagon className="w-6 h-6 text-red-600" />
                  <h2 className="text-2xl font-bold text-red-600">Common Reasons for Rejection</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  A Startup India application is scrutinized closely and may be rejected or sent back for clarification for one or more of the following reasons. Understanding these helps us prepare a bulletproof application:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  {[
                    {
                      title: "Entity is not eligible",
                      desc: "The underlying entity falls outside of Private Limited, LLP, or Registered Partnership categories."
                    },
                    {
                      title: "Incorrect business structure",
                      desc: "The business is registered as a Proprietorship firm or Unregistered Partnership, which is strictly ineligible."
                    },
                    {
                      title: "Entity is too old",
                      desc: "The date of legal incorporation exceeds 10 years from the date of creating the DPIIT application."
                    },
                    {
                      title: "Turnover exceeds limit",
                      desc: "Annual turnover in any financial year has already crossed the ₹100 Crore limit."
                    },
                    {
                      title: "Lack of Innovation & Scalability",
                      desc: "The application or business description does not clearly draft or prove innovation, uniqueness, or high scalability."
                    },
                    {
                      title: "Incomplete or incorrect documents",
                      desc: "Document scans are blurry, cropped, incomplete, or unsigned by the authorised signatory."
                    },
                    {
                      title: "Mismatch in details",
                      desc: "There is a spelling or numerical mismatch between PAN, company name, incorporation certificate, or NSC portal entries."
                    },
                    {
                      title: "Existing business restructured",
                      desc: "The business is formed by splitting up or reconstructing an already existing business, rather than being a brand-new initiative."
                    }
                  ].map((reason, idx) => (
                    <div key={idx} className="flex gap-3 p-4 bg-red-50/50 border border-red-100 rounded-2xl">
                      <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-red-950 text-sm">{reason.title}</h4>
                        <p className="text-red-900/80 text-xs mt-1 leading-normal text-justify">{reason.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. WHY MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  At MakeEazy, we help entrepreneurs and founders complete the Startup India Registration process smoothly, quickly, and professionally.
                </p>

                <div className="grid sm:grid-cols-3 gap-4 text-left pt-2">
                  <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Business Description Drafting</h4>
                    <p className="text-slate-600 text-xs leading-normal">Our team drafts a compelling and detailed essay on the innovation, uniqueness, and scalability factors of your startup, maximizing direct government approval rates.</p>
                  </div>
                  <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">Eligibility Screening</h4>
                    <p className="text-slate-600 text-xs leading-normal">We screen details like age, incorporation type, and structure to double-check that your application complies with DPIIT criteria before submission.</p>
                  </div>
                  <div className="p-5 border border-slate-100 bg-slate-50/50 rounded-2xl">
                    <h4 className="font-bold text-slate-800 text-sm mb-1">End-to-End Filing Support</h4>
                    <p className="text-slate-600 text-xs leading-normal">We manage portal setups, NSWS coordination, filing submissions, responding to government queries/clarifications, and final certificate download.</p>
                  </div>
                </div>

                <div className="bg-[#3150A0]/5 border border-blue-100 rounded-2xl p-6 mt-6">
                  <h3 className="font-bold text-[#3150A0] text-lg mb-3 text-left">Our Comprehensive Service Stack Includes:</h3>
                  <div className="grid sm:grid-cols-2 gap-3 text-left text-sm text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Consultation on eligibility & structures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Legal document checklist review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Application dossier preparation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Business description framing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Filing on State & Central NSWS portals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Tracking & responding to query clarifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>DPIIT recognition certificate download</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                      <span>Post-registration compliance consultation</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. FAQS */}
            {activeTab === 'faq' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Frequently Asked Questions</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Here are answers to the most common questions regarding Startup India DPIIT recognition:
                </p>

                <div className="space-y-3">
                  {[
                    {
                      q: "1. What is Startup India Registration?",
                      a: "Startup India Registration is the official process of obtaining DPIIT recognition for an eligible startup under the Startup India initiative of the Government of India, unlocking key fiscal incentives and compliance exemptions."
                    },
                    {
                      q: "2. Who can apply for Startup India Registration?",
                      a: "A Private Limited Company, a Limited Liability Partnership (LLP), or a Registered Partnership Firm that satisfies the prescribed criteria can apply."
                    },
                    {
                      q: "3. Can a proprietorship firm apply for Startup India Registration?",
                      a: "Generally, proprietorship firms are NOT eligible for DPIIT Startup Recognition. The business should first register as an eligible entity, such as a Private Limited Company or LLP."
                    },
                    {
                      q: "4. Is Startup India Registration compulsory?",
                      a: "No, Startup India Registration is not compulsory. However, it is strongly recommended for eligible startups because it offers official recognition, substantial tax exemptions, patent discounts, and access to funding grants."
                    },
                    {
                      q: "5. What is a DPIIT Certificate?",
                      a: "A DPIIT Certificate is the Certificate of Recognition issued directly to an eligible startup after approval of its Startup India registration dossier."
                    },
                    {
                      q: "6. Does Startup India Registration provide tax exemption automatically?",
                      a: "No. DPIIT recognition makes a startup eligible to apply for certain tax benefits (like 3-year consecutive income tax holiday under Section 80-IAC or Angel Tax exemption under Section 56), but tax exemptions require a separate, second-level filing and specific review."
                    },
                    {
                      q: "7. How long does Startup India Registration take?",
                      a: "The time depends on document readiness, description drafting, and government officers' response times. A properly prepared, high-quality application with MakeEazy is generally processed faster and avoids query cycles."
                    },
                    {
                      q: "8. What documents are required for Startup India Registration?",
                      a: "Common required documents include the entity registration/incorporation certificate, PAN card of the entity, director/partner details, registered address proof, a comprehensive business plan, and a draft detailing the innovate-scalability metrics of the startup."
                    },
                    {
                      q: "9. Can an old business apply for Startup India Registration?",
                      a: "Only businesses that fall within the prescribed eligibility period (within 10 years from the date of incorporation or registration) are eligible. Older businesses (exceeding 10 years) cannot apply."
                    },
                    {
                      q: "10. Can MakeEazy help with Startup India Registration?",
                      a: "Yes. MakeEazy provides complete end-to-end guidance and filing assistance for Startup India Registration, including drafting your business innovation summary, legal compliance checks, and document uploading."
                    }
                  ].map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-100/80 transition-all focus:outline-none cursor-pointer"
                        >
                          <span className="pr-4">{faq.q}</span>
                          <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-orange-500' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-5 pt-0 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed text-justify">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to accelerate your startup eligibility and benefits?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for DPIIT Recognition with MakeEazy</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
