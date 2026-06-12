import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUp,
  ArrowRight,
  Award,
  Briefcase,
  Calculator,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  FileText,
  Instagram,
  Landmark,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Percent,
  Phone,
  Rocket,
  Send,
  ShieldCheck,
  Scale,
  PieChart,
  Target,
  Users,
  X,
  Star,
  Quote,
  Calendar,
  AlertCircle,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import BusinessHealthScore from "./BusinessHealthScore";
import Calculators from "./Calculators";
import GstLateFeeCalculator from "./GstLateFeeCalculator";
import TdsLateFeeCalculator from "./TdsLateFeeCalculator";
import TdsInterestCalculator from "./TdsInterestCalculator";
import HraCalculator from "./HraCalculator";
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import StartupPage from "./StartupPage";
import StartupIndiaPage from "./StartupIndiaPage";
import IcegatePage from "./IcegatePage";
import ImportExportCodePage from "./ImportExportCodePage";
import PfRegistrationPage from "./PfRegistrationPage";
import EsiRegistrationPage from "./EsiRegistrationPage";
import UdyamRegistrationPage from "./UdyamRegistrationPage";
import TrademarkRegistrationPage from "./TrademarkRegistrationPage";
import LeiRegistrationPage from "./LeiRegistrationPage";
import ProfessionalTaxPage from "./ProfessionalTaxPage";
import ShopEstablishmentPage from "./ShopEstablishmentPage";
import TradeLicensePage from "./TradeLicensePage";
import FssaiLicensePage from "./FssaiLicensePage";
import SoleProprietorshipPage from "./SoleProprietorshipPage";
import PartnershipFirmPage from "./PartnershipFirmPage";
import LimitedLiabilityPartnershipPage from "./LimitedLiabilityPartnershipPage";
import OnePersonCompanyPage from "./OnePersonCompanyPage";
import PrivateLimitedCompanyPage from "./PrivateLimitedCompanyPage";
import PublicLimitedCompanyPage from "./PublicLimitedCompanyPage";
import SectionEightCompanyPage from "./SectionEightCompanyPage";
import TrustOrSocietyPage from "./TrustOrSocietyPage";
import ForeignCompanyPage from "./ForeignCompanyPage";
import CompliancesPage from "./CompliancesPage";
import CareersPage from "./CareersPage";
import UnderConstructionPage from "./UnderConstructionPage";
import OtherRegistrationPage from "./OtherRegistrationPage";
import AdvisoryPage from "./AdvisoryPage";
import LegalAndDocumentationPage from "./LegalAndDocumentationPage";
import TermsPage from "./TermsPage";
import BlogPage from "./BlogPage";
import BlogAdminPage from "./BlogAdminPage";
import BlogArticlePage from "./BlogArticlePage";
import EmployeePortalPage from "./EmployeePortalPage";

const TESTIMONIALS = [
  {
    name: "Sonia Patel",
    role: "CEO, TechFlow Solutions",
    content:
      "MakeEazy completely handled our complex GST issues and compliance audits. Their proactive approach saved us penalties and gave us total peace of mind.",
    rating: 5,
  },
  {
    name: "Ravi Shankar",
    role: "Founder, GreenLeaf Retail",
    content:
      "The expertise of the MakeEazy team in ROC matters is unmatched. They streamlined our annual filings and provided fantastic consultancy.",
    rating: 5,
  },
  {
    name: "Ananya Desai",
    role: "Director, BuildCorp",
    content:
      "We moved our entire accounting over to MakeEazy. They are responsive, deeply knowledgeable, and our financial health has never been better tracked.",
    rating: 5,
  },
];

const SERVICES = [
  {
    title: "Startup",
    description:
      "Launch your dream business with complete registration and setup.",
    icon: Rocket,
    href: "/startup",
  },
  {
    title: "Compliances",
    description:
      "Stay ahead of regulations with our end-to-end compliance management.",
    icon: ShieldCheck,
    href: "/compliances",
  },
  {
    title: "Advisory services",
    description:
      "Expert financial, tax, and strategic advisory for your business growth.",
    icon: PieChart,
    href: "/advisory",
  },
  {
    title: "Other Registration",
    description:
      "Hassle-free procurement of necessary licenses and varied registrations.",
    icon: FileText,
    href: "/other-registration",
  },
  {
    title: "Legal and Documentation",
    description:
      "Robust legal support, contract drafting, and comprehensive documentation.",
    icon: Scale,
    href: "/legal",
  },
];

