import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const customMap: Record<string, { parent: string; name: string }> = {
  "/sole-proprietorship": { parent: "/startup", name: "Sole Proprietorship" },
  "/partnership-firm": { parent: "/startup", name: "Partnership Firm" },
  "/limited-liability-partnership": {
    parent: "/startup",
    name: "Limited Liability Partnership",
  },
  "/one-person-company": { parent: "/startup", name: "One Person Company" },
  "/private-limited-company": {
    parent: "/startup",
    name: "Private Limited Company",
  },
  "/public-limited-company": {
    parent: "/startup",
    name: "Public Limited Company",
  },
  "/section-eight-company": { parent: "/startup", name: "Section 8 Company" },
  "/foreign-company": { parent: "/startup", name: "Foreign Company" },
  "/trust-or-society": { parent: "/startup", name: "Trust / Society" },
  "/trade-license": { parent: "/other-registration", name: "Trade License" },
  "/shop-establishment": {
    parent: "/other-registration",
    name: "Shop & Establishment",
  },
  "/import-export-code": {
    parent: "/other-registration",
    name: "Import Export Code",
  },
  "/pf-registration": {
    parent: "/other-registration",
    name: "PF Registration",
  },
  "/esi-registration": {
    parent: "/other-registration",
    name: "ESI Registration",
  },
  "/fssai-license-registration": {
    parent: "/other-registration",
    name: "FSSAI License Registration",
  },
  "/lei-registration": {
    parent: "/other-registration",
    name: "LEI Registration",
  },
  "/msme-udyam-registration": {
    parent: "/other-registration",
    name: "MSME (Udyam) Registration",
  },
  "/startup": { parent: "/", name: "Startup" },
  "/compliances": { parent: "/", name: "Compliances" },
  "/advisory": { parent: "/", name: "Advisory Services" },
  "/other-registration": { parent: "/", name: "Other Registration" },
  "/legal": { parent: "/", name: "Legal and Documentation" },
  "/blogs": { parent: "/", name: "Knowledge Hub" },
  "/calculators": { parent: "/", name: "Calculators" },
  "/faq": { parent: "/", name: "FAQs" },
  "/downloads": { parent: "/", name: "Downloads" },
  "/other-resources": { parent: "/", name: "Other Resources" },
  "/contact-us": { parent: "/", name: "Contact Us" },
  "/privacy": { parent: "/", name: "Privacy Policy" },
  "/terms": { parent: "/", name: "Terms and Conditions" },
};

function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const traverse = (path: string): BreadcrumbItem[] => {
    if (path === "/" || path === "/home") return [];

    if (path.startsWith("/blog/")) {
      const slugName = path
        .replace("/blog/", "")
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      return [...traverse("/blogs"), { name: slugName, path }];
    }

    const mapped = customMap[path];
    if (mapped) {
      return [...traverse(mapped.parent), { name: mapped.name, path }];
    }

    const pathnames = path.split("/").filter((x) => x);
    const items: BreadcrumbItem[] = [];
    let currentPath = "";
    pathnames.forEach((part) => {
      currentPath += "/" + part;

      const specialCases: Record<string, string> = {
        faq: "FAQs",
        "pf-registration": "PF Registration",
        "esi-registration": "ESI Registration",
        "fssai-license-registration": "FSSAI License Registration",
        "lei-registration": "LEI Registration",
        llp: "LLP",
      };

      let name = specialCases[part.toLowerCase()];
      if (!name) {
        name = part
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      items.push({ name, path: currentPath });
    });
    return items;
  };

  const breadcrumbs = [{ name: "Home", path: "/" }, ...traverse(pathname)];
  return breadcrumbs.filter(
    (v, i, a) => a.findIndex((t) => t.path === v.path) === i,
  );
}

export function Breadcrumbs() {
  const location = useLocation();

  if (location.pathname === "/" || location.pathname === "/home") {
    return null;
  }

  const breadcrumbs = getBreadcrumbs(location.pathname);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: "https://makeeazy.com" + (item.path === "/" ? "" : item.path),
    })),
  };

  return (
    <>
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Helmet>
      <div className="w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200 fixed top-20 left-0 z-40 h-10 flex items-center print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav
            className="flex text-[10px] sm:text-xs font-bold text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide"
            aria-label="Breadcrumb"
          >
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;
                const isFirst = index === 0;

                return (
                  <li key={item.path} className="inline-flex items-center">
                    {isFirst ? (
                      <Link
                        to={item.path}
                        className="inline-flex items-center hover:text-[#3150A0] transition-colors uppercase tracking-widest"
                      >
                        <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
                        {item.name}
                      </Link>
                    ) : (
                      <div className="flex items-center space-x-1 md:space-x-2">
                        <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
                        {isLast ? (
                          <span
                            className="text-[#3150A0] uppercase tracking-widest"
                            aria-current="page"
                          >
                            {item.name}
                          </span>
                        ) : (
                          <Link
                            to={item.path}
                            className="hover:text-[#3150A0] transition-colors uppercase tracking-widest"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
