import React from 'react';
import { ArrowRight, Rocket, Ship, Truck, Briefcase, HeartPulse, Building2, Copyright, Fingerprint, Calculator, Store, FileSignature, Utensils, LayoutGrid } from 'lucide-react';

const REGISTRATIONS = [
  { title: "Startup India", icon: Rocket },
  { title: "ICEGATE", icon: Ship },
  { title: "Import Export Code", icon: Truck },
  { title: "PF Registration", icon: Briefcase },
  { title: "ESI Registration", icon: HeartPulse },
  { title: "Udyam (MSME)", icon: Building2 },
  { title: "Trade Mark", icon: Copyright },
  { title: "Legal Entity Identification", icon: Fingerprint },
  { title: "Professional Tax", icon: Calculator },
  { title: "Shop & Establishment", icon: Store },
  { title: "Trade License", icon: FileSignature },
  { title: "FSSAI License", icon: Utensils }
];

export default function OtherRegistrationPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
              <LayoutGrid className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-slate-900">Other Registrations</h1>
              <p className="text-slate-500 mt-1">Additional Services</p>
            </div>
          </div>
          
          <div className="text-justify space-y-6">
            <p className="text-slate-700 leading-relaxed max-w-3xl">
              Explore our comprehensive range of specialized registrations and licenses tailored to keep your business compliant and competitive.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {REGISTRATIONS.map((reg, index) => {
                const IconContent = reg.icon;
                const hrefPath = 
                  reg.title === "Startup India" ? "#startup-india" : 
                  reg.title === "ICEGATE" ? "#icegate" : 
                  reg.title === "Import Export Code" ? "#import-export-code" : 
                  reg.title === "PF Registration" ? "#pf-registration" :
                  reg.title === "ESI Registration" ? "#esi-registration" :
                  reg.title === "Udyam (MSME)" ? "#udyam-registration" :
                  reg.title === "Trade Mark" ? "#trademark-registration" :
                  reg.title === "Legal Entity Identification" ? "#lei-registration" :
                  reg.title === "Professional Tax" ? "#professional-tax-registration" :
                  reg.title === "Shop & Establishment" ? "#shop-establishment-registration" :
                  reg.title === "Trade License" ? "#trade-license-registration" :
                  reg.title === "FSSAI License" ? "#fssai-license-registration" :
                  "#under-construction";
                return (
                <a
                  key={index}
                  href={hrefPath}
                  className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block"
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                    <IconContent className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors pr-8">
                    {reg.title}
                  </h3>
                </a>
              );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
