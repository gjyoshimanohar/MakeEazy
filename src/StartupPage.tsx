import React from 'react';
import { ArrowLeft, Rocket, ArrowRight, User, Users, Briefcase, UserCheck, Building, Globe, Heart, Library, Plane } from 'lucide-react';

export default function StartupPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-200 selection:text-orange-900 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
              <Rocket className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold text-slate-900">Startup Services</h1>
              <p className="text-slate-500 mt-1">Foundation for your new business</p>
            </div>
          </div>
          
          <div className="text-justify space-y-6">
            <h2 className="text-2xl font-bold text-[#3150A0] mb-4">Starting a Business</h2>
            
            <p className="text-slate-700 leading-relaxed">
              Starting a business is an important step toward turning an idea, skill, or opportunity into a successful venture. It involves more than simply offering a product or service. A strong business begins with proper planning, a clear understanding of the market, the right legal structure, and a practical strategy for growth.
            </p>

            <p className="text-slate-700 leading-relaxed">
              For entrepreneurs, the early stages of business setup can be both exciting and challenging. Decisions related to business registration, taxation, compliance, funding, operations, and long-term planning can significantly affect the future success of the business. With the right guidance, new business owners can avoid common mistakes, reduce risks, and build a strong foundation from the beginning.
            </p>

            <p className="text-slate-700 leading-relaxed">
              At this stage, professional support can help entrepreneurs make informed decisions and move forward with confidence. A well-planned business is better prepared to manage challenges, attract customers, and grow sustainably.
            </p>

            <h2 className="text-2xl font-bold text-[#3150A0] mb-4 mt-8">Why Choosing the Correct Business Model Is Important</h2>
            
            <p className="text-slate-700 leading-relaxed">
              Choosing the right business model is one of the most important decisions when starting a business. A business model defines how a company will operate, generate revenue, serve customers, and achieve profitability. It acts as the foundation for the entire business strategy.
            </p>

            <p className="text-slate-700 leading-relaxed">
              The correct business model helps you understand who your customers are, what value you provide to them, how you will deliver your products or services, and how your business will earn income. It also supports better planning for costs, pricing, marketing, staffing, and future expansion.
            </p>

            <p className="text-slate-700 leading-relaxed">
              Selecting the wrong business model can lead to unnecessary expenses, operational difficulties, legal or tax complications, and limited growth opportunities. On the other hand, a suitable business model allows the business to function efficiently, remain competitive, and adapt to changing market conditions.
            </p>

            <p className="text-slate-700 leading-relaxed">
              A carefully selected business model provides clarity, direction, and stability. It helps business owners make better decisions, manage resources effectively, and build a business that is both profitable and sustainable in the long term.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#3150A0] mb-8 text-center">Types of Business Models in India</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Sole Proprietorship",
                  description: "A sole proprietorship is owned and controlled by one person. The owner makes all business decisions, receives all profits, and is personally responsible for all debts and obligations of the business.",
                  icon: User
                },
                {
                  title: "Partnership Firm",
                  description: "A partnership firm is formed when two or more people agree to run a business together. The partners share profits, responsibilities, and liabilities as per the partnership agreement.",
                  icon: Users
                },
                {
                  title: "Limited Liability Partnership",
                  description: "A Limited Liability Partnership, or LLP, combines the flexibility of a partnership with the benefit of limited liability. It is suitable for professionals, service businesses, and firms that want fewer compliances than a company.",
                  icon: Briefcase
                },
                {
                  title: "One Person Company",
                  description: "A One Person Company, or OPC, allows a single person to start a company with limited liability. It is a good option for solo entrepreneurs who want a corporate structure with legal protection.",
                  icon: UserCheck
                },
                {
                  title: "Private Limited Company",
                  description: "A Private Limited Company is a separate legal entity owned by shareholders. It is suitable for startups and growing businesses that may need investment, structured management, and long-term expansion.",
                  icon: Building
                },
                {
                  title: "Public Limited Company",
                  description: "A Public Limited Company can raise funds from the public by issuing shares. It is generally suitable for large businesses that want wider ownership and higher growth opportunities.",
                  icon: Globe
                },
                {
                  title: "Section 8 Company",
                  description: "A Section 8 Company is formed for charitable, educational, social, or non-profit purposes. Its profits are used for promoting its objectives rather than being distributed among members.",
                  icon: Heart
                },
                {
                  title: "Trust or Society",
                  description: "A trust or society is usually formed for social, charitable, religious, educational, or welfare activities. These structures are commonly used by NGOs and community-based organizations.",
                  icon: Library
                },
                {
                  title: "Branch Office or Subsidiary of Foreign Company",
                  description: "A foreign company can operate in India through a branch office, liaison office, project office, or subsidiary. This model is suitable for international businesses planning to enter the Indian market.",
                  icon: Plane
                }
              ].map((model, index) => {
                const IconContent = model.icon;
                return (
                <div 
                  key={index} 
                  className="group relative bg-white border border-slate-200 rounded-3xl p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer overflow-hidden flex flex-col text-left block"
                  onClick={() => {
                    if (model.title === "Sole Proprietorship") {
                      window.location.hash = "#sole-proprietorship";
                    } else if (model.title === "Partnership Firm") {
                      window.location.hash = "#partnership-firm";
                    } else if (model.title === "Limited Liability Partnership") {
                      window.location.hash = "#limited-liability-partnership";
                    } else if (model.title === "One Person Company") {
                      window.location.hash = "#one-person-company";
                    } else if (model.title === "Private Limited Company") {
                      window.location.hash = "#private-limited-company";
                    } else if (model.title === "Public Limited Company") {
                      window.location.hash = "#public-limited-company";
                    } else if (model.title === "Section 8 Company") {
                      window.location.hash = "#section-8-company";
                    } else if (model.title === "Trust or Society") {
                      window.location.hash = "#trust-or-society";
                    } else if (model.title === "Branch Office or Subsidiary of Foreign Company") {
                      window.location.hash = "#foreign-company";
                    }
                  }}
                >
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500" />
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors duration-300">
                    <IconContent className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#3150A0] mb-2 group-hover:text-orange-500 transition-colors pr-8">{model.title}</h3>
                  <p className="text-sm text-slate-600 leading-normal text-justify line-clamp-5">{model.description}</p>
                </div>
              );
              })}
            </div>
          </div>

          <div className="mt-16 bg-blue-50 border border-blue-100 rounded-2xl p-8 text-justify">
            <h3 className="text-xl font-bold text-[#3150A0] mb-2">Note</h3>
            <p className="text-slate-700 leading-relaxed">
              Choosing the right business structure is an important step in building a strong and compliant business. The ideal model depends on your business goals, investment plans, ownership structure, risk level, tax considerations, and future expansion strategy. Professional guidance at the initial stage can help you select the most suitable structure and complete the registration process smoothly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
