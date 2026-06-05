import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, HardHat } from 'lucide-react';

export default function UnderConstructionPage() {
  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden"
        >
          {/* Construction Illustration */}
          <div className="flex justify-center mb-8 relative">
            <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center absolute -top-4 -z-10 animate-pulse" />
            <HardHat className="w-24 h-24 text-orange-500" />
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0] mb-4">
            Under Construction
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto">
            We are upgrading with advanced features, stay connected.
          </p>

          <a 
            href="/home" 
            className="inline-flex items-center justify-center bg-[#3150A0] hover:bg-[#243d7d] text-white px-6 py-3 rounded-full text-base font-semibold transition-all shadow-md group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
}
