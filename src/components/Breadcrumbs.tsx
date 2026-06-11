import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // If we are on the home page, don't show breadcrumbs
  if (pathnames.length === 0 || location.pathname === "/home") {
    return null;
  }

  const formatName = (name: string) => {
    // Handling specific path overrides if needed, otherwise format nicely
    const specialCases: Record<string, string> = {
      faq: "FAQs",
      "pf-registration": "PF Registration",
      "esi-registration": "ESI Registration",
      "fssai-license-registration": "FSSAI License Registration",
      "lei-registration": "LEI Registration",
      llp: "LLP",
    };

    if (specialCases[name.toLowerCase()]) {
      return specialCases[name.toLowerCase()];
    }

    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200 fixed top-20 left-0 z-40 h-10 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <nav
          className="flex text-[10px] font-bold text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide"
          aria-label="Breadcrumb"
        >
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center hover:text-[#3150A0] transition-colors uppercase tracking-widest"
              >
                <Home className="w-3 h-3 mr-1" />
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              let to = `/${pathnames.slice(0, index + 1).join("/")}`;

              // Handle aliases for nested routes that don't match exactly
              if (to === "/blog") to = "/blogs";

              return (
                <li key={to}>
                  <div className="flex items-center">
                    <ChevronRight className="w-3 h-3 text-slate-400 mx-1" />
                    {last ? (
                      <span
                        className="text-[#3150A0] uppercase tracking-widest"
                        aria-current="page"
                      >
                        {formatName(value)}
                      </span>
                    ) : (
                      <Link
                        to={to}
                        className="hover:text-[#3150A0] transition-colors uppercase tracking-widest"
                      >
                        {formatName(value)}
                      </Link>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