interface NavDropdownItem {
  name: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  name: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/home" },
  {
    name: "Services",
    dropdown: [
      { name: "Startup", href: "/startup" },
      { name: "Compliances", href: "/compliances" },
      { name: "Advisory services", href: "/advisory" },
      { name: "Other Registration", href: "/other-registration" },
      { name: "Legal and Documentation", href: "/legal" },
    ],
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Knowledge Hub", href: "/blogs" },
      { name: "Calculators", href: "/calculators" },
      { name: "FAQs", href: "/faq" },
      { name: "Downloads", href: "/downloads" },
      { name: "Other Resources", href: "/other-resources" },
    ],
  },
  {
    name: "About",
    dropdown: [
      { name: "About Us", href: "/about-us" },
      { name: "Careers", href: "/careers" },
      { name: "Contact Us", href: "/contact-us" },
    ],
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="/"
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer relative"
            aria-label="MakeEazy Home"
          >
            <img
              src="/logo.png"
              alt="Make Eazy Logo"
              className="h-14 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                target.parentElement
                  ?.querySelector(".fallback-text")
                  ?.classList.remove("hidden");
              }}
            />
            <div className="fallback-text hidden flex items-center gap-1">
              <span className="font-display font-bold text-2xl tracking-tight text-blue-900">
                Make
              </span>
              <span className="font-display font-bold text-2xl tracking-tight text-orange-500">
                Eazy
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors py-8"
                    aria-label={`Toggle ${item.name} menu`}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-orange-500 transition-colors py-8 inline-block"
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                )}

                {item.dropdown && (
                  <div className="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 bg-white shadow-xl rounded-xl border border-slate-100 p-2">
                    <div className="flex flex-col">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem.name}
                          href={dropItem.href}
                          target={dropItem.external ? "_blank" : undefined}
                          rel={
                            dropItem.external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                          aria-label={`Navigate to ${dropItem.name}`}
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95"
              aria-label="Book an Appointment"
            >
              Book Appointment
            </button>
            <a
              href="https://desk.makeeazy.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3150A0] hover:bg-[#243d7d] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 inline-block text-center"
              aria-label="Client Portal (opens in a new tab)"
            >
              Client Portal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
              aria-label={
                isOpen
                  ? "Close main navigation menu"
                  : "Open main navigation menu"
              }
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-b border-slate-200 px-4 sm:px-6 pt-2 pb-6 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="flex flex-col space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.name ? null : item.name,
                        )
                      }
                      className="flex items-center justify-between text-base font-medium text-slate-600 hover:text-orange-500 py-2"
                      aria-label={`Toggle ${item.name} dropdown menu`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${mobileDropdown === item.name ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileDropdown === item.name && (
                      <div className="flex flex-col pl-4 space-y-3 mt-2 border-l-2 border-slate-100">
                        {item.dropdown.map((dropItem) => (
                          <a
                            key={dropItem.name}
                            href={dropItem.href}
                            target={dropItem.external ? "_blank" : undefined}
                            rel={
                              dropItem.external
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-sm font-medium text-slate-500 hover:text-orange-500"
                            onClick={() => setIsOpen(false)}
                            aria-label={`Navigate to ${dropItem.name}`}
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-base font-medium text-slate-600 hover:text-orange-500 py-2"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.name}`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="flex gap-3 mt-4">
              <button
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 text-center"
                aria-label="Book an Appointment"
              >
                Book Appointment
              </button>
              <a
                href="https://desk.makeeazy.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#3150A0] hover:bg-[#243d7d] text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow-md active:scale-95 text-center"
                aria-label="Client Portal (opens in a new tab)"
              >
                Client Portal
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function TopRightCountdown() {
  return (
    <div className="flex relative md:absolute md:top-28 lg:top-36 md:right-8 lg:right-12 xl:right-16 flex-col items-start gap-3 z-30 px-4 md:px-0 mb-8 md:mb-0 w-full md:w-auto order-2 md:order-none">
      <div className="inline-flex items-center justify-center gap-2 bg-[#e8edfc] px-5 py-2.5 rounded-full text-[13px] sm:text-[15px] font-semibold text-[#3150A0] shadow-sm border border-transparent">
        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
        AY 2026-27 | FY 2025-26 Filing Season
      </div>
      <a
        href="https://desk.makeeazy.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-auto flex-col items-center justify-center gap-1 bg-[#FFFaf5] hover:bg-[#fff5eb] border border-orange-200 hover:border-orange-300 px-5 py-3 rounded-2xl shadow-sm text-center transition-all hover:shadow-md active:scale-95 group cursor-pointer"
      >
        <div className="flex items-center justify-center gap-1.5">
          <span className="text-base">⌛</span>
          <span className="font-extrabold text-[#ea580c] text-[15px] leading-tight group-hover:text-orange-600">
            68 Days left to File your ITR
          </span>
        </div>
        <span className="text-slate-500 text-xs font-semibold">
          Deadline: July 31, 2026
        </span>
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="pt-24 pb-6 lg:pt-32 lg:pb-10 overflow-hidden bg-slate-50 relative flex flex-col md:block"
    >
      <TopRightCountdown />
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full order-1 md:order-none">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              Your Trusted Compliance Partner
            </div>
            <h1 className="font-display text-[44px] md:text-[50px] lg:text-6xl font-extrabold text-[#3150A0] leading-[44px] md:leading-[1.1] lg:leading-[1.1] tracking-tight mb-6">
              <span className="inline-block whitespace-nowrap">
                Hi, Welcome to
              </span>{" "}
              <br />
              <span className="text-orange-500">MakeEazy</span>
            </h1>
            <p className="text-[16px] md:text-lg text-slate-600 mb-8 max-w-xl leading-[22.5px] md:leading-normal text-justify">
              We support Entrepreneurs from Start to Finish with our Expert
              services in Audit, Accountancy, Taxation, and compliance. Focus on
              your vision while we manage your business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="/services"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-semibold transition-all flex items-center justify-center"
              >
                Explore our Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-slate-900">
                  5+
                </span>
                <span>Years Experience</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-slate-900">
                  500+
                </span>
                <span>Clients Empowered</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-slate-900">
                  15+
                </span>
                <span>Expert Professional Team</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side Visual/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center w-full mt-8 lg:mt-0"
          >
            {/* Doodle Services SlideShare Component */}
            <DoodleServicesSlideShare />

            {/* Decorative dynamic blurs matched with compliance gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-orange-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Interactive doodle-style SlideShare for all the services
const SLIDES = [
  {
    id: "taxation",
    title: "Income Tax & Corporate filing",
    subtitle:
      "Streamline detailed GST audits, ITR filings, and customized computational books.",
    color: "from-orange-500 to-red-500",
    illustrations: (
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md"
      >
        <circle cx="250" cy="200" r="150" stroke="#FFEFE2" strokeWidth="3" />
        <circle
          cx="250"
          cy="200"
          r="110"
          stroke="#FFF7ED"
          strokeWidth="2"
          strokeDasharray="5 5"
        />

        <g
          transform="translate(170, 90)"
          filter="drop-shadow(0 15px 30px rgba(234,88,12,0.1))"
        >
          <rect
            width="160"
            height="195"
            rx="12"
            fill="white"
            stroke="#F97316"
            strokeWidth="3"
          />
          <rect width="160" height="30" rx="8" fill="#F97316" />
          <text
            x="80"
            y="19"
            textAnchor="middle"
            fontSize="11"
            fontWeight="bold"
            fill="white"
          >
            INCOME TAX RETURN
          </text>

          <g transform="translate(15, 50)">
            <text x="0" y="10" fontSize="9" fontWeight="bold" fill="#64748B">
              FY 2025-26 Status
            </text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#FFEFE2" />
            <rect x="0" y="18" width="105" height="6" rx="3" fill="#EA580C" />
          </g>
          <g transform="translate(15, 90)">
            <text x="0" y="10" fontSize="9" fontWeight="bold" fill="#64748B">
              ITR filing review
            </text>
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#D1FAE5" />
            <rect x="0" y="18" width="130" height="6" rx="3" fill="#10B981" />
          </g>
          <g transform="translate(15, 130)">
            <text x="0" y="10" fontSize="9" fontWeight="bold" fill="#64748B">
              Deductions
            </text>
            <text
              x="130"
              y="10"
              textAnchor="end"
              fontSize="10"
              fontWeight="extrabold"
              fill="#047857"
            >
              ₹46,200 saved
            </text>
            <line
              x1="0"
              y1="18"
              x2="130"
              y2="18"
              stroke="#E2E8F0"
              strokeWidth="1"
            />
          </g>
          <g transform="translate(100, 145)">
            <circle cx="15" cy="15" r="15" fill="#34D399" />
            <path
              d="M 9 15 L 13 19 L 21 11"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>

        <g
          transform="translate(45, 130)"
          filter="drop-shadow(0 6px 12px rgba(0,0,0,0.05))"
        >
          <rect
            width="90"
            height="135"
            rx="10"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <rect x="10" y="10" width="70" height="25" rx="4" fill="#1E293B" />
          <text
            x="70"
            y="27"
            textAnchor="end"
            fontSize="13"
            fontWeight="bold"
            fill="#34D399"
            fontFamily="monospace"
          >
            ₹ 84,500
          </text>
          <g transform="translate(10, 45)">
            <rect x="0" y="0" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="20" y="0" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="40" y="0" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="60" y="0" width="10" height="12" rx="2" fill="#FED7AA" />
            <rect x="0" y="20" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="20" y="20" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="40" y="20" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="60" y="20" width="10" height="12" rx="2" fill="#FED7AA" />
            <rect x="0" y="40" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="20" y="40" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="40" y="40" width="15" height="12" rx="2" fill="#E2E8F0" />
            <rect x="60" y="40" width="10" height="35" rx="2" fill="#F97316" />
            <rect x="0" y="60" width="35" height="15" rx="2" fill="#E2E8F0" />
            <rect x="40" y="60" width="15" height="15" rx="2" fill="#E2E8F0" />
          </g>
        </g>

        <g
          transform="translate(365, 120)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect
            width="90"
            height="110"
            rx="10"
            fill="white"
            stroke="#EA580C"
            strokeWidth="1.5"
          />
          <rect width="90" height="20" rx="4" fill="#EF4444" />
          <text
            x="45"
            y="14"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="white"
          >
            REGULATORY
          </text>
          <text
            x="45"
            y="50"
            textAnchor="middle"
            fontSize="24"
            fontWeight="extrabold"
            fill="#1E293B"
          >
            31
          </text>
          <text
            x="45"
            y="68"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#EF4444"
          >
            JULY DUE TIME
          </text>
          <rect x="15" y="80" width="60" height="15" rx="2" fill="#FEF3C7" />
          <text
            x="45"
            y="90"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#B45309"
          >
            ITR ON TIME
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: "compliance",
    title: "Compliance & Regulatory Support",
    subtitle:
      "End-to-end tax filings, audit trails, and automated regulatory review.",
    color: "from-blue-600 to-indigo-600",
    illustrations: (
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md"
      >
        {/* Background Orbits */}
        <circle
          cx="250"
          cy="200"
          r="140"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <circle cx="250" cy="200" r="185" stroke="#F1F5F9" strokeWidth="1.5" />
        <path
          d="M 120 120 Q 250 100 380 120 T 250 360 Z"
          stroke="#FDBA74"
          strokeWidth="2"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.6"
        />

        {/* Central circular banner */}
        <g filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))">
          <circle
            cx="250"
            cy="200"
            r="85"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <circle cx="250" cy="200" r="80" fill="url(#centerGrad)" />
          {/* Center Text */}
          <text
            x="250"
            y="190"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Compliance &
          </text>
          <text
            x="250"
            y="210"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="13"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Regulatory Support
          </text>
          {/* Tri-diamond delimiter */}
          <path d="M 235 228 L 240 225 L 245 228 L 240 231 Z" fill="#F97316" />
          <path d="M 245 228 L 250 225 L 255 228 L 250 231 Z" fill="#F97316" />
          <path d="M 255 228 L 260 225 L 265 228 L 260 231 Z" fill="#F97316" />
        </g>

        {/* Orbiting Documents / Badges matching reference illustration */}

        {/* 1. Tax Filing Doc (Top Left) */}
        <g
          transform="translate(80, 70)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            x="0"
            y="0"
            width="100"
            height="120"
            rx="10"
            fill="white"
            stroke="#FEF3C7"
            strokeWidth="2"
          />
          {/* Folded corner */}
          <path d="M 80 0 L 100 20 L 80 20 Z" fill="#FDE68A" />
          <text
            x="50"
            y="25"
            textAnchor="middle"
            fontSize="11"
            fontWeight="bold"
            fill="#1E3A8A"
          >
            TAX FILING
          </text>
          <g transform="translate(15, 42)">
            <circle cx="10" cy="10" r="7" fill="#D1FAE5" />
            <path
              d="M 7 10 L 9 12 L 13 8"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="24" y="7" width="45" height="5" rx="2.5" fill="#F1F5F9" />
          </g>
          <g transform="translate(15, 62)">
            <circle cx="10" cy="10" r="7" fill="#D1FAE5" />
            <path
              d="M 7 10 L 9 12 L 13 8"
              stroke="#10B981"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <rect x="24" y="7" width="45" height="5" rx="2.5" fill="#F1F5F9" />
          </g>
          <path
            d="M 25 100 Q 35 95 45 102 T 65 98"
            stroke="#3150A0"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <circle cx="85" cy="100" r="14" fill="#34D399" />
          <path
            d="M 79 100 L 83 104 L 91 96"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* 2. Simple TAX slip (Top Center) */}
        <g
          transform="translate(210, 20)"
          filter="drop-shadow(0 6px 12px rgba(0,0,0,0.04))"
        >
          <rect
            x="0"
            y="0"
            width="55"
            height="40"
            rx="5"
            fill="#FFFFFF"
            stroke="#FDBA74"
            strokeWidth="1"
          />
          <rect x="0" y="0" width="55" height="8" rx="2" fill="#FFEFE2" />
          <text
            x="27.5"
            y="22"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#EA580C"
          >
            TAX
          </text>
          <rect x="10" y="28" width="35" height="3" rx="1.5" fill="#E2E8F0" />
        </g>

        {/* 3. Audit Doc (Right Top) */}
        <g
          transform="translate(330, 60)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            x="0"
            y="0"
            width="95"
            height="115"
            rx="10"
            fill="white"
            stroke="#DBEAFE"
            strokeWidth="2"
          />
          <path d="M 75 0 L 95 20 L 75 20 Z" fill="#BFDBFE" />
          <text
            x="47.5"
            y="25"
            textAnchor="middle"
            fontSize="11"
            fontWeight="bold"
            fill="#1E3A8A"
          >
            AUDIT
          </text>
          <rect x="12" y="42" width="71" height="6" rx="2" fill="#DBEAFE" />
          <rect x="12" y="56" width="71" height="6" rx="2" fill="#F1F5F9" />
          <rect x="12" y="70" width="71" height="6" rx="2" fill="#F1F5F9" />
          <rect x="12" y="84" width="40" height="6" rx="2" fill="#F1F5F9" />
          <circle cx="75" cy="95" r="10" fill="#60A5FA" opacity="0.2" />
          <circle
            cx="75"
            cy="95"
            r="8"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            fill="none"
          />
        </g>

        {/* 4. Financial Analytics Chart (Right Bottom) */}
        <g
          transform="translate(350, 215)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            x="0"
            y="0"
            width="115"
            height="115"
            rx="12"
            fill="white"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <text
            x="57.5"
            y="20"
            textAnchor="middle"
            fontSize="11"
            fontWeight="extrabold"
            fill="#ea580c"
          >
            AUDIT
          </text>
          <g transform="translate(15, 30)">
            <rect x="5" y="25" width="8" height="30" rx="2" fill="#FED7AA" />
            <rect x="18" y="10" width="8" height="45" rx="2" fill="#F97316" />
            <rect x="31" y="20" width="8" height="35" rx="2" fill="#FED7AA" />
          </g>
          <circle cx="85" cy="60" r="18" fill="#E0F2FE" />
          <path d="M 85 60 L 85 42 A 18 18 0 0 1 103 60 Z" fill="#3B82F6" />
          <path d="M 85 60 L 103 60 A 18 18 0 0 1 85 78 Z" fill="#F97316" />
        </g>

        {/* 5. Service Slip (Middle Bottom) */}
        <g
          transform="translate(190, 310)"
          filter="drop-shadow(0 4px 8px rgba(0,0,0,0.045))"
        >
          <rect
            x="0"
            y="0"
            width="80"
            height="50"
            rx="6"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          <text
            x="40"
            y="20"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#64748B"
          >
            SERVICES
          </text>
          <line
            x1="15"
            y1="28"
            x2="65"
            y2="28"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="36"
            x2="50"
            y2="36"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* 6. Legal / Coniee checklist (Left Bottom) */}
        <g
          transform="translate(60, 225)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            x="0"
            y="0"
            width="95"
            height="115"
            rx="10"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <text
            x="47.5"
            y="22"
            textAnchor="middle"
            fontSize="11"
            fontWeight="bold"
            fill="#1E3A8A"
          >
            CHECKLIST
          </text>
          <g transform="translate(12, 38)">
            <rect x="0" y="0" width="10" height="10" rx="2" fill="#DBEAFE" />
            <path
              d="M 2 5 L 4 7 L 8 3"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <rect x="16" y="2" width="55" height="5" rx="2.5" fill="#E2E8F0" />
          </g>
          <g transform="translate(12, 56)">
            <rect x="0" y="0" width="10" height="10" rx="2" fill="#DBEAFE" />
            <path
              d="M 2 5 L 4 7 L 8 3"
              stroke="#2563EB"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <rect x="16" y="2" width="55" height="5" rx="2.5" fill="#E2E8F0" />
          </g>
          <g transform="translate(12, 74)">
            <rect x="0" y="0" width="10" height="10" rx="2" fill="#F3F4F6" />
            <rect x="16" y="2" width="40" height="5" rx="2.5" fill="#E2E8F0" />
          </g>
          <circle cx="75" cy="95" r="10" fill="#D1FAE5" />
          <path
            d="M 71 95 L 74 98 L 79 93"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        <circle cx="120" cy="200" r="3" fill="#F59E0B" />
        <circle cx="360" cy="180" r="3" fill="#F59E0B" />

        <defs>
          <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#3150A0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: "startup",
    title: "Startup Launch & MSME Setup",
    subtitle:
      "Hassle-free business incorporation, GST setups, and MSME recognitions.",
    color: "from-orange-500 to-amber-500",
    illustrations: (
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md"
      >
        <line
          x1="50"
          y1="200"
          x2="450"
          y2="200"
          stroke="#E2E8F0"
          strokeWidth="2"
          strokeDasharray="8 8"
        />
        <circle
          cx="250"
          cy="200"
          r="120"
          stroke="#DBEAFE"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Rocket doodle */}
        <g transform="translate(200, 110)">
          <ellipse
            cx="50"
            cy="160"
            rx="60"
            ry="15"
            fill="#E2E8F0"
            opacity="0.6"
          />
          <ellipse
            cx="50"
            cy="155"
            rx="40"
            ry="12"
            fill="#CBD5E1"
            opacity="0.8"
          />
          <path
            d="M 50 20 C 65 50 65 110 58 130 L 42 130 C 35 110 35 50 50 20 Z"
            fill="#F1F5F9"
            stroke="#94A3B8"
            strokeWidth="2"
          />
          <path
            d="M 50 20 C 58 35 55 50 50 50 C 45 50 42 35 50 20 Z"
            fill="#F97316"
          />
          <path d="M 38 105 L 20 135 L 38 130 Z" fill="#3150A0" />
          <path d="M 62 105 L 80 135 L 62 130 Z" fill="#3150A0" />
          <path d="M 50 115 L 50 130" stroke="#94A3B8" strokeWidth="2" />
          <path d="M 44 132 L 50 155 L 56 132 Z" fill="#F59E0B" />
          <path d="M 47 132 L 50 148 L 53 132 Z" fill="#EF4444" />
          <circle
            cx="50"
            cy="70"
            r="8"
            fill="#E0F2FE"
            stroke="#94A3B8"
            strokeWidth="1.5"
          />
          <circle cx="50" cy="70" r="5" fill="#38BDF8" />
        </g>

        {/* MSME details */}
        <g
          transform="translate(60, 60)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect
            width="90"
            height="110"
            rx="8"
            fill="white"
            stroke="#E2E8F0"
            strokeWidth="2"
          />
          <rect width="90" height="15" rx="4" fill="#FFF7ED" />
          <text
            x="45"
            y="11"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#EA580C"
          >
            MSME CERT
          </text>
          <line
            x1="15"
            y1="35"
            x2="75"
            y2="35"
            stroke="#E2E8F0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="50"
            x2="75"
            y2="50"
            stroke="#E2E8F0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <line
            x1="15"
            y1="65"
            x2="60"
            y2="65"
            stroke="#E2E8F0"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="70" cy="85" r="10" fill="#10B981" />
          <path
            d="M 66 85 L 69 88 L 74 83"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>

        {/* Incorporation Cert top right */}
        <g
          transform="translate(340, 50)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect
            width="100"
            height="120"
            rx="8"
            fill="white"
            stroke="#DBEAFE"
            strokeWidth="2"
          />
          <rect width="100" height="18" rx="4" fill="#EFF6FF" />
          <text
            x="50"
            y="12"
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#1E40AF"
          >
            GST REGISTRATION
          </text>
          <rect x="15" y="40" width="70" height="6" rx="3" fill="#BFDBFE" />
          <rect x="15" y="55" width="70" height="6" rx="3" fill="#E2E8F0" />
          <rect x="15" y="70" width="45" height="6" rx="3" fill="#E2E8F0" />
          <path
            d="M 30 100 Q 50 90 70 100"
            stroke="#3150A0"
            strokeWidth="1.5"
            fill="none"
          />
          <circle
            cx="75"
            cy="95"
            r="11"
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
          />
          <path
            d="M 71 95 L 74 98 L 79 93"
            stroke="#34D399"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        <g
          transform="translate(60, 260)"
          filter="drop-shadow(0 6px 12px rgba(0,0,0,0.04))"
        >
          <rect
            width="90"
            height="60"
            rx="8"
            fill="white"
            stroke="#34D399"
            strokeWidth="1.5"
          />
          <text
            x="45"
            y="22"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#047857"
          >
            PAN Card
          </text>
          <rect x="15" y="32" width="60" height="5" rx="2.5" fill="#E2E8F0" />
          <rect x="15" y="44" width="40" height="5" rx="2.5" fill="#E2E8F0" />
        </g>

        <g
          transform="translate(340, 250)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect width="100" height="70" rx="10" fill="#3150A0" />
          <text
            x="50"
            y="25"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#FFF"
          >
            INCORPORATION
          </text>
          <text
            x="50"
            y="45"
            textAnchor="middle"
            fontSize="14"
            fontWeight="extrabold"
            fill="#FBBF24"
          >
            100% DONE
          </text>
          <rect
            x="20"
            y="54"
            width="60"
            height="4"
            rx="2"
            fill="white"
            opacity="0.3"
          />
          <rect x="20" y="54" width="60" height="4" rx="2" fill="#FBBF24" />
        </g>
      </svg>
    ),
  },
  {
    id: "audit",
    title: "Statutory & Audit Verification",
    subtitle:
      "Thorough auditing, GAAP-aligned double entry ledgers and tax reserves compilation.",
    color: "from-blue-600 to-sky-600",
    illustrations: (
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md"
      >
        <path
          d="M 50 100 L 450 100 M 50 200 L 450 200 M 50 300 L 450 300"
          stroke="#F1F5F9"
          strokeWidth="1.5"
        />
        <path
          d="M 100 50 L 100 350 M 200 50 L 200 350 M 300 50 L 300 350 M 400 50 L 400 350"
          stroke="#F1F5F9"
          strokeWidth="1.5"
        />

        <g
          transform="translate(180, 100)"
          filter="drop-shadow(0 15px 30px rgba(0,0,0,0.08))"
        >
          <rect
            width="140"
            height="180"
            rx="12"
            fill="#FFFFFF"
            stroke="#3150A0"
            strokeWidth="3"
          />
          <rect width="140" height="25" rx="6" fill="#3150A0" />
          <text
            x="70"
            y="16"
            textAnchor="middle"
            fontSize="9"
            fontWeight="bold"
            fill="#FFFFFF"
          >
            BUSINESS LEDGER
          </text>

          <g transform="translate(15, 45)">
            <text x="0" y="10" fontSize="10" fontWeight="bold" fill="#64748B">
              Balance audit
            </text>
            <text
              x="110"
              y="10"
              fontSize="10"
              textAnchor="end"
              fontWeight="bold"
              fill="#10B981"
            >
              ₹9,450
            </text>
            <line
              x1="0"
              y1="18"
              x2="110"
              y2="18"
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          </g>
          <g transform="translate(15, 75)">
            <text x="0" y="10" fontSize="10" fontWeight="bold" fill="#64748B">
              Asset appraisal
            </text>
            <text
              x="110"
              y="10"
              fontSize="10"
              textAnchor="end"
              fontWeight="bold"
              fill="#10B981"
            >
              ₹14,200
            </text>
            <line
              x1="0"
              y1="18"
              x2="110"
              y2="18"
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          </g>
          <g transform="translate(15, 105)">
            <text x="0" y="10" fontSize="10" fontWeight="bold" fill="#64748B">
              Tax reserves
            </text>
            <text
              x="110"
              y="10"
              fontSize="10"
              textAnchor="end"
              fontWeight="bold"
              fill="#3150A0"
            >
              Verified
            </text>
            <line
              x1="0"
              y1="18"
              x2="110"
              y2="18"
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          </g>

          <g transform="translate(85, 130)">
            <circle cx="15" cy="15" r="18" fill="#F97316" />
            <path
              d="M 8 15 L 12 19 L 22 9"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </g>
        </g>

        <g
          transform="translate(360, 110)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            width="90"
            height="150"
            rx="10"
            fill="white"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <text
            x="45"
            y="20"
            textAnchor="middle"
            fontSize="11"
            fontWeight="extrabold"
            fill="#EA580C"
          >
            REPORTS
          </text>
          <g transform="translate(15, 35)">
            <rect x="0" y="10" width="12" height="80" rx="3" fill="#E2E8F0" />
            <rect x="0" y="30" width="12" height="60" rx="3" fill="#FBBF24" />
            <rect x="22" y="10" width="12" height="80" rx="3" fill="#E2E8F0" />
            <rect x="22" y="15" width="12" height="75" rx="3" fill="#3150A0" />
            <rect x="44" y="10" width="12" height="80" rx="3" fill="#E2E8F0" />
            <rect x="44" y="45" width="12" height="45" rx="3" fill="#34D399" />
          </g>
          <rect x="15" y="130" width="60" height="10" rx="5" fill="#D1FAE5" />
          <text
            x="45"
            y="138"
            textAnchor="middle"
            fontSize="7"
            fontWeight="bold"
            fill="#047857"
          >
            GAAP CERTIFIED
          </text>
        </g>

        <g
          transform="translate(50, 120)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect
            width="90"
            height="120"
            rx="12"
            fill="white"
            stroke="#DBEAFE"
            strokeWidth="1.5"
          />
          <circle cx="45" cy="40" r="22" fill="#EFF6FF" />
          <path d="M 45 40 L 45 18 A 22 22 0 0 1 67 40 Z" fill="#3150A0" />
          <path d="M 45 40 L 67 40 A 22 22 0 0 1 45 62 Z" fill="#FBBF24" />
          <text
            x="45"
            y="80"
            textAnchor="middle"
            fontSize="10"
            fontWeight="extrabold"
            fill="#1E40AF"
          >
            ACCURACY
          </text>
          <text
            x="45"
            y="100"
            textAnchor="middle"
            fontSize="12"
            fontWeight="extrabold"
            fill="#10B981"
          >
            99.9%
          </text>
        </g>
      </svg>
    ),
  },

  {
    id: "legal",
    title: "Legal and Documentation Support",
    subtitle:
      "Expert contract drafting, secure Partnership Deeds, and robust NDA agreements.",
    color: "from-blue-700 to-indigo-800",
    illustrations: (
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-md"
      >
        <circle
          cx="250"
          cy="200"
          r="140"
          stroke="#DBEAFE"
          strokeWidth="2"
          strokeDasharray="10 5"
        />

        <g
          transform="translate(160, 80)"
          filter="drop-shadow(0 15px 30px rgba(0,0,0,0.08))"
        >
          <rect
            width="180"
            height="230"
            rx="12"
            fill="white"
            stroke="#3150A0"
            strokeWidth="3"
          />
          <rect x="25" y="25" width="130" height="25" rx="4" fill="#D97706" />
          <text
            x="90"
            y="41"
            textAnchor="middle"
            fontSize="10"
            fontWeight="extrabold"
            fill="white"
          >
            PARTNERSHIP DEED
          </text>

          <g transform="translate(25, 75)">
            <line
              x1="0"
              y1="0"
              x2="130"
              y2="0"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="12"
              x2="110"
              y2="12"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="36"
              x2="130"
              y2="36"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="48"
              x2="95"
              y2="48"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="72"
              x2="130"
              y2="72"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="0"
              y1="84"
              x2="120"
              y2="84"
              stroke="#E2E8F0"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>

          <g transform="translate(115, 175)">
            <circle cx="15" cy="15" r="16" fill="#FBBF24" />
            <circle
              cx="15"
              cy="15"
              r="12"
              stroke="white"
              strokeWidth="1"
              strokeDasharray="3 3"
              fill="none"
            />
            <path
              d="M 8 25 L 12 40 L 16 30 L 20 40 L 24 25"
              fill="#EF4444"
              stroke="#B91C1C"
              strokeWidth="1"
            />
          </g>

          <g transform="translate(25, 185)">
            <path
              d="M 0 10 Q 15 0 25 15 T 45 5"
              stroke="#3150A0"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="0"
              y1="18"
              x2="45"
              y2="18"
              stroke="#CBD5E1"
              strokeWidth="1"
            />
            <text x="0" y="26" fontSize="6" fill="#94A3B8" fontWeight="bold">
              FIRST PARTY
            </text>
          </g>

          <g transform="translate(80, 185)">
            <path
              d="M 0 5 Q 10 15 20 5 T 35 12"
              stroke="#3150A0"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="0"
              y1="18"
              x2="35"
              y2="18"
              stroke="#CBD5E1"
              strokeWidth="1"
            />
            <text x="0" y="26" fontSize="6" fill="#94A3B8" fontWeight="bold">
              SECOND PARTY
            </text>
          </g>
        </g>

        <g
          transform="translate(45, 130)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.06))"
        >
          <rect
            width="85"
            height="110"
            rx="10"
            fill="white"
            stroke="#FEF3C7"
            strokeWidth="1"
          />
          <g transform="translate(12, 12)">
            <line
              x1="30"
              y1="15"
              x2="30"
              y2="75"
              stroke="#D97706"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle cx="30" cy="12" r="6" fill="#D97706" />
            <line
              x1="10"
              y1="28"
              x2="50"
              y2="28"
              stroke="#D97706"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <line
              x1="12"
              y1="30"
              x2="4"
              y2="55"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <line
              x1="12"
              y1="30"
              x2="20"
              y2="55"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <path
              d="M 0 55 C 4 64 20 64 24 55 Z"
              fill="#F1F5F9"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
            <line
              x1="48"
              y1="30"
              x2="40"
              y2="55"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <line
              x1="48"
              y1="30"
              x2="56"
              y2="55"
              stroke="#CBD5E1"
              strokeWidth="1.5"
            />
            <path
              d="M 36 55 C 40 64 56 64 60 55 Z"
              fill="#F1F5F9"
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
            <rect x="15" y="75" width="30" height="8" rx="2" fill="#D97706" />
          </g>
        </g>

        <g
          transform="translate(370, 130)"
          filter="drop-shadow(0 8px 16px rgba(0,0,0,0.05))"
        >
          <rect
            width="90"
            height="110"
            rx="10"
            fill="white"
            stroke="#DBEAFE"
            strokeWidth="1.5"
          />
          <g transform="translate(25, 20)">
            <path
              d="M 12 25 L 12 15 C 12 5 28 5 28 15 L 28 25"
              stroke="#3150A0"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
            />
            <rect
              x="0"
              y="24"
              width="40"
              height="32"
              rx="6"
              fill="#F59E0B"
              stroke="#D97706"
              strokeWidth="2.5"
            />
            <circle cx="20" cy="38" r="4" fill="#D97706" />
            <line
              x1="20"
              y1="42"
              x2="20"
              y2="48"
              stroke="#D97706"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <text
            x="45"
            y="90"
            textAnchor="middle"
            fontSize="10"
            fontWeight="extrabold"
            fill="#1E40AF"
          >
            SECURE NDA
          </text>
        </g>
      </svg>
    ),
  },
];

export const DoodleServicesSlideShare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const currentSlideId = SLIDES[currentSlide]?.id;
    const delay = currentSlideId === "taxation" ? 10000 : 5500;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, delay);
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  return (
    <div className="w-full max-w-xl relative p-2 flex flex-col items-center justify-center">
      {/* Main Slide Illustration Display with AnimatePresence */}
      <div className="relative aspect-[4/3] w-full flex items-center justify-center relative group select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.96, x: 25 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -25 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            {SLIDES[currentSlide].illustrations}
          </motion.div>
        </AnimatePresence>

        {/* Minimalist side arrow navigation buttons hidden by default, visible on hover */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 duration-200"
          aria-label="Previous Slide"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-md border border-slate-100 hover:scale-105 active:scale-95 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 duration-200"
          aria-label="Next Slide"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Modern, minimalist page indicator dots below the slide */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setIsPlaying(false);
              setCurrentSlide(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-6 bg-orange-500"
                : "w-2 bg-slate-200 hover:bg-slate-350"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export const ConsultantDeskIllustration = () => (
  <svg
    viewBox="0 0 500 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full max-w-lg drop-shadow-xl relative z-10"
  >
    <circle cx="250" cy="200" r="160" fill="#E0F2FE" opacity="0.6" />
    <path
      d="M120 320Q 250 150 380 320"
      stroke="#BAE6FD"
      strokeWidth="8"
      fill="none"
      strokeDasharray="12 12"
      opacity="0.5"
    />
    <path
      d="M120 280C 110 250 90 230 70 230C 90 230 110 240 120 260C 130 240 150 230 170 230C 150 230 130 250 120 280Z"
      fill="#10B981"
    />
    <path
      d="M110 250C 100 220 80 200 60 200C 80 200 100 210 110 230C 120 210 140 200 160 200C 140 200 120 220 110 250Z"
      fill="#34D399"
    />
    <path d="M95 280L 145 280L 135 340L 105 340Z" fill="#FCD34D" />
    <rect
      x="280"
      y="80"
      width="140"
      height="100"
      rx="8"
      fill="white"
      filter="drop-shadow(0 4px 6px rgb(0 0 0 / 0.05))"
    />
    <path
      d="M290 150L 320 130L 350 140L 380 100L 410 110"
      stroke="#F97316"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="380" cy="100" r="5" fill="#F97316" />
    <path d="M140 280L 440 280L 460 300L 120 300Z" fill="#94A3B8" />
    <rect x="140" y="280" width="300" height="8" fill="#CBD5E1" />
    <rect x="160" y="300" width="12" height="60" fill="#64748B" />
    <rect x="400" y="300" width="12" height="60" fill="#64748B" />
    <g transform="translate(190, 110)">
      <circle cx="60" cy="40" r="28" fill="#FB923C" />
      <path
        d="M20 120 C 20 80 100 80 100 120 L 120 170 L 0 170 Z"
        fill="#1E3A8A"
      />
      <path
        d="M30 120 L 10 170"
        stroke="#1E40AF"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M90 120 L 130 160"
        stroke="#1E40AF"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </g>
    <g transform="translate(260, 220)">
      <rect x="0" y="10" width="80" height="50" rx="4" fill="#334155" />
      <rect x="4" y="14" width="72" height="42" rx="2" fill="#E2E8F0" />
      <path d="M-10 60 L 90 60 L 80 66 L 0 66 Z" fill="#1E293B" />
      <rect x="10" y="22" width="60" height="6" rx="2" fill="#94A3B8" />
      <rect x="10" y="34" width="30" height="4" rx="2" fill="#CBD5E1" />
      <rect x="10" y="44" width="40" height="4" rx="2" fill="#CBD5E1" />
    </g>
    <rect x="220" y="250" width="16" height="20" rx="2" fill="white" />
    <path
      d="M236 255 Q 244 255 244 260 Q 244 265 236 265"
      stroke="white"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
    <g transform="translate(360, 265) rotate(-10)">
      <rect x="0" y="0" width="35" height="45" fill="white" />
      <rect x="5" y="10" width="20" height="2" fill="#CBD5E1" />
      <rect x="5" y="15" width="25" height="2" fill="#CBD5E1" />
      <rect x="5" y="20" width="15" height="2" fill="#CBD5E1" />
    </g>
    <g transform="translate(370, 268) rotate(15)">
      <rect
        x="0"
        y="0"
        width="35"
        height="45"
        fill="#F8FAFC"
        opacity="0.9"
        stroke="#E2E8F0"
      />
      <circle cx="17" cy="15" r="8" fill="#DBEAFE" />
    </g>
  </svg>
);

const MeetingIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full drop-shadow-md"
  >
    {/* Dynamic Background elements */}
    <circle cx="200" cy="180" r="140" fill="#DBEAFE" opacity="0.5" />
    <path
      d="M80 280Q 200 150 320 280"
      stroke="#BFDBFE"
      strokeWidth="6"
      fill="none"
      strokeDasharray="10 10"
      opacity="0.6"
    />

    {/* Person 1 (left) */}
    <g transform="translate(60, 140)">
      <circle cx="50" cy="30" r="24" fill="#1E3A8A" />
      <path d="M10 110C 10 70 90 70 90 110" fill="#1E3A8A" />
      <path d="M35 72L 50 90L 65 72" fill="#F8FAFC" />
      <path d="M50 82L 50 110" stroke="#3B82F6" strokeWidth="4" />
    </g>

    {/* Person 2 (center, back) */}
    <g transform="translate(150, 90)">
      <circle cx="50" cy="30" r="26" fill="#EA580C" />
      <path d="M5 120C 5 70 95 70 95 120" fill="#C2410C" />
      <path d="M35 74L 50 95L 65 74" fill="#FFF7ED" />
      <path d="M50 85L 50 120" stroke="#F97316" strokeWidth="4" />
    </g>

    {/* Person 3 (right) */}
    <g transform="translate(240, 140)">
      <circle cx="50" cy="30" r="24" fill="#1E40AF" />
      <path d="M10 110C 10 70 90 70 90 110" fill="#1E40AF" />
      <path d="M35 72L 50 90L 65 72" fill="#EFF6FF" />
      <path d="M50 82L 50 110" stroke="#60A5FA" strokeWidth="4" />
    </g>

    {/* Table */}
    <path d="M40 250L 360 250L 380 280L 20 280Z" fill="#CBD5E1" />
    <path d="M40 250L 360 250L 360 258L 40 258Z" fill="#94A3B8" />

    {/* Documents/Laptops on table */}
    <rect
      x="180"
      y="240"
      width="40"
      height="25"
      rx="3"
      fill="#FFFFFF"
      opacity="0.9"
    />
    <rect x="186" y="246" width="28" height="3" fill="#E2E8F0" />
    <rect x="186" y="252" width="20" height="3" fill="#E2E8F0" />

    <path d="M100 255L 140 255L 135 242L 105 242Z" fill="#1E293B" />
    <path d="M300 255L 260 255L 265 242L 295 242Z" fill="#1E293B" />

    {/* Floating speech bubbles */}
    <path
      d="M120 100 Q 120 70 150 70 Q 180 70 180 100 Q 180 130 150 130 L 140 140 L 140 130 Q 120 130 120 100 Z"
      fill="#FFFFFF"
      filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))"
    />
    <circle cx="140" cy="100" r="4" fill="#94A3B8" />
    <circle cx="150" cy="100" r="4" fill="#CBD5E1" />
    <circle cx="160" cy="100" r="4" fill="#E2E8F0" />

    <path
      d="M260 130 Q 260 100 290 100 Q 320 100 320 130 Q 320 160 290 160 L 280 170 L 280 160 Q 260 160 260 130 Z"
      fill="#FFEDD5"
      filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))"
    />
    <line
      x1="275"
      y1="125"
      x2="305"
      y2="125"
      stroke="#FDBA74"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <line
      x1="275"
      y1="135"
      x2="295"
      y2="135"
      stroke="#FDBA74"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

const FinanceIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full drop-shadow-md"
  >
    {/* Main Circle Background */}
    <circle cx="200" cy="180" r="140" fill="#FFEDD5" opacity="0.6" />

    {/* Chart Board */}
    <rect
      x="80"
      y="50"
      width="240"
      height="160"
      rx="12"
      fill="#FFFFFF"
      filter="drop-shadow(0 10px 8px rgb(0 0 0 / 0.04))"
    />
    <rect
      x="80"
      y="50"
      width="240"
      height="160"
      rx="12"
      stroke="#FDBA74"
      strokeWidth="4"
    />

    <path
      d="M100 180L 140 120L 180 140L 230 70L 280 90L 300 40"
      stroke="#F97316"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    <circle cx="100" cy="180" r="6" fill="#EA580C" />
    <circle cx="140" cy="120" r="6" fill="#EA580C" />
    <circle cx="180" cy="140" r="6" fill="#EA580C" />
    <circle cx="230" cy="70" r="6" fill="#EA580C" />
    <circle cx="280" cy="90" r="6" fill="#EA580C" />
    <circle cx="300" cy="40" r="6" fill="#EA580C" />

    {/* Bar charts */}
    <rect x="120" y="150" width="24" height="40" rx="4" fill="#FED7AA" />
    <rect x="160" y="110" width="24" height="80" rx="4" fill="#FDBA74" />
    <rect x="200" y="80" width="24" height="110" rx="4" fill="#FB923C" />
    <rect x="240" y="130" width="24" height="60" rx="4" fill="#F97316" />

    {/* Person analyzing */}
    <g transform="translate(190, 160)">
      <circle cx="60" cy="35" r="28" fill="#1E3A8A" />
      <path d="M10 130C 10 80 110 80 110 130" fill="#1E3A8A" />
      <path d="M48" fill="#F8FAFC" /> {/* Tie area */}
      <path d="M48 83L 60 100L 72 83" fill="#F8FAFC" />
      <path d="M60 93L 60 130" stroke="#3B82F6" strokeWidth="4" />
    </g>

    {/* Desk */}
    <path d="M100 290L 380 290L 400 320L 80 320Z" fill="#CBD5E1" />
    <path d="M100 290L 380 290L 380 296L 100 296Z" fill="#94A3B8" />

    {/* Laptop */}
    <rect
      x="230"
      y="240"
      width="80"
      height="55"
      rx="5"
      fill="#1E293B"
      transform="rotate(-15 230 240)"
    />
    <rect
      x="245"
      y="247"
      width="65"
      height="40"
      rx="3"
      fill="#F8FAFC"
      transform="rotate(-15 230 240)"
    />
    <path d="M200 290L 330 290L 320 280L 215 280Z" fill="#334155" />

    {/* Floating Elements */}
    <circle
      cx="120"
      cy="240"
      r="16"
      fill="#FFFFFF"
      filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))"
    />
    <path
      d="M115 240 L 125 240 M120 235 L 120 245"
      stroke="#10B981"
      strokeWidth="4"
      strokeLinecap="round"
    />

    <circle
      cx="340"
      cy="180"
      r="12"
      fill="#FFFFFF"
      filter="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))"
    />
  </svg>
);

const BusinessSuccessIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full drop-shadow-md"
  >
    {/* Background */}
    <circle cx="200" cy="200" r="140" fill="#E0E7FF" opacity="0.6" />

    {/* Growth Arrow Base */}
    <path
      d="M70 300 Q 150 300 200 200 T 310 80"
      stroke="#818CF8"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
      opacity="0.4"
      strokeDasharray="10 10"
    />
    <path
      d="M70 300 Q 150 300 200 200 T 310 80"
      stroke="#4F46E5"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M280 80 L 310 80 L 310 110"
      stroke="#4F46E5"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Trophy Base */}
    <path d="M160 260 L 240 260 L 220 320 L 180 320 Z" fill="#94A3B8" />
    <rect x="150" y="320" width="100" height="20" rx="4" fill="#64748B" />
    <path d="M190 260 L 190 320" stroke="#CBD5E1" strokeWidth="4" />

    {/* Trophy Cup */}
    <path d="M140 140 C 140 240 260 240 260 140 Z" fill="#FBBF24" />
    <rect x="130" y="120" width="140" height="20" rx="4" fill="#F59E0B" />

    {/* Trophy Handles */}
    <path
      d="M140 160 C 100 160 100 220 160 220"
      stroke="#F59E0B"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M260 160 C 300 160 300 220 240 220"
      stroke="#F59E0B"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M140 160 C 100 160 100 220 160 220"
      stroke="#FEF3C7"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M260 160 C 300 160 300 220 240 220"
      stroke="#FEF3C7"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />

    {/* Sparkles / Stars */}
    <path
      d="M200 60 L 205 85 L 230 90 L 205 95 L 200 120 L 195 95 L 170 90 L 195 85 Z"
      fill="#FDE68A"
    />
    <path
      d="M100 100 L 103 115 L 118 118 L 103 121 L 100 136 L 97 121 L 82 118 L 97 115 Z"
      fill="#FDE68A"
    />
    <path
      d="M300 180 L 302 190 L 312 192 L 302 194 L 300 204 L 298 194 L 288 192 L 298 190 Z"
      fill="#FDE68A"
    />

    {/* Highlighting on cup */}
    <path
      d="M170 150 C 170 210 200 230 200 230 C 200 230 150 200 150 150 Z"
      fill="#FEF3C7"
      opacity="0.6"
    />
  </svg>
);

