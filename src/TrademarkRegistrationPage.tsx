import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Copyright, 
  Search, 
  Layers, 
  FileText, 
  HelpCircle, 
  ShieldCheck, 
  HelpCircle as FaqIcon,
  CheckCircle2, 
  Check, 
  Flame, 
  TrendingUp, 
  Scale, 
  Lock, 
  Globe, 
  Award, 
  Sparkles,
  ChevronDown,
  Info 
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is Trademark', icon: Info },
  { id: 'importance', name: 'Why Trademark is Important', icon: Lock },
  { id: 'eligibility', name: 'Who Should Apply & Eligibility', icon: Award },
  { id: 'can-be-registered', name: 'What Can/Cannot Be Registered', icon: ShieldCheck },
  { id: 'types', name: 'Types of TM Applications', icon: Sparkles },
  { id: 'classes', name: 'Trademark Classes (Nice Class)', icon: Layers },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: '14-Step Registration Process', icon: TrendingUp },
  { id: 'status', name: 'TM Application Statuses', icon: CheckCircle2 },
  { id: 'objection-opposition', name: 'Objection & Opposition', icon: Scale },
  { id: 'benefits', name: 'Key Benefits (12 Points)', icon: Flame },
  { id: 'validity-symbols', name: 'Validity, Symbols & Fees', icon: TrademarkIcon },
  { id: 'faqs', name: 'Frequently Asked Questions', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

function TrademarkIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 15V9h3a3 3 0 0 1 0 6H9Z" />
      <path d="M13 15h3" />
    </svg>
  );
}

