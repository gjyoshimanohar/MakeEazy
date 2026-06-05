import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Briefcase, 
  Award, 
  CheckCircle2, 
  FileText, 
  HelpCircle, 
  AlertCircle, 
  ShieldCheck, 
  Layers, 
  XOctagon, 
  Check, 
  Sparkles,
  ChevronDown,
  Building,
  Users,
  Scale,
  FileHeart,
  FileBadge,
  Timer,
  HeartPulse,
  Activity
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is ESIC', icon: HeartPulse },
  { id: 'applicability', name: 'Who Needs & Applicability', icon: Users },
  { id: 'benefits', name: 'Key Benefits (10 Points)', icon: Sparkles },
  { id: 'employee-benefits', name: 'ESI Benefits for Employees', icon: Activity },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process', icon: Layers },
  { id: 'responsibilities', name: 'Employer Responsibilities', icon: FileBadge },
  { id: 'contributions', name: 'ESI Contribution Rates', icon: Scale },
  { id: 'differences', name: 'ESI vs PF & PT', icon: FileHeart },
  { id: 'faqs', name: 'Common Issues & FAQs', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function EsiRegistrationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is ESI Registration?",
      a: "ESI Registration is the process of registering an eligible establishment with ESIC for employee medical and social security benefits under the Employees’ State Insurance Act, 1948."
    },
    {
      q: "Who needs ESI Registration?",
      a: "Factories and other notified establishments employing the prescribed number of persons may need ESI Registration, depending on state-wise applicability and employee wage eligibility."
    },
    {
      q: "Is ESI Registration mandatory?",
      a: "Yes, ESI Registration is mandatory for establishments covered under the ESI Act."
    },
    {
      q: "What is ESIC?",
      a: "ESIC stands for Employees’ State Insurance Corporation. It administers the ESI scheme in India."
    },
    {
      q: "What is the employee wage limit for ESI?",
      a: "The commonly applicable wage ceiling for ESI coverage is ₹21,000 per month. For persons with disabilities, a higher wage ceiling of ₹25,000 per month may apply, subject to rules."
    },
    {
      q: "What are the ESI contribution rates?",
      a: "The commonly applicable contribution rates are 3.25% by the employer and 0.75% by the employee, making a total contribution of 4.00% of wages."
    },
    {
      q: "What documents are required for ESI Registration?",
      a: "Common documents include PAN, business registration proof, address proof, bank details, authorised signatory details, employee details, wage details, and other business documents."
    },
    {
      q: "What happens after ESI Registration?",
      a: "After registration, the employer must register eligible employees, deduct and deposit ESI contributions, maintain records, and comply with ESIC requirements."
    },
    {
      q: "Is ESI Registration the same as PF Registration?",
      a: "No. ESI Registration is for medical and insurance-related employee benefits, while PF Registration is for provident fund, pension, and retirement savings benefits."
    },
    {
      q: "Can an establishment with fewer employees voluntarily register for ESI?",
      a: "Voluntary or special coverage may depend on applicable ESIC rules and notifications. Employers should check their specific case before applying."
    },
    {
      q: "Can ESI Registration be cancelled?",
      a: "ESI Registration cannot be casually cancelled. Closure, non-operation, merger, or other special cases may require proper application and compliance with ESIC procedures."
    },
    {
      q: "Can MakeEazy help with ESI Registration?",
      a: "Yes. MakeEazy provides complete assistance for ESI Registration, including applicability check, documentation, online filing support, employer portal guidance, employee registration guidance, and post-registration compliance support."
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
                ESIC Compliance & Social Security Scheme
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                ESI Registration (ESIC)
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Commonly known as <strong className="text-white font-bold">ESIC Registration</strong>, it is an important statutory registration for employers in India required under the <strong className="text-white font-bold">Employees’ State Insurance Act, 1948</strong>.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <HeartPulse className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Desktop Sidebar Layout & Mobile Navigation Tabs */}
        <div className="lg:flex lg:gap-8 items-start">
          
          {/* Sidebar / Left Navigation */}
          <div className="hidden lg:block w-70 shrink-0 sticky top-36 bg-white border border-slate-200 rounded-3xl p-4 shadow-sm">
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
                  <HeartPulse className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is ESI Registration (ESIC)?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  ESI Registration, also known as <span className="font-bold text-slate-900">ESIC Registration</span>, is an important statutory registration for employers in India. It is required for establishments covered under the <span className="font-bold text-slate-900">Employees’ State Insurance Act, 1948</span>.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  ESI stands for <span className="font-semibold text-slate-950">Employees’ State Insurance</span>. It is a social security and health insurance scheme designed to provide medical care and financial protection to employees and their families in case of sickness, maternity, employment injury, disablement, and other covered situations.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  ESI Registration is managed by the <span className="font-bold text-[#3150A0]">Employees’ State Insurance Corporation (ESIC)</span>, commonly known as ESIC, under the Ministry of Labour and Employment, Government of India.
                </p>

                <p className="text-slate-700 leading-relaxed bg-[#3150A0]/5 border border-blue-50 p-4 rounded-xl">
                  At <strong className="text-slate-900">MakeEazy</strong>, we assist businesses, startups, factories, shops, restaurants, service providers, contractors, educational institutions, healthcare establishments, and other employers with complete ESI Registration support, documentation, online application assistance, employee coverage guidance, and post-registration compliance support.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-500" />
                      What is ESI Registration Process?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      ESI Registration is the process through which an eligible employer registers its establishment with ESIC. After successful registration, the employer receives an ESIC employer code, which is used for employee registration, contribution payment, return filing, and other ESIC compliances.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      What is Employees' State Insurance (ESI)?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      ESIC is a statutory body that administers the ESI scheme in India. The scheme provides robust social security benefits to eligible employees and their dependants, particularly helping those in lower and middle-income categories.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. APPLICABILITY & ELIGIBILITY */}
            {activeTab === 'applicability' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Users className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs ESI Registration? & Applicability</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed font-medium">
                  ESI Registration is generally required for establishments that are covered under the ESI Act and employ the prescribed minimum number of persons (typically <strong className="text-orange-600 text-lg">10 or more employees</strong>, depending on state notifications/regulations).
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-base">The following types of establishments may require ESI Registration:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                    {[
                      "Factories employing 10 or more persons",
                      "Shops and commercial establishments",
                      "Hotels & Restaurants",
                      "Road motor transport undertakings",
                      "Cinemas and theatres",
                      "Newspaper establishments",
                      "Private educational institutions",
                      "Private medical institutions",
                      "Hospitals and clinics",
                      "Service providers",
                      "IT and software companies",
                      "Security agencies",
                      "Manpower supply agencies",
                      "Contractors",
                      "Warehouses",
                      "Trading businesses",
                      "Manufacturing units",
                      "Startups and growing businesses",
                      "Societies, trusts, and NGOs employing staff"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 border border-slate-150 rounded-lg">
                        <span className="font-mono text-xs font-bold text-orange-500 w-5">{idx + 1}.</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    Note: The applicability depends on the type of establishment, state notification, number of employees, and wage eligibility of employees.
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-[#3150A0] mb-4">ESI Registration Applicability Conditions</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "1. Factories Employing 10 or More Persons",
                        desc: "The ESI Act applies to all non-seasonal factories employing 10 or more persons."
                      },
                      {
                        title: "2. Shops and Commercial Establishments",
                        desc: "In many states and union territories, ESI coverage has been extended to shops and commercial establishments employing the prescribed number of persons."
                      },
                      {
                        title: "3. Hotels, Restaurants, Cinemas, and Road Transport Undertakings",
                        desc: "Many such establishments are covered under ESI if they meet the applicable employee strength threshold."
                      },
                      {
                        title: "4. Private Educational and Medical Institutions",
                        desc: "In many areas, private schools, colleges, hospitals, clinics, and medical institutions are covered under ESIC based on state notifications and employee strength."
                      },
                      {
                        title: "5. Contract and Casual Employees",
                        desc: "Employees engaged through contractors, casual workers, and certain temporary employees may also be counted for ESI applicability and coverage, depending on the facts and state-specific rules."
                      },
                      {
                        title: "6. State-Wise Applicability",
                        desc: "ESI applicability may differ from state to state. In some cases, the threshold may be 10 employees, while in certain areas or establishments, different thresholds may apply."
                      },
                      {
                        title: "7. Continued Applicability",
                        desc: "Once an establishment is covered under ESIC, it generally continues to remain covered even if the number of employees later falls below the prescribed threshold."
                      }
                    ].map((sec, i) => (
                      <div key={i} className="bg-orange-50/20 border border-orange-100 rounded-xl p-4">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">{sec.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{sec.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mt-6 text-left">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                    <Timer className="w-5 h-5 text-orange-500" />
                    Employee Wage Limit for ESI Coverage
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    ESI coverage is generally available for employees whose wages are within the prescribed wage ceiling.
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
                    <li>The commonly applicable wage ceiling for ESI coverage is <strong className="text-slate-900">₹21,000 per month</strong>.</li>
                    <li>For persons with disabilities, the wage ceiling is higher and commonly referred to as <strong className="text-slate-900">₹25,000 per month</strong>, subject to applicable rules.</li>
                  </ul>
                  <p className="text-xs text-slate-500 mt-3 italic">
                    If an employee's wages exceed the limit, they may not be covered under ESI. However, if they were already covered and wages increase during an on-going contribution period, coverage continues until the end of that contribution period.
                  </p>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mt-6">
                  <h4 className="font-bold text-red-950 text-base mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    Is ESI Registration Mandatory?
                  </h4>
                  <p className="text-sm text-red-900 leading-relaxed mb-2">
                    Yes, ESI Registration is strictly mandatory for establishments covered under the ESI Act. If an establishment crosses the applicable employee threshold and has employees falling within the prescribed wage limit, the employer must complete register with ESIC and comply with contribution requirements.
                  </p>
                  <p className="text-sm font-semibold text-red-950">
                    Failure to obtain ESI Registration after becoming eligible may lead to interest, penalty, damages, recovery proceedings, audits, inspections, and other legal consequences.
                  </p>
                </div>
              </div>
            )}

            {/* 3. KEY BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Key Benefits of ESI Registration (10 Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  ESI Registration provides critical benefits to both employers and employees, serving as a pillar of healthcare protection and professional compliance.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      num: "1",
                      title: "Legal Compliance",
                      desc: "ESI Registration ensures the employer is compliant with the statutory guidelines of the ESI Act and avoids legal prosecutions, inspection issues, or penalty fines."
                    },
                    {
                      num: "2",
                      title: "Robust Medical Benefits",
                      desc: "Covered employees and their eligible family members receive complete primary and tertiary medical care through the grand network of ESIC hospitals and clinics."
                    },
                    {
                      num: "3",
                      title: "Sickness Cash Benefit",
                      desc: "Employees can claim cash benefits during certified periods of medical sickness, covering temporary loss of active wages up to 91 days."
                    },
                    {
                      num: "4",
                      title: "Maternity Benefit",
                      desc: "Provides critical paid maternity leaves and cash benefits for pregnant women employees, ensuring safety during child-birth."
                    },
                    {
                      num: "5",
                      title: "Disablement Benefit",
                      desc: "Secures employees from temporary or permanent disablement due to employment injuries, providing continuing pensionary relief."
                    },
                    {
                      num: "6",
                      title: "Dependant Protection",
                      desc: "In unfortunate cases of employment-related death, dependants (spouse and children) receive supportive monthly payments and medical aids."
                    },
                    {
                      num: "7",
                      title: "Funeral Expenses Support",
                      desc: "ESIC provides localized cash assistance to help cover the immediate funeral expenses of deceased insured employees."
                    },
                    {
                      num: "8",
                      title: "Enhanced Employee Welfare",
                      desc: "Ensuring healthcare benefits creates a deeply secured, stress-free, and productive working environment for your workforce."
                    },
                    {
                      num: "9",
                      title: "Elevated Business Credibility",
                      desc: "Showcases standard corporate care, raising your brand reliability index before auditors, departments, and potential clients."
                    },
                    {
                      num: "10",
                      title: "Eligible for Tenders & Contracts",
                      desc: "Most government projects, public sectors tenders, and vendor registration mandates require ESIC registration proof to qualify."
                    }
                  ].map((benefit) => (
                    <div key={benefit.num} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-orange-200 hover:shadow-md transition-all flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 font-mono text-sm font-bold text-orange-600 flex items-center justify-center shrink-0">
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

            {/* 4. ESIC EMPLOYEE BENEFITS */}
            {activeTab === 'employee-benefits' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Activity className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">ESI Benefits for Employees</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  Employees covered under the ESI Scheme may receive various medical, financial, and rehabilitation benefits, which are crucial for lower and middle wage categories:
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  {[
                    { title: "Full medical care", desc: "Available for the insured persons and their dependents from the very first day of entering insurable employment." },
                    { title: "Sickness benefit", desc: "Cash compensation of 70% of average daily wages up to 91 days per year in case of certified sickness." },
                    { title: "Extended sickness benefit", desc: "For chronic/long-term infectious diseases, sickness cash advantage extended up to 2 years at an increased rate." },
                    { title: "Enhanced sickness benefit", desc: "Paid at double rate (100% of wages) for encouraging family welfare measures." },
                    { title: "Maternity benefit", desc: "Provides full daily wage compensation for 26 weeks, extensible on medical grounds." },
                    { title: "Temporary disablement benefit", desc: "Paid at 90% of daily wages if disablement is from a work injury, without limit on duration." },
                    { title: "Permanent disablement benefit", desc: "Paid as a regular monthly pension based on the loss of earning capacity determined by a medical board." },
                    { title: "Dependant benefit", desc: "Paid as a monthly pension to dependants (distributing 90% of wages) if death was caused by work injury." },
                    { title: "Funeral expenses", desc: "A fixed sum of money is paid to eldest family member or person who performs last rites." },
                    { title: "Rehabilitation benefits", desc: "Includes vocational rehabilitation training programs and physical aids like prosthetic limbs." },
                    { title: "Unemployment allowance", desc: "Paid under schemes like Rajiv Gandhi Shramik Kalyan Yojana for up to 24 months in case of job loss due to closure." }
                  ].map((benefit, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <h4 className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#3150A0] shrink-0" />
                        {benefit.title}
                      </h4>
                      <p className="text-slate-650 text-xs leading-relaxed pl-6">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-xs text-slate-500 italic mt-4">
                  Note: The availability and exact amount of these benefits depend on eligibility, contribution history, medical certification, and ESIC rules.
                </p>
              </div>
            )}

            {/* 5. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for ESI Registration</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  The documents required for ESI Registration vary based on the type of business entity. Gathering standard and clear files ensures a successful application process.
                </p>

                <div className="space-y-6">
                  {/* Basic Business Documents */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5 text-orange-500" />
                      Basic Business Documents
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        "PAN card of the business entity or employer",
                        "Certificate of Incorporation, partnership deed, LLP agreement, or shop & establishment certificate, factory licence",
                        "GST registration certificate, if available",
                        "Address proof of the establishment",
                        "Electricity bill, rent agreement, lease deed, ownership proof, or property tax receipt",
                        "Bank account details (cancelled cheque or bank statement)",
                        "Mobile number and email ID of the employer or authorised person"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authorised Signatory Documents */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      Authorised Signatory Documents
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        "PAN card of proprietor, partner, director, designated partner, trustee, or authorised signatory",
                        "Aadhaar card or identity proof of authorized person",
                        "Address proof of the signatory",
                        "Digital Signature Certificate (DSC), if required",
                        "Board resolution or authorisation letter, if applicable"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Employee Details */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5 text-orange-500" />
                      Employee Details (List format)
                    </h3>
                    <ul className="grid md:grid-cols-3 gap-3 text-sm text-slate-700 text-left">
                      {[
                        "List of employees",
                        "Employee names",
                        "Date of joining",
                        "Salary or wage details",
                        "Aadhaar details",
                        "PAN details, if available",
                        "Bank account details",
                        "Mobile number",
                        "Family details / Nominee details, if required"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2 border border-slate-200 p-2 bg-white rounded-lg items-center">
                          <Check className="w-4 h-4 text-[#3150A0] shrink-0" />
                          <span className="text-xs font-semibold text-slate-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Documents, If Applicable */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-orange-500" />
                      Additional Documents, If Applicable
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-700">
                      {[
                        "Factory licence / Labour licence",
                        "Contractor licence",
                        "Professional tax registration",
                        "PF registration certificate",
                        "Shops and Establishment registration",
                        "Partnership deed (for joint firms)",
                        "Trust deed or society registration certificate",
                        "Memorandum (MOA) and Articles of Association (AOA)",
                        "Commencement date proof",
                        "Wage register or salary sheet",
                        "Attendance register"
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2">
                          <Check className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 6. REGISTRATION PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Step-by-Step ESI Registration Process</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  ESI Registration is completed online through the ESIC employer portal or the applicable labour registration portal. Here is the general 10-step process:
                </p>

                <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-8 text-left">
                  {[
                    {
                      step: "Step 1",
                      title: "Check ESI Applicability",
                      desc: "Review the employee count, business activity, state-wise applicability, wage limits, and type of establishment to confirm ESI registration rules."
                    },
                    {
                      step: "Step 2",
                      title: "Collect Required Documents",
                      desc: "The employer must collect all business documents, authorised signatory details, employee rosters, address proof, and bank credentials."
                    },
                    {
                      step: "Step 3",
                      title: "Create Employer Login",
                      desc: "Create a login account on the ESIC employer portal or the relevant Unified Shram Suvidha/common labour portal."
                    },
                    {
                      step: "Step 4",
                      title: "Fill Establishment Details",
                      desc: "Enter Name of establishment, Address, Date of commencement, PAN, Ownership type, Nature of business, Category of establishment, Contact details, Bank details, Employer details, and Branch/unit details, if applicable."
                    },
                    {
                      step: "Step 5",
                      title: "Enter Employer and Authorised Person Details",
                      desc: "Provide details of the proprietor, partner, director, designated partner, trustee, or authorised signatory into the application profile."
                    },
                    {
                      step: "Step 6",
                      title: "Enter Employee Details",
                      desc: "Provide the current employee count and specific information on employees who qualify for ESI coverage."
                    },
                    {
                      step: "Step 7",
                      title: "Upload Required Documents",
                      desc: "Upload the collected documents in the prescribed format. Ensure details strictly match the system inputs."
                    },
                    {
                      step: "Step 8",
                      title: "Submit the Application",
                      desc: "Carefully review all entries and submit the complete digital registration form online."
                    },
                    {
                      step: "Step 9",
                      title: "Generation of ESIC Employer Code",
                      desc: "After successful verification, the establishment receives its unique 17-digit ESIC employer code or registration number."
                    },
                    {
                      step: "Step 10",
                      title: "Register Employees Under ESIC",
                      desc: "Post employer registration, eligible employees are registered under ESI and are allotted insurance numbers or linked to existing accounts."
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
              </div>
            )}

            {/* 7. EMPLOYER RESPONSIBILITIES */}
            {activeTab === 'responsibilities' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileBadge className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">After ESI Registration: Employer Responsibilities</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed font-semibold">
                  Once registered, the employer must strictly adhere to regular, monthly compliance requirements managed by ESIC:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "1. Register Eligible Employees",
                      desc: "The employer must register all eligible workforce members online under ESIC as soon as they join the firm."
                    },
                    {
                      title: "2. Deduct Employee Contribution",
                      desc: "Deduct the employee's contribution proportion from their monthly wages in accordance with current ESIC rates."
                    },
                    {
                      title: "3. Deposit Employer Contribution",
                      desc: "The employer must contribute their corresponding share along with the deducted employee portion."
                    },
                    {
                      title: "4. Pay Monthly ESI Contribution",
                      desc: "The total compiled contribution must be paid and deposited within the prescribed monthly due date."
                    },
                    {
                      title: "5. Maintain Employee Records",
                      desc: "Keep detailed records of employee attendance, wage registers, contribution records, and medical files."
                    },
                    {
                      title: "6. Update Employee Details",
                      desc: "Keep employee details updated correctly on the ESIC portal, including Aadhaar, bank accounts, family details, and nominees."
                    },
                    {
                      title: "7. Report Employee Exits",
                      desc: "Report the exit details of employees on the portal when they resign or leave the establishment."
                    },
                    {
                      title: "8. Comply with Inspection & Notices",
                      desc: "If any audit notice, inquiry, or query is received, cooperate with ESIC inspectors and respond on time."
                    },
                    {
                      title: "9. File Returns regularly",
                      desc: "File regular half-yearly returns showing employee contributions, salary figures, and active employer credits."
                    },
                    {
                      title: "10. Ensure Contractor Compliance",
                      desc: "If contract labour is engaged, the principal employer should ensure proper ESI compliance for eligible contract workers."
                    }
                  ].map((resp, id) => (
                    <div key={id} className="bg-slate-55 border border-slate-200 rounded-2xl p-5 hover:border-orange-300 transition-all hover:bg-orange-50/[0.02]">
                      <h4 className="font-bold text-[#3150A0] mb-2 text-sm">{resp.title}</h4>
                      <p className="text-slate-600 text-xs leading-relaxed">{resp.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 8. CONTRIBUTIONS */}
            {activeTab === 'contributions' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">ESI Contribution Rates</h2>
                </div>
                
                <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-orange-950 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    How is ESI Contribution Apportioned?
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Under the ESI scheme, both employer and employee contribute to ESIC. These rates are applied to covered employees as per ESIC rules.
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    <h4 className="font-bold text-slate-800 text-sm">The commonly applicable contribution rates are:</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="bg-white border border-slate-200 p-4 rounded-xl text-center">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Employer Contribution</span>
                        <div className="text-2xl font-black text-[#3150A0] mt-1">3.25%</div>
                        <span className="text-[10px] text-slate-400">of employee wages</span>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl text-center">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Employee Contribution</span>
                        <div className="text-2xl font-black text-orange-500 mt-1">0.75%</div>
                        <span className="text-[10px] text-slate-400">of employee wages</span>
                      </div>
                      <div className="bg-white border border-slate-200 p-4 rounded-xl text-center">
                        <span className="text-xs font-semibold text-slate-500 uppercase">Total Contribution</span>
                        <div className="text-2xl font-black text-emerald-600 mt-1">4.00%</div>
                        <span className="text-[10px] text-slate-400">of total employee wages</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm">Deduction Responsibility:</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The employer is solely responsible for deducting the employee’s contribution from wages and depositing both employee and employer shares within the prescribed due date. The exact calculation may depend on wages, employee eligibility, contribution period, and applicable ESIC rules.
                  </p>
                </div>
              </div>
            )}

            {/* 9. DIFFERENCES ESI VS PF */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileHeart className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Difference Between ESI & Related Registrations</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Here is the key breakdown to understand ESI compared to PF and Professional Tax:
                </p>

                <div className="space-y-6">
                  {/* ESI vs PF */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3">ESI Registration vs PF Registration</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-[#3150A0] mb-1">ESI Registration</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Related directly to employee medical care, sickness benefits, maternity protection, work injury disablement compensation, and medical infrastructure. Managed by <strong>ESIC</strong>.
                        </p>
                      </div>
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-orange-600 mb-1">PF Registration</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Related to provident fund, pension, retirement savings, and long-term old age wealth accumulation. Managed by <strong>EPFO</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ESI vs PT */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3">ESI Registration vs Professional Tax Registration</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-[#3150A0] mb-1">ESI Scheme</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Is a central social security system focused primarily on medical treatment safety nets and financial relief for low/mid salary ranges.
                        </p>
                      </div>
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-slate-900 mb-1">Professional Tax (PT)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Is a state-level tax compliance levied by State Governments on profession, trade, employment, and callings based on income slab rates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 10. FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">ESI Registration Frequently Asked Questions</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Check out these solutions to common queries concerning ESI employer eligibility, wages, cards, and compliances:
                </p>

                <div className="space-y-4">
                  {FAQS.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index} 
                        className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex justify-between items-center px-6 py-4 font-bold text-left text-slate-800 hover:text-orange-500 hover:bg-slate-50/50 transition-colors text-sm md:text-base cursor-pointer"
                        >
                          <span>{index + 1}. {faq.q}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform shrink-0 ${isOpen ? 'rotate-180 text-orange-500' : 'text-slate-400'}`} />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-5 pt-1 border-t border-slate-100 bg-slate-50/50 text-sm md:text-base text-slate-600 leading-relaxed">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Common mistakes */}
                <div className="bg-orange-50/50 border border-orange-200 rounded-2xl p-6 mt-8">
                  <h3 className="text-lg font-bold text-orange-950 mb-3 flex items-center gap-2">
                    <XOctagon className="w-5 h-5 text-orange-600 shrink-0" />
                    Common Mistakes to Avoid in ESI Registration
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    Employers often face approvals delays or subsequent audit queries. Keep these mistakes in check:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-xs text-slate-600 pl-4 list-disc">
                    <li>Applying after delays despite crossing employee threshold limit.</li>
                    <li>Incorrect establishment setup industrial activity category selection.</li>
                    <li>PAN profile data mismatch on name or dates.</li>
                    <li>Wrong entity classification on registering portal.</li>
                    <li>Incorrect active business address proofs.</li>
                    <li>Incorrect initial setup or commencement date entries.</li>
                    <li>Missing contract workers or casual workers count in employee numbers.</li>
                    <li>Uploading faint, blurred, or unclear business documents.</li>
                    <li>Not complying with monthly contributions and returns after securing a code.</li>
                    <li>Not maintaining proper work wage and daily attendance sheets.</li>
                  </ul>
                  <p className="text-xs font-semibold text-slate-800 mt-4 leading-relaxed bg-white border border-orange-100 rounded-xl p-3">
                    Professional assistance helps you avoid these compliance bottlenecks seamlessly.
                  </p>
                </div>

                {/* Delays in Time taken */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-6">
                  <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                    <Timer className="w-5 h-5 text-[#3150A0]" />
                    Time Taken for ESI Registration
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The time required for ESI Registration depends on document readiness, accuracy of information, portal verification, and approval speed. If documents are clear, registration goes smoothly. Delays typically happen due to PAN mismatches, address discrepancies, incomplete worker rosters, system failures, or wrong industrial categorizations.
                  </p>
                </div>
              </div>
            )}

            {/* 11. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for ESI Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  At <strong>MakeEazy</strong>, we provide end-to-end, seamless assistance for ESI Registration and post-registration compliance. Our professional team helps you fully understand applicability, prepare clear document sets, execute online registration smoothly, and avoid common compliance traps.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4">We assist with:</h3>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {[
                        "ESI applicability checklist assessment",
                        "Detailed employee information organization support",
                        "Authorized signatory resolution drafting",
                        "Online application and digital upload management",
                        "Getting the final ESIC employer code",
                        "Registering of workers under the ESI platform",
                        "E-sign or Digital signature solutions guidance",
                        "Monthly ESI challan deposit guidance",
                        "Compiling half-yearly returns & payroll checks",
                        "Advising on notices and audit coordination"
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-slate-55 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Service Packages Include:</h3>
                    <ul className="space-y-2.5 text-sm text-slate-700">
                      {[
                        "Preliminary consultation on ESI laws",
                        "Comprehensive portal draft preparation",
                        "Employee wage ceiling review audits",
                        "Employer portal login activation support",
                        "Post-registration compliance manuals",
                        "Prompt monthly updates on due dates",
                        "Integrated help and support for related labour laws (PF, PT)"
                      ].map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <Check className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-[#3150A0] text-white p-8 rounded-3xl mt-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Get ESI Registration with MakeEazy</h3>
                  <p className="text-slate-200 text-sm max-w-2xl mx-auto mb-6 leading-relaxed">
                    If your business has reached the ESI applicability threshold or you want to provide high-quality medical and social benefits to your employees, MakeEazy is here to complete your ESI Registration quickly and smoothly.
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
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to provide comprehensive medical and social benefits to your employees?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for ESI Registration with MakeEazy</span>
                <HeartPulse className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
