import React from 'react';
import { ArrowLeft, Calculator, Calculator as CalculatorIcon } from 'lucide-react';

export default function Calculators() {
  const calculators = [
    { name: "Income Tax Calculator (Old vs New)", icon: CalculatorIcon, color: "text-emerald-500", bg: "bg-emerald-50", href: "#income-tax-calculator" },
    { name: "GST late Fee calculator", icon: CalculatorIcon, color: "text-orange-500", bg: "bg-orange-50", href: "#gst-late-fee-calculator" },
    { name: "TDS late fee Calculator", icon: CalculatorIcon, color: "text-blue-500", bg: "bg-blue-50", href: "#tds-late-fee-calculator" },
    { name: "TDS Interest Calculator", icon: CalculatorIcon, color: "text-rose-500", bg: "bg-rose-50", href: "#tds-interest-calculator" },
    { name: "HRA Calculator", icon: CalculatorIcon, color: "text-blue-500", bg: "bg-blue-50", href: "#hra-calculator" },
    { name: "ROC late fee Calculator", icon: CalculatorIcon, color: "text-green-500", bg: "bg-green-50", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-display text-4xl font-bold text-[#3150A0] mb-4">Calculators</h1>
            <p className="text-lg text-slate-600 leading-normal text-justify sm:text-center">
              Use our quick and easy calculators to estimate fees and penalties.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((calc, index) => {
              const Icon = calc.icon;
              return (
                <a 
                  href={calc.href}
                  target={(calc as any).target || "_self"}
                  rel={(calc as any).target === "_blank" ? "noopener noreferrer" : undefined}
                  key={index}
                  className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden text-left block"
                >
                  <div className={`w-14 h-14 rounded-2xl ${calc.bg} ${calc.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#3150A0] group-hover:text-orange-500 transition-colors">
                    {calc.name}
                  </h3>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