export default function TrademarkRegistrationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is Trademark Registration?",
      a: "Trademark Registration is the legal process of registering a brand name, logo, slogan, symbol, or mark with the Trade Marks Registry to protect brand identity."
    },
    {
      q: "Who can apply for Trademark Registration?",
      a: "Individuals, proprietors, partnership firms, LLPs, companies, startups, MSMEs, trusts, societies, NGOs, and foreign applicants can apply for Trademark Registration."
    },
    {
      q: "What can be registered as a trademark?",
      a: "A brand name, logo, slogan, tagline, product name, business name, label, symbol, device, shape, sound, or colour combination may be registered if it is distinctive and legally eligible."
    },
    {
      q: "Is Trademark Registration mandatory?",
      a: "Trademark Registration is not mandatory, but it is highly recommended for brand protection, exclusive rights, and legal ownership."
    },
    {
      q: "Can I use the TM symbol after filing a trademark application?",
      a: "Yes. The ™ symbol can generally be used immediately after filing a trademark application or even when claiming brand rights in an unregistered mark."
    },
    {
      q: "When can I use the ® symbol?",
      a: "The ® symbol can be used only after the trademark is successfully registered and official Registration Certificate is issued."
    },
    {
      q: "What is a trademark class?",
      a: "A trademark class is a category of goods or services under the Nice Classification system. Trademark protection is granted based on the specific classes and description selected."
    },
    {
      q: "How many trademark classes are there?",
      a: "There are 45 trademark classes in total. Classes 1 to 34 cover goods, and Classes 35 to 45 cover services."
    },
    {
      q: "What is the validity of a registered trademark?",
      a: "A registered trademark is valid for 10 years from the date of application and can be renewed every 10 years indefinitely upon payment of renewal fees."
    },
    {
      q: "What is the difference between a word mark and a logo mark?",
      a: "A word mark protects the brand name in plain text form, while a logo mark protects the specific visual design, stylised fonts, or symbol."
    },
    {
      q: "Can I register both brand name and logo?",
      a: "Yes. A business can file separate applications for the brand name and logo (or as a combined mark) for stronger, comprehensive protection."
    },
    {
      q: "What happens if my trademark is objected to?",
      a: "If an objection is raised by the examiner, a formal reply must be filed within the prescribed time explaining how the mark is eligible. A hearing may also be scheduled."
    },
    {
      q: "What is trademark opposition?",
      a: "Trademark opposition is a proceeding filed by a third party after the mark is published in the Trade Marks Journal if they believe it conflicts with their existing rights."
    },
    {
      q: "Is company registration enough to protect my brand name?",
      a: "No. Company registration prevents others from registering a company with the exact same name with the MCA, but does not provide trademark rights or prevent others from using it in the market as a brand name."
    },
    {
      q: "Can MakeEazy help with Trademark Registration?",
      a: "Yes. MakeEazy provides complete assistance for Trademark Registration, including search, class selection, filing, objection reply support, hearing guidance, and renewal support."
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
                <TrademarkIcon className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
                Intellectual Property & Brand Protection
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Trademark Registration
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Protect your brand identity, business logos, and taglines legally. Governing by the <strong className="text-white font-bold">Trade Marks Act, 1999</strong>, register under the <strong className="text-white font-bold">Trade Marks Registry</strong> to secure exclusive nationwide ownership.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Copyright className="w-12 h-12 md:w-16 md:h-16 text-orange-400" />
            </div>
          </div>
        </div>

        {/* Sidebar and Main content columns */}
        <div className="lg:flex lg:gap-8 items-start">
          
          {/* Sidebar Left Navigation */}
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

          {/* Mobile Filter select layout */}
          <div className="lg:hidden mb-8">
            <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 text-left">Navigate Sections</label>
            <div className="relative">
              <select 
                value={activeTab} 
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full bg-white border border-slate-200 text-slate-700 font-semibold py-3 px-4 pr-10 rounded-2xl appearance-none focus:outline-none focus:border-[#3150A0]"
              >
                {SECTIONS.map((section) => (
                  <option key={section.id} value={section.id}>
                    {section.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white border border-slate-200 rounded-3xl p-6 md:p-10 shadow-sm min-h-[500px]">
            
            {/* 1. OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Info className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Trademark Registration Overview</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  Trademark Registration is an important legal protection for businesses, startups, brands, manufacturers, service providers, traders, e-commerce sellers, and professionals who want to protect their brand identity.
                </p>
                
                <p className="text-slate-700 leading-relaxed text-justify">
                  A trademark may include a brand name, business name, logo, slogan, tagline, word, symbol, label, device, packaging style, or any other mark that helps customers identify the goods or services of a business.
                </p>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trademark Registration in India is governed by the <strong>Trade Marks Act, 1999</strong> and administered by the <strong>Trade Marks Registry</strong> under the Office of the Controller General of Patents, Designs and Trade Marks, Government of India.
                </p>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <h3 className="text-[#3150A0] font-bold text-lg mb-2">What is Trademark Registration?</h3>
                  <p className="text-slate-600 text-sm leading-relaxed text-justify">
                    Trademark Registration is the legal process of registering a brand name, logo, symbol, word, slogan, or mark with the Trade Marks Registry. Once registered, the trademark owner gets legal protection over the registered mark for the goods or services mentioned in the application. A registered trademark helps the owner stop others from using the same or deceptively similar brand name or logo for similar business activities.
                  </p>
                </div>



                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-4">
                  <h3 className="text-orange-950 font-bold text-lg mb-2">What is a Trademark?</h3>
                  <p className="text-slate-700 text-sm leading-relaxed text-justify">
                    A trademark is a mark that distinguishes the goods or services of one business from those of others. It helps customers identify the source, quality, and reputation of a product or service.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Brand name</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Business name</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Product name</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Logos & Icons</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Slogans & Taglines</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-white border border-slate-150 rounded-xl">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>Combination of words/designs</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. IMPORTANCE */}
            {activeTab === 'importance' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Lock className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why is Trademark Registration Important?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trademark Registration is important because your brand is one of your most valuable business assets. Without trademark protection, another person or competitor may copy, misuse, or register a similar brand name or logo, causing confusion and financial loss.
                </p>

                <div className="bg-[#3150A0]/5 border border-[#3150A0]/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">How Trademark Registration Protects Your Brand:</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-755 leading-relaxed">
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Protecting brand name and logo:</strong> Safeguards your original visual marks from direct duplication on similar markets.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Creating legal ownership:</strong> Establishes nationwide prima facie evidence of continuous proprietary trademark rights.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Preventing misuse:</strong> Restricts competitors from applying deceptions, phonetically confusing spellings, or lookalikes.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Building credibility:</strong> Helps raise value when seeking capital roundups, franchises, licensing deals, or joint ventures.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>Legal Action Power:</strong> Enables the registered proprietor to file lawsuits claiming statutory damages for direct infringement.</span>
                    </div>
                    <div className="flex gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                      <span><strong>E-Commerce On-boarding:</strong> Mandatory or heavily prioritized to unlock Amazon Brand Registry, Flipkart seller safeguards, and portal programs.</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-5 rounded-2xl">
                  <p className="text-sm text-slate-700 font-medium">
                    🏆 <strong>A registered trademark</strong> grants far stronger legal protections nationwide, whereas unregistered common-law marks depend on expensive, complex, and burden-heavy passing-off actions to establish rights.
                  </p>
                </div>
              </div>
            )}

            {/* 3. ELIGIBILITY */}
            {activeTab === 'eligibility' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Award className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Should Apply & Eligibility</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Any person claiming to be the owner of a trademark can apply for Trademark Registration. The applicant should have a genuine intention to use the mark or should already be using the mark for the specified goods or services.
                </p>

                <h3 className="text-lg font-bold text-[#3150A0] mt-6">Entities Eligible to File:</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-slate-700 mt-4">
                  {[
                    "Individuals or Proprietorship firms",
                    "Partnership firms & LLPs",
                    "Private Limited Companies",
                    "Public Limited Companies",
                    "One Person Companies (OPC)",
                    "Government Undertakings",
                    "Startups registered under DIPP",
                    "MSMEs or eligible Udyams",
                    "Trusts, Societies & NGOs",
                    "Foreign Applicants (under Madrid Protocol or direct)",
                    "Joint Venture Owners / Associations",
                    "E-commerce sellers & Online Brands"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-slate-55 border border-slate-150 rounded-xl">
                      <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                      <span className="font-semibold text-xs leading-none">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl mt-6">
                  <p className="text-slate-650 text-sm leading-relaxed text-justify">
                    Trademark Registration is highly useful for almost every unique business or professional. Examples of prominent sectors applying include software developers, apparel designers, food chains, manufacturers, educators, consultants, and online creators (YouTubers, influencers, etc.).
                  </p>
                </div>
              </div>
            )}

            {/* 4. CAN BE REGISTERED */}
            {activeTab === 'can-be-registered' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What Can and Cannot Be Registered</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-6">
                  
                  {/* What Can Be Registered */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2 border-b border-emerald-100 pb-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      What CAN Be Registered
                    </h3>
                    <p className="text-xs text-slate-500">Marks that are distinctive, original, and do not resemble existing brands:</p>
                    <div className="space-y-3">
                      {[
                        { title: "1. Brand Name", desc: "A unique name used for a product, service, or business." },
                        { title: "2. Logo & Symbol", desc: "An artistic brand design can be registered as a device mark." },
                        { title: "3. Tagline or Slogan", desc: "A unique tagline or catchphrase associated with a brand." },
                        { title: "4. Product Name", desc: "A unique specific product identifier name." },
                        { title: "5. Label or Packaging Style", desc: "Product labels, trade dress configurations, shapes, or combinations." },
                        { title: "6. Non-Traditional Marks", desc: "Such as unique Sound Marks or Shape Marks identifying source." }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-emerald-50/30 border border-emerald-100 rounded-xl">
                          <h4 className="font-bold text-xs text-emerald-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-650 mt-1">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* What Cannot Be Registered */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-rose-800 flex items-center gap-2 border-b border-rose-100 pb-2">
                      <span className="inline-flex w-5 h-5 items-center justify-center bg-rose-100 text-rose-600 rounded-full text-xs font-bold">!</span>
                      What CANNOT Be Registered
                    </h3>
                    <p className="text-xs text-slate-500">The Trade Marks Registry may refuse marks that are not legally eligible:</p>
                    <div className="space-y-3">
                      {[
                        { title: "1. Generic Names", desc: "Using words like 'Bread' or 'Computer' directly to name those items." },
                        { title: "2. Descriptive Terms", desc: "Directly describing quality, quantity, value, or geographical origin." },
                        { title: "3. Confusingly Similar Marks", desc: "Marks that closely resemble existing active or pending brand filings." },
                        { title: "4. Deceptive / Misleading", desc: "Marks likely to create confusion or mislead consumers about origin." },
                        { title: "5. Prohibited Emblems", desc: "Containing protected national emblems, official flags, or state symbols." },
                        { title: "6. Offensive / Scarrilous", desc: "Contrary to morality or hurting public religious feelings." }
                      ].map((item, idx) => (
                        <div key={idx} className="p-3 bg-rose-50/30 border border-rose-100 rounded-xl">
                          <h4 className="font-bold text-xs text-rose-900">{item.title}</h4>
                          <p className="text-[11px] text-slate-650 mt-1">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* 5. TYPES OF APPLICATIONS */}
            {activeTab === 'types' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Types of Trademark Applications</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify col-span-2">
                  Different types of trademark applications may be filed depending on the nature of the mark and specific business requirements. Selecting the correct type of trademark application is important for strong brand protection.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    { title: "Word Mark", desc: "Protects the brand name in plain text. It gives protection to the letters/words regardless of font, style, color, or design. This offers the broadest protection." },
                    { title: "Device Mark / Logo Mark", desc: "Protects a logo, custom symbol, stylized font, label, color scheme, or artistic design layout containing words." },
                    { title: "Combined Mark", desc: "A combined mark style covers both words and logo elements combined together in a single composite application." },
                    { title: "Series Mark", desc: "Used when an applicant files multiple similar trademark versions with only secondary variations in non-distinctive features." },
                    { title: "Collective Mark", desc: "Used to distinguish goods/services of members of an association, union, or group from non-members." },
                    { title: "Certification Mark", desc: "Used to certify certain characteristics (quality, material, accuracy, or geographical origin) of products (e.g., ISO, Woolmark)." },
                    { title: "Sound Mark", desc: "Protects a highly unique sonic brand identifier, melody, chime, or sound effect (e.g., Netflix sound, Intel chime)." }
                  ].map((item, index) => (
                    <div key={index} className="bg-slate-55 border border-slate-200 rounded-2xl p-5 hover:border-orange-200 transition-colors">
                      <h3 className="font-bold text-base text-[#3150A0] mb-2">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. TRADEMARK CLASSES */}
            {activeTab === 'classes' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Trademark Classes (Nice Classification)</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trademark applications are filed under specific, specialized classes of goods and services. India follows the international <strong>Nice Classification (NCL)</strong> system. There are <strong>45 classes</strong> in total:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div className="bg-orange-50/30 border border-orange-100 p-6 rounded-2xl">
                    <h3 className="text-base font-bold text-orange-950 mb-3">Classes 1 &mdash; 34: Goods</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-4">
                      These sections cover physical items, chemical substances, industrial materials, machinery, instruments, clothing, and food products.
                    </p>
                    <div className="text-xs font-semibold text-slate-700 space-y-2">
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span>Class 3 &mdash; Cosmetics & Detergents</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span>Class 5 &mdash; Pharmaceuticals & Medicines</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span>Class 25 &mdash; Readymade Garments & Footwear</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-orange-500" />
                        <span>Class 30 &mdash; Coffee, Tea, Spices & Food Rice</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50/20 border border-blue-100 p-6 rounded-2xl">
                    <h3 className="text-base font-bold text-[#3150A0] mb-3">Classes 35 &mdash; 45: Services</h3>
                    <p className="text-xs text-slate-650 leading-relaxed mb-4">
                      These sections cover business activities, advertisements, information IT services, consultancy, medical care, and legal assistance.
                    </p>
                    <div className="text-xs font-semibold text-slate-700 space-y-2">
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-[#3150A0]" />
                        <span>Class 35 &mdash; Advertising & Retail Markets</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-[#3150A0]" />
                        <span>Class 41 &mdash; Education & Coaching Services</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-[#3150A0]" />
                        <span>Class 42 &mdash; IT & Software Development</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/70 border border-slate-150 p-2.5 rounded-xl">
                        <Check className="w-4 h-4 text-[#3150A0]" />
                        <span>Class 43 &mdash; Restaurant & Hotel Services</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl mt-6">
                  <p className="text-xs text-slate-650 leading-relaxed text-justify">
                    ⚠️ <strong>Important:</strong> Choosing the correct trademark class is absolutely critical. If the wrong class is selected, the trademark may not provide proper legal protection for your specific core business activity. MakeEazy assists in identifying the precise combination of classes before filing to avoid objections.
                  </p>
                </div>
              </div>
            )}

            {/* 7. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for TM Registration</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  The documents required depend on the applicant type as well as whether you are claiming prior use (claiming a Trademark is already in use before the filing date).
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
                  
                  {/* Basic Details & Proprietor */}
                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] mb-3">Individual or Proprietor</h3>
                    <ul className="space-y-2.5 text-xs text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>PAN Card and Identity Card (Aadhaar, Passport, or Vote ID).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Address proof of the applicant.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Brand name, Logo/Device copy (if applicable).</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Signed Power of Attorney (Form TM-48) authorizing your Trademark agent.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>MSME / Udyam Certificate (highly recommended to claim a 50% concessional government fee).</span>
                      </li>
                    </ul>
                  </div>

                  {/* Partnership or Company */}
                  <div className="border border-slate-150 rounded-2xl p-5 bg-slate-50">
                    <h3 className="font-bold text-[#3150A0] mb-3">For LLPs, Partnership Firms & Companies</h3>
                    <ul className="space-y-2.5 text-xs text-slate-650">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Certificate of Incorporation or Partnership Deed.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>PAN Card of the firm/company.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Authorized Signatory Identity & Address proofs.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Board Resolution or Authorization Letter.</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>MSME / Startup India recognition certificate (to claim concessional government rate).</span>
                      </li>
                    </ul>
                  </div>

                </div>

                <div className="bg-orange-50/40 border border-orange-100 p-6 rounded-2xl mt-6">
                  <h3 className="font-bold text-orange-950 text-sm mb-2">Documents for Prior Use Claims:</h3>
                  <p className="text-xs text-slate-700 leading-relaxed text-justify mb-3">
                    If you claim the mark is already being used in commerce, you must provide a signed <strong>User Affidavit</strong> along with solid material evidence of prior use. This includes:
                  </p>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    📁 Invoices, bills, bank statements, website URLs with domain purchase bills, product packaging mockups, social media page captures, print advertisements, or sales ledger records showing the brand mark active.
                  </p>
                </div>
              </div>
            )}

            {/* 8. PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <TrendingUp className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">14-Step Registration Process</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Trademark Registration is completed online through the official IP India trademark filing portal. Below is the comprehensive step-by-step lifecycle of an application:
                </p>

                {/* Timeline view */}
                <div className="relative border-l border-slate-200 ml-4 pl-6 space-y-8 mt-6">
                  {[
                    { step: "Step 1", title: "Trademark Search", desc: "Before filing, conduct an exhaustive trademark database search to verify availability, phonetics, and assess visual rejection risks." },
                    { step: "Step 2", title: "Class Selection", desc: "Select the correct category (from the 45 Nice classes) corresponding to your goods or professional services." },
                    { step: "Step 3", title: "Decide the Type of Mark", desc: "Determine whether to file for plain text (Word Mark), an unique custom logo (Device), or a comprehensive Combined Mark." },
                    { step: "Step 4", title: "Prepare Documents", desc: "Draft Form TM-48 (Power of Attorney), create User Affidavits for prior use, and gather MSME/Startup certificates." },
                    { step: "Step 5", title: "File Trademark Application", desc: "Submit Form TM-A online on the official IP India portal with prescribed government fees." },
                    { step: "Step 6", title: "Receive Application Number", desc: "Upon successful filing, a unique application number is instantly generated, and you can start using the ™ symbol." },
                    { step: "Step 7", title: "Formality Check", desc: "The Registry checks for basic requirement completion. If errors are flagged, a 'Formality Check Fail' status requires corrections." },
                    { step: "Step 8", title: "Examination", desc: "The Trademark Examiner inspects the application for distinctiveness and any prior matching trademarks under sections 9 and 11 of the Trade Marks Act." },
                    { step: "Step 9", title: "Reply to Examination Report", desc: "If the Examiner raises any objections (within 30 days), a legally sound professional response must be filed." },
                    { step: "Step 10", title: "Show-Cause Hearing", desc: "If the Examiner is not satisfied with the written response, a virtual show-cause hearing may be scheduled to present oral arguments." },
                    { step: "Step 11", title: "Journal Publication", desc: "Once accepted, the Mark is published in the official Trade Marks Journal to invite opposition from public." },
                    { step: "Step 12", title: "Opposition Period", desc: "A strict 4-month waiting window allows third parties to file an opposition if they believe the mark infringes their prior rights." },
                    { step: "Step 13", title: "Registration Certificate", desc: "If no oppositions are raised, or if the hearing is decided in your favour, the official Trademark Registration Certificate is issued." },
                    { step: "Step 14", title: "Use Symbol ®", desc: "You are now legally authorized to use the registered ® symbol next to your brand name, valid for an initial period of 10 years." }
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-10 top-1.5 flex h-6 h-6 items-center justify-center rounded-full bg-slate-100 border-2 border-[#3150A0] text-[10px] font-bold text-[#3150A0] w-6">
                        {idx + 1}
                      </span>
                      <div>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">{item.step}</span>
                        <h4 className="font-bold text-base text-[#3150A0] mt-0.5">{item.title}</h4>
                        <p className="text-xs text-slate-600 mt-1 leading-relaxed text-justify">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 9. APPLICATION STATUSES */}
            {activeTab === 'status' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">TM Application Statuses Explained</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  After filing, the trademark status will update progressively in the Registry public records. Monitoring the trademark status is critical because missing reply deadlines can result in permanent abandonment of your application.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    { name: "New Application", desc: "The application has successfully been filed and received on the IP India server." },
                    { name: "Send to Vienna Codification", desc: "A routine administrative step applicable only to logo-based (Device) applications for indexing visual design elements." },
                    { name: "Formalities Chk Pass", desc: "The basic physical paperwork, fees, and attachments have passed verification checks." },
                    { name: "Formalities Chk Fail", desc: "Paperwork is incomplete, or wrong forms were used. Requires corrective actions or amendment files." },
                    { name: "Marked for Exam", desc: "The application is currently with an Examiner for statutory review." },
                    { name: "Objected", desc: "Objections have formally been raised under sections 9 or 11. An official Examination Report has been issued." },
                    { name: "Accepted & Advertised", desc: "The application has passed examination without issues and is published in the Trade Mark Journal." },
                    { name: "Opposed", desc: "A third party has presented an opposition claim. Requires filing a counter-statement within 2 months." },
                    { name: "Registered", desc: "The Certificate is officially issued. You have acquired full exclusive rights." },
                    { name: "Refused / Abandoned / Withdrawn", desc: "Filing has failed due to unaddressed objections, timeline lapses, or applicant request." }
                  ].map((status, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-slate-55 border border-slate-150 rounded-2xl">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 shrink-0"></div>
                      <div>
                        <h4 className="font-bold text-sm text-[#3150A0]">{status.name}</h4>
                        <p className="text-xs text-slate-650 mt-1 leading-relaxed">{status.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 10. OBJECTION VS OPPOSITION */}
            {activeTab === 'objection-opposition' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Objection vs Opposition</h2>
                </div>

                <p className="text-slate-705 leading-relaxed text-justify">
                  While they sound similar, active objections and professional oppositions occur at entirely different points in the registration lifecycle:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  
                  {/* Trademark Objection */}
                  <div className="bg-orange-50/15 border border-orange-200/50 p-6 rounded-2xl space-y-4">
                    <h3 className="font-bold text-base text-orange-950 flex items-center gap-2 border-b border-orange-100 pb-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      Trademark Objection
                    </h3>
                    <p className="text-xs text-slate-500">Raised internally by the <strong>Government Examiner</strong> during initial office actions.</p>
                    <h4 className="text-xs font-bold text-[#3150A0]">Common Reasons for Objection:</h4>
                    <ul className="text-xs text-slate-655 space-y-2 list-disc pl-5">
                      <li>Use of descriptive, generic, or common surnames.</li>
                      <li>Conflict with confusingly similar phonetic brand names of prior registration.</li>
                      <li>Lack of required visual distinctiveness.</li>
                      <li>Incorrect category classification.</li>
                      <li>Insufficient evidence of prior commercial use.</li>
                    </ul>
                    <p className="text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-150">
                      💡 <strong>Reply Action:</strong> A comprehensive reply on legal grounds must be uploaded online within exactly 30 days of report receipt.
                    </p>
                  </div>

                  {/* Trademark Opposition */}
                  <div className="bg-blue-50/10 border border-blue-200/50 p-6 rounded-2xl space-y-4">
                    <h3 className="font-bold text-base text-[#3150A0] flex items-center gap-2 border-b border-blue-100 pb-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      Trademark Opposition
                    </h3>
                    <p className="text-xs text-slate-500">Filed externally by <strong>third-party brand owners</strong> after the Mark is published in the Journal.</p>
                    <h4 className="text-xs font-bold text-[#3150A0]">Overview of Opposition:</h4>
                    <ul className="text-xs text-slate-655 space-y-2 list-disc pl-5">
                      <li>Third-parties believe your brand violates, dilutes, or harms their established reputation.</li>
                      <li>Initiates a separate quasi-judicial proceeding.</li>
                      <li>Requires monitoring of Journal publications continuously.</li>
                      <li>Involves filing counter-statements, evidence, and hearings.</li>
                    </ul>
                    <p className="text-xs text-slate-600 bg-white/70 p-3 rounded-xl border border-slate-150">
                      ⚠️ <strong>Rule:</strong> The applicant must file an official Counter-Statement within 2 months of receiving notice, with NO extensions allowed.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* 11. BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Flame className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Key Benefits of Trademark (12 Points)</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Securing a registered trademark provides massive long-term advantages, protecting your financial assets and market position:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    { t: "1. Legal Protection", d: "Secures complete legislative support opposing unauthorized use, replication, or false representations by competitors." },
                    { t: "2. Exclusive Rights", d: "Provides exclusive legal rights to utilize the trademark across specified business classes nationwide." },
                    { t: "3. Brand Identity Protection", d: "Blocks competitors from adopting confusingly similar brand structures, visual lookalikes, or deceptive spellings." },
                    { t: "4. Right to Take Legal Action", d: "Enables filing statutory infringement lawsuits with absolute ease instead of complex common-law legal actions." },
                    { t: "5. Builds Trust & Credibility", d: "The registered ® logo conveys quality, authenticity, and professionalism to customers, vendors, and investors." },
                    { t: "6. Intangible Asset Creation", d: "Your registered trademark is a legitimate corporate property asset that can be valued, sold, or structured." },
                    { t: "7. Franchise & Licensing Revenue", d: "Enables brand licensing, allowing you to easily generate passive franchise fees or royalty streams." },
                    { t: "8. Supports Business Expansion", d: "Establishes a safe, legally-protected brand canvas to expand safely into new geographic territories." },
                    { t: "9. E-Commerce Safeguards", d: "Unlocks dedicated registry defense programs on Amazon, Flipkart, Myntra, and major digital marketplaces." },
                    { t: "10. Competitor Misuse Block", d: "Strictly deters malicious competitors from copying or riding on your earned reputation and market goodwill." },
                    { t: "11. 10-Year Long Validity", d: "Extremely cost-effective brand protection that keeps active for 10 years and is easily renewable." },
                    { t: "12. Global Filing Foundations", d: "A primary Indian trademark registration serves as an eligible baseline to file international marks under the Madrid Protocol." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="p-4 bg-slate-55 border border-slate-200 rounded-2xl">
                      <h4 className="font-bold text-sm text-[#3150A0]">{benefit.t}</h4>
                      <p className="text-xs text-slate-650 mt-1 leading-relaxed text-justify">{benefit.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 12. VALIDITY, SYMBOLS & FEES */}
            {activeTab === 'validity-symbols' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <TrademarkIcon className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Validity, Symbols & Fees</h2>
                </div>

                <div className="space-y-6">
                  
                  {/* Validity */}
                  <div className="bg-slate-50 border border-slate-150 p-6 rounded-2xl">
                    <h3 className="font-bold text-base text-[#3150A0] mb-2">Validity & Renewal Checklist</h3>
                    <p className="text-xs text-slate-655 leading-relaxed text-justify">
                      A registered trademark in India is valid for exactly <strong>10 years</strong> from the date of application. It can be renewed indefinitely every 10 years by filing the prescribed renewal application (Form TM-R) along with the required government fee. If the trademark is not renewed on time, it may be removed from the official register.
                    </p>
                  </div>

                  {/* Symbols */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-slate-200 p-5 rounded-2xl bg-[#3150A0]/5">
                      <span className="font-display font-black text-3xl text-orange-500">™</span>
                      <h4 className="font-bold text-sm text-[#3150A0] mt-2">The ™ Symbol</h4>
                      <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                        Indicates that a trademark application has formally been filed with the Registry. Anyone can use the ™ symbol immediately upon receiving their filing application number.
                      </p>
                    </div>
                    <div className="border border-slate-200 p-5 rounded-2xl bg-orange-50/10">
                      <span className="font-display font-black text-3xl text-[#3150A0]">®</span>
                      <h4 className="font-bold text-sm text-[#3150A0] mt-2">The Registered ® Symbol</h4>
                      <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                        Indicates that the trademark is fully registered. Legally, the ® symbol can ONLY be used after obtaining the official Registration Certificate. Using it before registration may be legally incorrect.
                      </p>
                    </div>
                  </div>

                  {/* Fees - CURRENCY RULE COMPLIANT */}
                  <div className="border border-slate-200 p-6 rounded-2xl text-justify">
                    <h3 className="font-bold text-base text-[#3150A0] mb-3">Trademark Registration Fees</h3>
                    <p className="text-xs text-slate-700 leading-relaxed mb-4">
                      The official government filing fees are based globally on applicant classification to encourage domestic growth, small companies, and self-proprietors:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl">
                        <span className="text-[#3150A0] font-bold">Individuals, Startups & MSMEs:</span>
                        <div className="text-lg font-black text-orange-500 mt-1">₹4,500 <span className="text-[10px] text-slate-500 font-normal">per class</span></div>
                        <p className="text-[10px] text-slate-500 mt-1">Subject to valid Udyam or Startup India recognition certificate.</p>
                      </div>
                      <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl">
                        <span className="text-[#3150A0] font-bold">Large Companies & Partnerships:</span>
                        <div className="text-lg font-black text-slate-805 mt-1">₹9,000 <span className="text-[10px] text-slate-500 font-normal">per class</span></div>
                        <p className="text-[10px] text-slate-500 mt-1">Applicable to all other legal commercial entities lacking MSME.</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 leading-relaxed mt-4">
                      *Note: The fee is charged on a per class basis. Filing a trademark in Class 25 and Class 35 simultaneously will require two separate governmental filing fee units. State physical filing carries an extra ₹500 government charge compared to standard modern digital e-filing. Professional service charges are kept entirely separate.
                    </p>
                  </div>

                </div>
              </div>
            )}

            {/* 13. FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FaqIcon className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-3 mt-4">
                  {FAQS.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300">
                        <button
                          onClick={() => toggleFaq(idx)}
                          className="w-full flex justify-between items-center p-5 bg-white hover:bg-slate-50/50 text-left transition-colors cursor-pointer"
                        >
                          <span className="font-bold text-sm text-[#3150A0] pr-4">{idx + 1}. {faq.q}</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="p-5 bg-slate-50/40 border-t border-slate-150/15 text-xs text-slate-650 leading-relaxed text-justify animate-slideDown">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 14. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy?</h2>
                </div>

                <p className="text-slate-700 leading-relaxed text-justify">
                  Our professional team provides end-to-end guidance for Trademark Registration, helping you conduct availability checks, identify classifications, prepare documentation, and file the application accurately.
                </p>

                <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Comprehensive Assistance:</h3>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm text-slate-705 leading-relaxed">
                    {[
                      "Thorough availability search before filing",
                      "Correct NCL class identification",
                      "MSME & Startup eligibility valuation & concessional pricing mapping",
                      "Application drafting by qualified legal professionals",
                      "Rapid e-filing directly with Ministry records",
                      "TM-A submission & immediate TM application number receipt",
                      "Regular status monitoring & real-time updates",
                      "Objection reply coordination support",
                      "Show-cause oral hearing assistance guidance",
                      "Registration certificate download support"
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call To Action Box */}
                <div className="bg-[#3150A0] text-white p-8 rounded-3xl mt-10 text-center relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Get Trademark Registration with MakeEazy</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                    Ready to scale your business and safeguard your brand name, logo, or slogan from duplication? Secure exclusive brand rights with India's most trusted corporate consulting team at MakeEazy today!
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
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to defend your brand name, logo, and unique business identity?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for Trademark Registration with MakeEazy</span>
                <Copyright className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