const TrustIllustration = () => (
  <svg
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full drop-shadow-md"
  >
    {/* Background Circle */}
    <circle cx="200" cy="200" r="140" fill="#EFF6FF" opacity="0.8" />

    {/* Shield of Trust */}
    <path
      d="M200 80 L 280 110 L 280 200 C 280 260 200 320 200 320 C 200 320 120 260 120 200 L 120 110 Z"
      fill="#3B82F6"
    />
    <path
      d="M200 80 L 280 110 L 280 200 C 280 260 200 320 200 320 Z"
      fill="#2563EB"
    />

    {/* Checkmark inside shield */}
    <path
      d="M160 200 L 190 230 L 250 150"
      stroke="#FFFFFF"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Connection/Trust nodes around */}
    <path
      d="M120 140 L 80 160"
      stroke="#BFDBFE"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="80" cy="160" r="10" fill="#60A5FA" />

    <path
      d="M280 140 L 320 160"
      stroke="#BFDBFE"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <circle cx="320" cy="160" r="10" fill="#60A5FA" />

    {/* Sparkles */}
    <path
      d="M100 80 L 105 95 L 120 100 L 105 105 L 100 120 L 95 105 L 80 100 L 95 95 Z"
      fill="#FDBA74"
    />
    <path
      d="M300 80 L 305 95 L 320 100 L 305 105 L 300 120 L 295 105 L 280 100 L 295 95 Z"
      fill="#FDBA74"
    />
  </svg>
);

