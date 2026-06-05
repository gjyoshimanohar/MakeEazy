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
  Timer
} from 'lucide-react';

const SECTIONS = [
  { id: 'overview', name: 'Overview & What is EPF', icon: Briefcase },
  { id: 'applicability', name: 'Who Needs & Applicability', icon: Users },
  { id: 'benefits', name: 'Key Benefits (10 Points)', icon: Sparkles },
  { id: 'documents', name: 'Documents Required', icon: FileText },
  { id: 'process', name: 'Registration Process', icon: Layers },
  { id: 'responsibilities', name: 'Employer Responsibilities', icon: FileBadge },
  { id: 'contributions', name: 'PF Contribution & UAN', icon: Scale },
  { id: 'differences', name: 'PF vs ESIC & PT', icon: FileHeart },
  { id: 'faqs', name: 'Common Issues & FAQs', icon: HelpCircle },
  { id: 'why-makeeazy', name: 'Why Choose MakeEazy', icon: ShieldCheck }
];

export default function PfRegistrationPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: "What is PF Registration?",
      a: "PF Registration is the process of registering an establishment with EPFO for provident fund compliance under the Employees’ Provident Fund and Miscellaneous Provisions Act, 1952."
    },
    {
      q: "Who needs PF Registration?",
      a: "Establishments employing 20 or more employees generally need PF Registration, subject to applicability under the EPF Act."
    },
    {
      q: "Is PF Registration mandatory?",
      a: "Yes, PF Registration is mandatory for establishments covered under the EPF Act."
    },
    {
      q: "Can a company with fewer than 20 employees apply for PF Registration?",
      a: "Yes, an establishment with fewer than 20 employees may apply for voluntary PF Registration, subject to applicable conditions."
    },
    {
      q: "What is EPFO?",
      a: "EPFO stands for Employees’ Provident Fund Organisation. It is the government organisation that manages provident fund, pension, and related social security schemes for employees."
    },
    {
      q: "What is UAN?",
      a: "UAN stands for Universal Account Number. It is a unique number allotted to employees covered under EPF."
    },
    {
      q: "What documents are required for PF Registration?",
      a: "Common documents include PAN, business registration proof, address proof, bank details, authorised signatory details, employee details, and DSC or e-sign details, if required."
    },
    {
      q: "What happens after PF Registration?",
      a: "After registration, the employer must enrol employees, deduct and deposit PF contributions, file monthly ECR, maintain records, and comply with EPFO requirements."
    },
    {
      q: "Is PF Registration the same as ESIC Registration?",
      a: "No. PF Registration is for provident fund and retirement benefits, while ESIC Registration is for employee medical and insurance benefits."
    },
    {
      q: "What is the due date for PF payment?",
      a: "Employers must deposit PF contributions within the prescribed due date under EPFO rules. Businesses should maintain a monthly compliance calendar to avoid delay."
    },
    {
      q: "Can PF Registration be cancelled?",
      a: "PF Registration cannot be casually cancelled. Closure, non-operation, merger, or other special cases may require proper application and compliance with EPFO procedures."
    },
    {
      q: "Can MakeEazy help with PF Registration?",
      a: "Yes. MakeEazy provides complete assistance for PF Registration, including applicability check, documentation, online filing support, employer portal guidance, and post-registration compliance support."
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
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-orange-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/10">
                <ShieldCheck className="w-3.5 h-3.5" />
                EPFO Registration & Compliance Scheme
              </div>
              <h1 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                PF Registration (EPF)
              </h1>
              <p className="text-slate-200 text-base md:text-lg mt-4 leading-relaxed font-normal">
                Commonly known as <strong className="text-white font-bold">EPF Registration</strong> or <strong className="text-white font-bold">EPFO Employer Registration</strong>, it is an important statutory registration for employers in India required under the <strong className="text-white font-bold">Employees’ Provident Fund and Miscellaneous Provisions Act, 1952</strong>.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
              <Briefcase className="w-12 h-12 md:w-16 md:h-16 text-orange-400 animate-pulse" />
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
                  <Briefcase className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">What is PF Registration (EPF)?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  PF Registration, also known as <span className="font-bold text-slate-900">EPF Registration</span> or <span className="font-bold text-slate-900">EPFO Employer Registration</span>, is an important statutory registration for employers in India. It is required for establishments covered under the <span className="font-bold text-slate-900">Employees’ Provident Fund and Miscellaneous Provisions Act, 1952</span>.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  PF stands for <span className="font-semibold text-slate-950">Provident Fund</span>. It is a social security scheme that helps employees build long-term savings for retirement and financial security. Under this scheme, both the employer and the employee contribute a portion of the employee’s salary to the employee’s provident fund account.
                </p>

                <p className="text-slate-700 leading-relaxed">
                  PF Registration is managed by the <span className="font-bold text-[#3150A0]">Employees’ Provident Fund Organisation (EPFO)</span>, under the Ministry of Labour and Employment, Government of India.
                </p>

                <p className="text-slate-700 leading-relaxed bg-[#3150A0]/5 border border-blue-50 p-4 rounded-xl">
                  At <strong className="text-slate-900">MakeEazy</strong>, we assist businesses, startups, factories, shops, service providers, contractors, and other establishments with complete PF Registration support, documentation, online application assistance, employee coverage guidance, and post-registration compliance support.
                </p>



                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-orange-500" />
                      What is PF Registration Process?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      It is the process through which an employer registers its establishment with EPFO. After successful registration, the employer receives a PF establishment code or login credentials, which are used for managing provident fund compliance.
                    </p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      What is Employees' Provident Fund (EPF)?
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      EPF is a savings and retirement benefit scheme for employees. Under EPF, a part of the employee's salary is contributed every month to the employee's PF account alongside the employer's contribution. The accumulated amount helps employees build savings.
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
                  <h2 className="text-2xl font-bold text-[#3150A0]">Who Needs PF Registration? & Applicability</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed font-medium">
                  PF Registration is generally mandatory for establishments that employ <strong className="text-orange-600 text-lg">20 or more employees</strong>, subject to the provisions of the EPF Act and applicable notifications.
                </p>

                <div className="mt-6">
                  <h4 className="font-bold text-slate-900 mb-4 text-base">The following types of establishments may require PF Registration:</h4>
                  <div className="grid md:grid-cols-2 gap-3 text-slate-700 text-sm">
                    {[
                      "Private limited companies",
                      "Limited Liability Partnerships (LLPs)",
                      "Partnership firms",
                      "Proprietorship concerns",
                      "Factories",
                      "Shops and commercial establishments",
                      "Service providers",
                      "Contractors",
                      "Manpower supply agencies",
                      "Security agencies",
                      "Hospitals and clinics",
                      "Schools and educational institutions",
                      "Hotels and restaurants",
                      "IT and software companies",
                      "Manufacturing units",
                      "Trading businesses",
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
                    Note: The applicability depends on the number of employees, nature of business, and whether the establishment is covered under the EPF Act.
                  </p>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-[#3150A0] mb-4">PF Registration Applicability Segments</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "1. Establishments Having 20 or More Employees",
                        desc: "PF Registration is generally mandatory for establishments employing 20 or more persons."
                      },
                      {
                        title: "2. Factories Covered Under the EPF Act",
                        desc: "Factories engaged in industries specified under the EPF Act may be covered if they meet the applicable employee threshold."
                      },
                      {
                        title: "3. Establishments Notified by the Government",
                        desc: "Certain establishments may be notified for EPF coverage by the government, even depending on the nature of business and applicable rules."
                      },
                      {
                        title: "4. Voluntary PF Registration",
                        desc: "An establishment with fewer than 20 employees may also apply for voluntary PF registration, subject to applicable conditions and approval. Once voluntarily registered, the establishment is generally required to comply with PF rules like a covered establishment."
                      },
                      {
                        title: "5. Continued Applicability",
                        desc: "Once an establishment is covered under EPF, it generally continues to remain covered even if the number of employees later falls below the prescribed threshold."
                      }
                    ].map((sec, i) => (
                      <div key={i} className="bg-orange-50/20 border border-orange-100 rounded-xl p-4">
                        <h4 className="font-bold text-slate-900 mb-1 text-sm">{sec.title}</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{sec.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mt-6">
                  <h4 className="font-bold text-red-950 text-base mb-2 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
                    Is PF Registration Mandatory?
                  </h4>
                  <p className="text-sm text-red-900 leading-relaxed mb-2">
                    Yes, PF Registration is mandatory for establishments covered under the EPF Act. Generally, establishments employing 20 or more employees must register with EPFO and comply with PF contribution and filing requirements.
                  </p>
                  <p className="text-sm font-semibold text-red-950">
                    Failure to obtain PF Registration after becoming eligible may lead to penalties, interest, damages, inspection, recovery proceedings, and other legal consequences.
                  </p>
                </div>
              </div>
            )}

            {/* 3. KEY BENEFITS */}
            {activeTab === 'benefits' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Sparkles className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Key Benefits of PF Registration (10 Points)</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  PF Registration provides immense benefits to both employers and employees alike, raising brand credibility and ensuring welfare.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      num: "1",
                      title: "Legal Compliance",
                      desc: "PF Registration helps employers comply with the EPF Act and avoid substantial legal penalties, interests, and prosecutions."
                    },
                    {
                      num: "2",
                      title: "Employee Social Security",
                      desc: "Employees receive secured, long-term savings and stable retirement benefits through regular monthly PF contributions."
                    },
                    {
                      num: "3",
                      title: "Pension Benefits",
                      desc: "Eligible employees may receive lifelong pension benefits under the Employees’ Pension Scheme (EPS), subject to rules."
                    },
                    {
                      num: "4",
                      title: "Insurance Benefits",
                      desc: "Employees may be covered under employee deposit-linked insurance benefits (EDLI), providing robust safety networks."
                    },
                    {
                      num: "5",
                      title: "Employee Trust & Retention",
                      desc: "Providing statutory PF benefits improves employee confidence, working environment satisfaction, and retention."
                    },
                    {
                      num: "6",
                      title: "Organised Payroll Compliance",
                      desc: "PF Registration streamlines businesses, helping them maintain clean, organized payroll and statutory compliance records."
                    },
                    {
                      num: "7",
                      title: "Business Credibility",
                      desc: "PF registration improves the credentials and integrity of the employer before employees, clients, auditors, and departments."
                    },
                    {
                      num: "8",
                      title: "Required for Tenders & Contracts",
                      desc: "Many major departments, private contracts, and corporate vendor listings mandate PF registration and compliance proofs to apply."
                    },
                    {
                      num: "9",
                      title: "Easy Online Compliance",
                      desc: "EPFO provides highly streamlined online systems for swift contribution payments, ECR filing, UAN management, and KYC."
                    },
                    {
                      num: "10",
                      title: "Workforce Welfare Focus",
                      desc: "PF directly aids employees in building reliable emergency corpuses, safety cushions, and securing their future familial interests."
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

            {/* 4. DOCUMENTS REQUIRED */}
            {activeTab === 'documents' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileText className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Documents Required for PF Registration</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  The documents required for PF Registration vary depending on the business entity. Complete and accurate documentation ensures smooth portal setup and code generation.
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
                        "Certificate of Incorporation, partnership deed, LLP agreement, or shop & establishment certificate",
                        "GST registration certificate, if available",
                        "Address proof of the establishment",
                        "Electricity bill, rent agreement, lease deed, or property tax receipt",
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
                        "PAN card of proprietor, partner, director, trustee, or signatory",
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
                        "Salary details",
                        "Aadhaar details",
                        "PAN details, if available",
                        "Bank account details",
                        "Mobile number",
                        "UAN details, if already available"
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
                        "ESIC registration",
                        "Shops and Establishment registration",
                        "Partnership deed (for joint firms)",
                        "Trust deed or society registration certificate",
                        "Memorandum (MOA) and Articles of Association (AOA)",
                        "Commencement date proof",
                        "Wage register or salary sheet / Attendance register"
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

            {/* 5. REGISTRATION PROCESS */}
            {activeTab === 'process' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Layers className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Step-by-Step PF Registration Process</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  PF Registration is completed fully online through the EPFO employer registration system or the Unified Shram Suvidha platform. Here is the step-by-step procedure:
                </p>

                <div className="relative border-l-2 border-slate-200 pl-6 ml-4 space-y-8 text-left">
                  {[
                    {
                      step: "Step 1",
                      title: "Check PF Applicability",
                      desc: "The first step is to check whether the establishment is required to register under EPFO. This includes reviewing employee count, business activity, entity type, and applicable coverage rules."
                    },
                    {
                      step: "Step 2",
                      title: "Collect Required Documents",
                      desc: "The employer must collect all business documents, authorised signatory details, employee rosters, bank account details, and core establishment setup credentials."
                    },
                    {
                      step: "Step 3",
                      title: "Create Login on the Portal",
                      desc: "The employer or authorised person creates a setup login on the relevant online portal/Unified Shram Suvidha platform for new establishment registration."
                    },
                    {
                      step: "Step 4",
                      title: "Fill Establishment Details",
                      desc: "The application form requires entering Name of establishment, Address, Date of setup, PAN, Ownership type, Nature of business, Contact details, Bank details, Employer details, and Branch/unit details if any."
                    },
                    {
                      step: "Step 5",
                      title: "Enter Employer and Authorised Person Details",
                      desc: "Details of the proprietor, partner, director, designated partner, trustee, or authorised signatory are accurately entered in the application fields."
                    },
                    {
                      step: "Step 6",
                      title: "Enter Employee Details",
                      desc: "The employer is required to provide the current employee strength and employees' personal and wage-related details for statutory PF coverage eligibility."
                    },
                    {
                      step: "Step 7",
                      title: "Upload Documents",
                      desc: "The list of required electronic documents is uploaded in the prescribed format. All fields and details must precisely match the supporting documentation."
                    },
                    {
                      step: "Step 8",
                      title: "Digital Signature or e-Sign Verification",
                      desc: "The application requires verification through a Digital Signature Certificate (DSC), Aadhaar-based e-sign, or other approved online verification protocols."
                    },
                    {
                      step: "Step 9",
                      title: "Submit Application",
                      desc: "After thoroughly reviewing each entry, the completed digital application is formally submitted online for department assessment."
                    },
                    {
                      step: "Step 10",
                      title: "Generation of PF Establishment Code",
                      desc: "Following successful verification and portal approval, the establishment receives its distinct PF establishment code or registration certificate. This code is used for all future PF compliance."
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

            {/* 6. EMPLOYER RESPONSIBILITIES */}
            {activeTab === 'responsibilities' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileBadge className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">After PF Registration: Employer Responsibilities</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed font-semibold">
                  PF compliance does not end after registration. Once registered, the employer must regularly comply with EPFO requirements under statutory timelines:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    {
                      title: "1. Enrol Eligible Employees",
                      desc: "The employer must enrol eligible employees under PF and link their pre-existing UAN (Universal Account Number), if available."
                    },
                    {
                      title: "2. Generate UAN for New Employees",
                      desc: "For employees who do not have a UAN, the employer must generate a new UAN through the EPFO portal."
                    },
                    {
                      title: "3. Deduct Employee Contribution",
                      desc: "The employer must deduct the employee’s PF contribution from salary as per the applicable statutory rules."
                    },
                    {
                      title: "4. Deposit Employer Contribution",
                      desc: "The employer must contribute its own corresponding share along with the employee’s share to the bank."
                    },
                    {
                      title: "5. File Monthly ECR",
                      desc: "The employer must file the monthly Electronic Challan cum Return, commonly known as ECR, specifying monthly wages and deductions."
                    },
                    {
                      title: "6. Pay PF Challan",
                      desc: "The total compiled PF contribution must be deposited through the bank portal within the prescribed monthly due dates."
                    },
                    {
                      title: "7. Maintain Records",
                      desc: "The employer should systematically maintain salary records, attendance registers, employee rosters, and contribution receipts."
                    },
                    {
                      title: "8. Update Employee KYC",
                      desc: "Employee KYC details such as Aadhaar, PAN, and bank accounts should be regularly updated and verified on the portal."
                    },
                    {
                      title: "9. Handle Employee Exits",
                      desc: "When an employee leaves, the employer must promptly update the exit date and complete all leaving PF formalities."
                    },
                    {
                      title: "10. Respond to EPFO Notices",
                      desc: "If any notice, inquiry, or query is received from EPFO, the employer must respond with proofs within the prescribed time limit."
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

            {/* 7. CONTRIBUTIONS AND UAN */}
            {activeTab === 'contributions' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Scale className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">PF Contribution Structure & UAN</h2>
                </div>
                
                <div className="bg-orange-50/40 border border-orange-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-orange-950 mb-3 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-500" />
                    How is PF Contribution Scheduled?
                  </h3>
                  <p className="text-slate-705 text-sm leading-relaxed mb-4">
                    Under the EPF scheme, both employer and employee contribute to the provident fund. The contribution is generally calculated on the employee’s basic wages and dearness allowance, subject to statutory limits.
                  </p>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-bold text-slate-800 text-sm">Typical components under the contribution structure include:</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span>Employee’s PF contribution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span>Employer’s PF contribution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span>Pension contribution, where applicable</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span>Administrative charges, if applicable</span>
                      </li>
                      <li className="flex items-center gap-2 col-span-2">
                        <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></span>
                        <span>Other statutory components as prescribed by EPFO</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <h3 className="text-xl font-bold text-[#3150A0] mb-4">UAN (Universal Account Number) in PF</h3>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    <strong>UAN stands for Universal Account Number</strong>. It is a unique 12-digit number allotted to every employee covered under EPF. It acts as a single account umbrella for multiple member IDs issued by different employers.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                        <Users className="w-4.5 h-4.5 text-[#3150A0]" />
                        Importance for Employees
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        UAN helps employees manage their PF accounts online, check real-time balances, update personal KYC, easily transfer PF from previous jobs, withdraw PF, and seamlessly access online EPFO helpdesk services.
                      </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                      <h4 className="font-bold text-slate-900 mb-2 text-sm flex items-center gap-2">
                        <Building className="w-4.5 h-4.5 text-orange-500" />
                        Importance for Employers
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        For employers, UAN is highly important for onboarding new employees, filing error-free monthly retuns, KYC approvals, managing employee exit entries, executing PF claim transfers, and preserving clean records.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 8. PF VS ESIC & PT */}
            {activeTab === 'differences' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <FileHeart className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Difference Between PF & Related Registrations</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-4">
                  Many businesses confuse PF with ESIC and Professional Tax. While they are all statutory employer compliance registrations, they serve entirely different goals:
                </p>

                <div className="space-y-6">
                  {/* PF vs ESIC */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3">PF Registration vs ESIC Registration</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-[#3150A0] mb-1">PF (Provident Fund)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Relates to retirement savings, pensions, social security, and long-term earnings. It is managed centrally by the <strong>EPFO</strong>.
                        </p>
                      </div>
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-orange-600 mb-1">ESIC (Employee State Insurance)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Relates to medical benefits, sickness leaves, maternity relief, disabled safety nets, and hospital care. Managed by the <strong>ESIC</strong>.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* PF vs Professional Tax */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-[#3150A0] mb-3">PF Registration vs Professional Tax Registration</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-[#3150A0] mb-1">PF (Provident Fund)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Is a central retirement fund benefit system safeguarding employee social welfare and old age interests across India.
                        </p>
                      </div>
                      <div className="bg-white border border-slate-150 p-4 rounded-xl">
                        <h4 className="font-bold text-[#3150A0] mb-1">Professional Tax (PT)</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Is a state-level tax levied on professions, trades, employments, and callings. Laws vary by state, and it is governed by state tax boards.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 9. FAQS */}
            {activeTab === 'faqs' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <HelpCircle className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">PF Registration Frequently Asked Questions</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed mb-6">
                  Find fast answers to common doubts in employer EPF Registration, mandatory rules, timelines, and compliance structures:
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
                    <XOctagon className="w-5 h-5 text-orange-600" />
                    Common Mistakes to Avoid in PF Registration
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-2 leading-relaxed">
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Applying after delay despite crossing the employee strength threshold.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Incorrect establishment name or PAN card mismatches.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Wrong entity type or business activity/address details selected on portal.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Incomplete employee rosters or incorrect date of setup.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Not keeping authorized Digital Signature Certificate (DSC) or Aadhaar-linked e-sign facilities ready.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-600 font-bold">•</span>
                      <span>Not maintaining clean payroll records or failing to file monthly ECR return checks under PF.</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 10. WHY CHOOSE MAKEEAZY */}
            {activeTab === 'why-makeeazy' && (
              <div className="space-y-6 animate-fadeIn text-left">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <ShieldCheck className="w-6 h-6 text-[#3150A0]" />
                  <h2 className="text-2xl font-bold text-[#3150A0]">Why Choose MakeEazy for PF Registration?</h2>
                </div>
                
                <p className="text-slate-700 leading-relaxed">
                  PF Registration can be complex, involving portal entries, signature links, and precise document formats. At <strong className="text-slate-900">MakeEazy</strong>, we offer end-to-end Assistance for PF setup and monthly compliant return services.
                </p>

                <div className="bg-[#3150A0]/5 border border-blue-100 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-[#3150A0] mb-4">Our Complete End-to-End Assistances:</h3>
                  <ul className="grid md:grid-cols-2 gap-3 text-sm text-slate-705">
                    {[
                      "PF applicability and threshold check",
                      "Document checklist preparation & sorting",
                      "Employee details and wage structure preparation",
                      "Epfo portal establishment registration support",
                      "Authorised signatory & DSC guidance",
                      "e-Sign setup assistance",
                      "PF establishment code and certificate support",
                      "UAN generation & employee onboarding guidance",
                      "Monthly PF compliance and ECR advisory",
                      "PF return filing and payments due date tracking",
                      "Notice responses & department correction support"
                    ].map((item, key) => (
                      <li key={key} className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-orange-500 text-white rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 shadow-lg">
                  <div className="text-left">
                    <h3 className="font-display text-2xl font-bold mb-2">Get Started with PF Registration</h3>
                    <p className="text-sm text-orange-55 max-w-xl">
                      Make your business fully compliant today. Let MakeEazy handle your EPF codes, paperwork, employee rosters, and monthly challans smoothly.
                    </p>
                  </div>
                  <button className="bg-white text-orange-600 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-orange-50 active:scale-95 transition-all shadow-md shrink-0 cursor-pointer">
                    Connect an Expert
                  </button>
                </div>
              </div>
            )}

            {/* Bottom Register Action */}
            <div className="pt-8 mt-10 text-center flex flex-col items-center border-t border-slate-100">
              <h3 className="font-bold text-slate-850 text-base mb-3 text-center">Ready to structure your employee benefits and provident fund registrations?</h3>
              <a 
                href="https://desk.makeeazy.in/login" target="_blank" rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-orange-500/25 active:scale-95 inline-flex items-center justify-center gap-2 group"
              >
                <span>Apply for PF Registration with MakeEazy</span>
                <Briefcase className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