function About() {
  return (
    <section
      id="about-us"
      className="py-8 lg:py-12 bg-white relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-2"
          >
            {/* Image Grid / Collage for About Section */}
            <div className="grid grid-cols-2 gap-4 relative z-10 scale-[0.85] origin-center">
              <div className="space-y-4 pt-12">
                <div className="bg-slate-100 rounded-3xl aspect-[4/3] overflow-hidden relative shadow-lg flex items-center justify-center p-2 border border-slate-200">
                  <TrustIllustration />
                </div>
                <div className="bg-orange-100 rounded-3xl p-6 shadow-lg flex flex-col justify-center items-center text-center aspect-[4/3] border border-orange-200">
                  <span className="font-display text-4xl font-extrabold text-orange-600 mb-2">
                    5+
                  </span>
                  <span className="text-sm font-semibold text-orange-800 uppercase tracking-widest">
                    Years of Trust
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-3xl p-6 shadow-lg flex flex-col justify-center items-center text-center aspect-[4/3] border border-blue-100">
                  <span className="font-display text-4xl font-extrabold text-blue-600 mb-2">
                    500+
                  </span>
                  <span className="text-sm font-semibold text-blue-800 uppercase tracking-widest">
                    Clients Empowered
                  </span>
                </div>
                <div className="bg-slate-100 rounded-3xl aspect-[4/5] overflow-hidden relative shadow-lg flex items-center justify-center p-2 border border-slate-200">
                  <FinanceIllustration />
                </div>
              </div>
            </div>

            {/* Blur backdrop for images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-tr from-blue-100 to-orange-50 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl lg:max-w-none order-1 lg:order-1"
          >
            <h2 className="font-display text-base font-bold text-orange-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500" />
              About MakeEazy
            </h2>
            <h3 className="font-display text-4xl lg:text-5xl font-bold text-[#3150A0] leading-tight mb-6">
              Empowering your business vision to reality.
            </h3>
            <p className="text-lg text-slate-600 leading-normal mb-10 text-justify">
              We support entrepreneurs from start to finish with our expert
              services in Audit, Accountancy, Taxation, and compliance. Our
              experienced team is dedicated to handling the complexities of
              regulatory requirements, enabling businesses and individuals to
              focus purely on what they do best—innovating and growing.
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3150A0] mb-2">
                    Our Mission
                  </h4>
                  <p className="text-slate-600 leading-normal text-justify">
                    To deliver accurate, timely, and seamless accounting and
                    compliance solutions that act as a catalyst for our clients'
                    business success and financial health.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 border border-orange-100 shadow-sm">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#3150A0] mb-2">
                    Our Vision
                  </h4>
                  <p className="text-slate-600 leading-normal text-justify">
                    To be the most trusted and preferred partner for businesses
                    across India, recognized for transforming complex compliance
                    into effortless growth opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-slate-700">
                  Expert Team
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-slate-700">
                  End-to-End Support
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-slate-700">
                  100% Compliant
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="py-8 lg:py-10 bg-slate-50 border-y border-slate-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#3150A0] tracking-tight mb-4">
            Grow your Business <br className="hidden sm:block" /> with our
            Services
          </h2>
          <p className="text-lg text-slate-500 text-justify">
            Our top priority is to provide effective solutions tailored to your
            unique business needs across all compliance and regulatory domains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                href={service.href}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden text-left block"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300 animate-float-icon">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-normal text-justify">
                  {service.description}
                </p>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-8 lg:py-10 bg-white border-y border-slate-100 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#3150A0] tracking-tight mb-4">
            Hear from our Happy Clients
          </h2>
          <p className="text-lg text-slate-500 text-justify sm:text-center">
            See how our tailored financial solutions have helped businesses
            streamline their compliance and growth strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 relative hover:shadow-xl hover:border-slate-300 transition-all"
            >
              <div className="absolute top-8 right-8 text-orange-200">
                <Quote className="w-10 h-10 fill-current" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed font-medium mb-8 text-justify relative z-10">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-[#3150A0] rounded-full font-bold flex items-center justify-center text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "What is the threshold limit of turnover for GST registration in India?",
      answer:
        "GST registration is mandatory if your aggregate annual turnover exceeds ₹40 Lakhs for goods suppliers (exemption limit is ₹20 Lakhs for Special Category States in Northeast and hill regions) or ₹20 Lakhs for services providers (₹10 Lakhs for Special Category States).",
    },
    {
      question:
        "What are the rules and late fees for filing GST and TDS returns?",
      answer:
        "Belated filing of GST returns (GSTR-1/GSTR-3B) incurs a late fee of ₹50 per day (₹20 per day for Nil returns) up to a maximum cap determined by your business turnover tier. Late filing of quarterly TDS returns (Form 24Q/26Q) under Section 234E incurs a non-negotiable fee of ₹200 per day until compliance is met.",
    },
    {
      question:
        "When is a Tax Audit mandatory for businesses under Section 44AB?",
      answer:
        "Under the Income Tax Act, a Tax Audit is mandatory if your total sales/turnover exceeds ₹1 Crore in a financial year. However, if your cash receipts and cash payments do not exceed 5% of total transactions (meaning 95%+ of transactions are digital or bank-route), this audit threshold limit is extended up to ₹10 Crore.",
    },
    {
      question:
        "What benefits can my startup claim via MSME / Udyam registration?",
      answer:
        "Registering on the official Udyam portal under Ministry of MSME unlocks interest rate subsidies on bank loans, priority sector lending with collateral-free credits, 50% discount on patent/trademark filings, and strong protection under MSME Samadhaan for delayed payments exceeding 45 days.",
    },
    {
      question:
        "How can individuals and salaried employees save Income Tax in India?",
      answer:
        "Taxpayers can claim deductions up to ₹1,50,000 under Section 80C (PPF, EPF, ELSS, tuition fees, etc.). Over and above 80C, you can save with Section 80D (health insurance up to ₹25,000 for self/family, ₹50,050 for senior citizen parents), NPS contribution up to ₹50,050 under Section 80CCD(1B), and a flat Standard Deduction of ₹75,050.",
    },
    {
      question:
        "What are the core requirements to incorporate a Pvt Ltd Company / LLP?",
      answer:
        "To incorporate a Private Limited Company or a Limited Liability Partnership (LLP), you need at least 2 partners/directors (including at least one resident of India). Core documents required include PAN, Aadhaar or passport, utility bills of the registered office address (electricity/water/gas bill not older than 2 months), landlord NOC, and latest bank statements.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 border-t border-b border-slate-100 relative overflow-hidden"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-12 right-0 translate-x-1/4 pointer-events-none opacity-40">
        <div className="w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-12 left-0 -translate-x-1/4 pointer-events-none opacity-40">
        <div className="w-[450px] h-[450px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context Card & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <h2 className="font-display text-base font-bold text-orange-500 tracking-wider uppercase mb-3 flex items-center gap-2">
                <span className="w-6 h-px bg-orange-500" />
                Got Questions?
              </h2>
              <h3 className="font-display text-4xl font-bold text-[#3150A0] leading-tight tracking-tight mb-4">
                Frequently Asked <br />
                Questions
              </h3>
              <p className="text-slate-600 text-base leading-relaxed text-justify mb-6">
                To help you move fast, we have compiled official clarification
                on the most common tax registrations, thresholds, and statutory
                audits in India. If you need a custom audit or have dynamic
                filings, our compliance experts are just a click away.
              </p>
            </div>

            {/* Interactive Support Helper Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full transition-all group-hover:scale-110" />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 text-blue-600 rounded-2xl">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-slate-900 mb-1">
                    Still confused about limits?
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Tax slabs and thresholds can be complex depending on your
                    nature of supply. Get verified, hassle-free guidance in
                    minutes.
                  </p>
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-2 text-sm font-bold text-orange-500 hover:text-orange-600 transition-colors group"
                  >
                    Connect with an Accountant
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Live Stats Bullet Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                <span className="block font-display text-2xl font-extrabold text-[#3150A0]">
                  99.9%
                </span>
                <span className="text-xs text-slate-500 mt-0.5 block">
                  Audit Accuracy
                </span>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                <span className="block font-display text-2xl font-extrabold text-[#3150A0]">
                  0%
                </span>
                <span className="text-xs text-slate-500 mt-0.5 block">
                  Compliance Penalty
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 shadow-md"
                      : "border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                  }`}
                >
                  <button
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 select-none focus:outline-none focus:ring-2 focus:ring-blue-100 rounded-2xl"
                  >
                    <span className="font-display font-bold text-slate-900 text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isOpen
                          ? "bg-blue-50 text-[#3150A0]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-btn-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 leading-relaxed text-sm sm:text-base border-t border-slate-100/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service you are interested in.");
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedService("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact-us"
      className="py-8 lg:py-10 bg-white relative overflow-hidden border-t border-slate-100"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-base font-bold text-orange-500 tracking-widest uppercase mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-orange-500" />
              Get in Touch
            </h2>
            <h3 className="font-display text-4xl font-bold text-[#3150A0] leading-tight mb-6">
              Let's talk about your business compliances.
            </h3>
            <p className="text-lg text-slate-600 mb-10 text-justify">
              Whether you're starting up or scaling up, our experts are here to
              help you navigate through regulatory complexities. Reach out to us
              today.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3150A0] uppercase tracking-wider mb-1">
                    Email Us
                  </h4>
                  <a
                    href="mailto:info@makeeazy.in"
                    className="text-lg text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    info@makeeazy.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3150A0] uppercase tracking-wider mb-1">
                    Call Us
                  </h4>
                  <a
                    href="tel:+919992819995"
                    className="text-lg text-slate-600 hover:text-orange-500 transition-colors"
                  >
                    +91 9992 81 9995
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#3150A0] uppercase tracking-wider mb-1">
                    Office
                  </h4>
                  <address className="text-base text-slate-600 not-italic leading-normal">
                    <span className="font-bold text-[#3150A0]">
                      MakeEazy Consultants Private Limited
                    </span>
                    <br />
                    Sai Saradhi Nagar, Yellareddyguda, Hyderabad, TG, IN - 500
                    073
                    <br />
                    CIN: U67190TG2021PTC155555
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 min-h-[580px] flex flex-col justify-between">
            <h3 className="font-display text-2xl font-bold text-[#3150A0] mb-4">
              Send us a message
            </h3>
            <div className="flex-grow flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="flex-grow bg-emerald-50/50 border border-emerald-100 rounded-2xl p-8 text-center flex flex-col items-center justify-center space-y-6 shadow-xs"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 12,
                        delay: 0.2,
                      }}
                      className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-emerald-500/20"
                    >
                      <svg
                        className="w-10 h-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <motion.path
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{
                            duration: 0.45,
                            ease: "easeOut",
                            delay: 0.4,
                          }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    <div className="space-y-2">
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="font-display text-2xl font-black text-slate-800"
                      >
                        Message Sent Successfully!
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="text-slate-500 text-sm max-w-sm leading-relaxed"
                      >
                        Thank you for reaching out to us. Our regulatory
                        compliance specialists will contact you shortly.
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5 flex-grow flex flex-col justify-between"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-5">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="firstName"
                            className="text-sm font-medium text-slate-700"
                          >
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                            placeholder="Krishiv"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="lastName"
                            className="text-sm font-medium text-slate-700"
                          >
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                            placeholder="Nandan"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-slate-700"
                        >
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                          placeholder="krishiv@example.com"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium text-slate-700"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          pattern="[0-9\+\-\s]+"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                          placeholder="+91 99999 99999"
                        />
                      </div>

                      <div className="space-y-2 relative">
                        <label className="text-sm font-medium text-slate-700">
                          Select Service <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="hidden"
                            name="service"
                            value={selectedService}
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setIsServiceDropdownOpen(!isServiceDropdownOpen)
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-left flex justify-between items-center"
                          >
                            <span
                              className={
                                selectedService
                                  ? "text-slate-900"
                                  : "text-slate-400"
                              }
                            >
                              {selectedService ||
                                "Select a service you are interested in"}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 text-slate-400 transition-transform ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                            />
                          </button>

                          {isServiceDropdownOpen && (
                            <>
                              <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsServiceDropdownOpen(false)}
                              ></div>
                              <div className="absolute z-20 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 py-2 max-h-60 overflow-auto">
                                {SERVICES.map((service, index) => (
                                  <button
                                    key={index}
                                    type="button"
                                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-orange-50 hover:text-orange-600 ${selectedService === service.title ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-700"}`}
                                    onClick={() => {
                                      setSelectedService(service.title);
                                      setIsServiceDropdownOpen(false);
                                    }}
                                  >
                                    {service.title}
                                  </button>
                                ))}
                                <button
                                  type="button"
                                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-orange-50 hover:text-orange-600 ${selectedService === "Other" ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-700"}`}
                                  onClick={() => {
                                    setSelectedService("Other");
                                    setIsServiceDropdownOpen(false);
                                  }}
                                >
                                  Other / General Inquiry
                                </button>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium text-slate-700"
                        >
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
                      {status !== "submitting" && (
                        <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAAndFooter() {
  return (
    <footer className="bg-blue-950 text-white border-t border-blue-900 relative overflow-hidden print:hidden">
      {/* Large Decorative shape */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 opacity-10"
          width="800"
          height="800"
          viewBox="0 0 800 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="400" cy="400" r="400" fill="currentColor" />
          <circle cx="400" cy="400" r="300" fill="#020617" />
          <circle cx="400" cy="400" r="200" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 relative z-10">
        <div className="bg-blue-900 rounded-3xl p-8 lg:p-12 border border-blue-800 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-8 shadow-2xl">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to take your business to the next level?
            </h2>
            <p className="text-blue-200 text-lg max-w-2xl text-justify">
              Let MakeEazy handle your compliances so you can focus entirely on
              your vision and scaling up.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-orange-500 hover:bg-orange-400 text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg"
              aria-label="Book your Appointment now"
            >
              Book your Appointment now
            </button>
            <button
              className="bg-blue-950 hover:bg-slate-900 border border-blue-800 text-white px-8 py-4 rounded-full text-base font-semibold transition-all"
              aria-label="Contact us"
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-blue-900 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pl-0 text-sm">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="mb-6 relative inline-flex items-center bg-white px-4 py-2 rounded-2xl shadow-sm">
              <img
                src="/logo.png"
                alt="Make Eazy Logo"
                className="h-16 w-auto object-contain origin-left"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement
                    ?.querySelector(".fallback-text")
                    ?.classList.remove("hidden");
                }}
              />
              <div className="fallback-text hidden flex items-center gap-1">
                <span className="font-display font-bold text-2xl tracking-tight text-blue-900">
                  Make
                </span>
                <span className="font-display font-bold text-2xl tracking-tight text-orange-500">
                  Eazy
                </span>
              </div>
            </div>
            <p className="text-blue-200/80 leading-normal max-w-xs text-justify">
              MakeEazy Consultants Private Limited. Empowering businesses and
              individuals with expert audit, accountancy, taxation, and
              compliance solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-4 text-blue-200/80">
              <li>
                <a
                  href="/about-us"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to About us page"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to Contact us page"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/employee-portal"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Employee Login portal"
                >
                  Employee Login
                </a>
              </li>
              <li>
                <a
                  href="/blogs-admin"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Knowledge Hub Admin Portal"
                >
                  Knowledge Hub Admin
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Resources
            </h4>
            <ul className="space-y-4 text-blue-200/80">
              <li>
                <a
                  href="/blogs"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to Knowledge Hub page"
                >
                  Knowledge Hub
                </a>
              </li>
              <li>
                <a
                  href="/calculators"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to Calculators page"
                >
                  Calculators
                </a>
              </li>
              <li>
                <a
                  href="/downloads"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to Downloads page"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  href="/other-resources"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Navigate to Other Resources page"
                >
                  Other Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">
              Legal
            </h4>
            <ul className="space-y-4 text-blue-200/80">
              <li>
                <a
                  href="/terms"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Terms & Conditions section"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Privacy Policy section"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/refund"
                  className="hover:text-orange-400 transition-colors"
                  aria-label="Refund Policy section"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-blue-300 text-xs">
          <p>
            © {new Date().getFullYear()} - MakeEazy Consultants Private Limited.
            All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://www.linkedin.com/company/makeeazy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/makeeazy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919992819995"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
                className="w-5 h-5"
              >
                <path d="M12.031 21c-1.536 0-3.033-.404-4.364-1.171l-4.838 1.267 1.293-4.717A8.956 8.956 0 0 1 2.923 12C2.923 7.037 6.96 3 11.923 3 16.886 3 20.923 7.037 20.923 12c0 4.962-4.037 8.999-8.892 9m0-16.5c-4.143 0-7.519 3.376-7.519 7.519 0 1.294.337 2.556.975 3.674l.119.206-.75 2.738 2.806-.737.2.119a7.48 7.48 0 0 0 3.669.95h.006c4.143 0 7.519-3.376 7.519-7.519 0-4.142-3.376-7.518-7.519-7.518h-.006m4.125 10.375c-.225-.113-1.332-.656-1.538-.731-.206-.075-.356-.113-.506.113-.15.225-.582.731-.713.881-.131.15-.262.169-.487.056-.225-.113-.95-.35-1.813-1.119-.669-.594-1.125-1.331-1.256-1.556-.131-.225-.013-.35.1-.463.1-.1.225-.263.338-.394.112-.131.15-.225.225-.375.075-.15.038-.281-.019-.394-.056-.113-.506-1.219-.694-1.669-.181-.438-.369-.381-.506-.388h-.431c-.15 0-.394.056-.6.281-.206.225-.788.769-.788 1.875s.806 2.175.919 2.325c.113.15 1.581 2.413 3.831 3.381 1.637.7 2.219.756 3.019.638.644-.094 1.944-.794 2.219-1.563.275-.769.275-1.425.194-1.563-.081-.137-.306-.212-.531-.325z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-24 right-8 p-3 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors z-50 flex items-center justify-center cursor-pointer print:hidden"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppWidget() {
  const [showCallout, setShowCallout] = useState(false);

  useEffect(() => {
    const timerShow = setTimeout(() => {
      setShowCallout(true);
    }, 3000);

    const timerHide = setTimeout(() => {
      setShowCallout(false);
    }, 12000);

    return () => {
      clearTimeout(timerShow);
      clearTimeout(timerHide);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end pointer-events-none print:hidden">
      <AnimatePresence>
        {showCallout && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 bg-white border border-slate-100 shadow-2xl rounded-2xl p-3.5 max-w-xs text-xs text-slate-700 relative flex items-start gap-2.5 pointer-events-auto"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 animate-pulse shrink-0" />
            <div>
              <p className="font-semibold text-slate-900 mb-0.5">
                Need Expert Help?
              </p>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Connect directly with our professional team on WhatsApp.
              </p>
            </div>
            <button
              onClick={() => setShowCallout(false)}
              className="text-slate-400 hover:text-slate-600 ml-1 cursor-pointer shrink-0"
              aria-label="Close message callout"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="absolute right-6 bottom-[-6px] w-3 h-3 bg-white border-b border-r border-slate-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/919992819995?text=Hello%21%20I%20visited%20your%20website%20and%20wanted%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-xl transition-all cursor-pointer pointer-events-auto group"
        aria-label="Chat with us on WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className="w-5 h-5"
          >
            <path d="M12.031 21c-1.536 0-3.033-.404-4.364-1.171l-4.838 1.267 1.293-4.717A8.956 8.956 0 0 1 2.923 12C2.923 7.037 6.96 3 11.923 3 16.886 3 20.923 7.037 20.923 12c0 4.962-4.037 8.999-8.892 9m0-16.5c-4.143 0-7.519 3.376-7.519 7.519 0 1.294.337 2.556.975 3.674l.119.206-.75 2.738 2.806-.737.2.119a7.48 7.48 0 0 0 3.669.95h.006c4.143 0 7.519-3.376 7.519-7.519 0-4.142-3.376-7.518-7.519-7.518h-.006m4.125 10.375c-.225-.113-1.332-.656-1.538-.731-.206-.075-.356-.113-.506.113-.15.225-.582.731-.713.881-.131.15-.262.169-.487.056-.225-.113-.95-.35-1.813-1.119-.669-.594-1.125-1.331-1.256-1.556-.131-.225-.013-.35.1-.463.1-.1.225-.263.338-.394.112-.131.15-.225.225-.375.075-.15.038-.281-.019-.394-.056-.113-.506-1.219-.694-1.669-.181-.438-.369-.381-.506-.388h-.431c-.15 0-.394.056-.6.281-.206.225-.788.769-.788 1.875s.806 2.175.919 2.325c.113.15 1.581 2.413 3.831 3.381 1.637.7 2.219.756 3.019.638.644-.094 1.944-.794 2.219-1.563.275-.769.275-1.425.194-1.563-.081-.137-.306-.212-.531-.325z" />
          </svg>
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300"></span>
          </span>
        </div>
        <span className="font-semibold text-xs tracking-wide hidden sm:inline-block">
          Chat with us
        </span>
      </motion.a>
    </div>
  );
}

import { useLocation, useNavigate } from "react-router-dom";

import { Breadcrumbs } from "./components/Breadcrumbs";

function PrintHeaderFooter() {
  return (
    <>
      <div className="hidden print:flex fixed top-0 left-0 w-full items-end justify-between pb-6 border-b border-slate-200 bg-white z-[9999] px-8 pt-8">
        <img
          src="/logo.png"
          alt="MakeEazy Logo"
          className="h-10 w-auto object-contain"
        />
        <div className="text-right">
          <p className="font-display font-bold text-[#3150A0] text-sm m-0">
            MakeEazy Consultants
          </p>
          <p className="text-slate-500 text-xs m-0">makeeazy.com</p>
        </div>
      </div>
      <div className="hidden print:flex fixed bottom-0 left-0 w-full justify-center pt-4 pb-8 border-t border-slate-200 bg-white z-[9999] text-slate-500 text-sm font-medium">
        Strictly for education purpose
      </div>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect hash fragments to paths if any exist
  useEffect(() => {
    if (location.hash && location.pathname === "/") {
      const isInternalSection = [
        "#home",
        "#about-us",
        "#services",
        "#testimonials",
        "#faq",
        "#contact-us",
      ].includes(location.hash);
      if (!isInternalSection) {
        navigate(location.hash.replace("#", "/"), { replace: true });
      }
    }
  }, [location.hash, location.pathname, navigate]);

  useEffect(() => {
    const isInternalSection = [
      "/home",
      "/about-us",
      "/services",
      "/testimonials",
      "/faq",
      "/contact-us",
    ].includes(location.pathname);

    if (location.pathname === "/" || location.pathname === "/home") {
      window.scrollTo(0, 0);
      if (location.pathname === "/home") {
        window.history.replaceState(null, "", "/");
      }
    } else if (isInternalSection) {
      setTimeout(() => {
        const id = location.pathname.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const y = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
          if (location.pathname !== `/${id}`) {
            window.history.replaceState(null, "", `/${id}`);
          }
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor) {
        // Ignore links with target="_blank"
        if (anchor.getAttribute("target") === "_blank") return;

        const href = anchor.getAttribute("href");
        // Intercept internal path navigations
        if (href && href.startsWith("/")) {
          e.preventDefault();
          if (href === "/home") {
            navigate("/");
          } else {
            navigate(href);
          }
        }
      }
    };
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, [navigate]);

  const p = location.pathname;

  const isGlobalRoute = [
    "/health-score",
    "/privacy",
    "/terms",
    "/gst-late-fee-calculator",
    "/tds-late-fee-calculator",
    "/tds-interest-calculator",
    "/hra-calculator",
    "/income-tax-calculator",
  ].includes(p);

  const renderGlobalContent = () => {
    if (p === "/health-score") return <BusinessHealthScore />;
    if (p === "/privacy") return <PrivacyPolicy />;
    if (p === "/terms") return <TermsPage />;
    if (p === "/gst-late-fee-calculator") return <GstLateFeeCalculator />;
    if (p === "/tds-late-fee-calculator") return <TdsLateFeeCalculator />;
    if (p === "/tds-interest-calculator") return <TdsInterestCalculator />;
    if (p === "/hra-calculator") return <HraCalculator />;
    if (p === "/income-tax-calculator") return <IncomeTaxCalculator />;
    return null;
  };

  const renderMainContent = () => {
    if (p === "/calculators") return <Calculators />;
    if (p === "/startup") return <StartupPage />;
    if (p === "/startup-india") return <StartupIndiaPage />;
    if (p === "/icegate") return <IcegatePage />;
    if (p === "/import-export-code") return <ImportExportCodePage />;
    if (p === "/pf-registration") return <PfRegistrationPage />;
    if (p === "/esi-registration") return <EsiRegistrationPage />;
    if (p === "/udyam-registration") return <UdyamRegistrationPage />;
    if (p === "/trademark-registration") return <TrademarkRegistrationPage />;
    if (p === "/lei-registration") return <LeiRegistrationPage />;
    if (p === "/professional-tax-registration") return <ProfessionalTaxPage />;
    if (p === "/shop-establishment-registration")
      return <ShopEstablishmentPage />;
    if (p === "/trade-license-registration") return <TradeLicensePage />;
    if (p === "/fssai-license-registration") return <FssaiLicensePage />;
    if (p === "/legal") return <LegalAndDocumentationPage />;
    if (p === "/advisory") return <AdvisoryPage />;
    if (p === "/other-registration") return <OtherRegistrationPage />;
    if (p === "/downloads" || p === "/other-resources" || p === "/refund")
      return <UnderConstructionPage />;
    if (p === "/under-construction") return <UnderConstructionPage />;
    if (p === "/compliances") return <CompliancesPage />;
    if (p === "/sole-proprietorship") return <SoleProprietorshipPage />;
    if (p === "/partnership-firm") return <PartnershipFirmPage />;
    if (p === "/limited-liability-partnership")
      return <LimitedLiabilityPartnershipPage />;
    if (p === "/one-person-company") return <OnePersonCompanyPage />;
    if (p === "/private-limited-company") return <PrivateLimitedCompanyPage />;
    if (p === "/public-limited-company") return <PublicLimitedCompanyPage />;
    if (p === "/section-8-company") return <SectionEightCompanyPage />;
    if (p === "/trust-or-society") return <TrustOrSocietyPage />;
    if (p === "/foreign-company") return <ForeignCompanyPage />;
    if (p === "/careers") return <CareersPage />;
    if (p === "/employee-portal") return <EmployeePortalPage />;
    if (p === "/blogs") return <BlogPage />;
    if (p === "/blogs-admin") return <BlogAdminPage />;
    if (p.startsWith("/blog/") || p.startsWith("/blogs/")) {
      const slug = p.split("/")[2];
      return <BlogArticlePage slug={slug} />;
    }

    return (
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    );
  };

  return (
    <>
      <PrintHeaderFooter />
      {isGlobalRoute ? (
        renderGlobalContent()
      ) : (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900">
          <Navbar />
          <Breadcrumbs />
          {renderMainContent()}
          <CTAAndFooter />
        </div>
      )}
      <ScrollToTopButton />
      <WhatsAppWidget />
    </>
  );
}
