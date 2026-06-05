import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Users, Star, ArrowRight, UploadCloud, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { ConsultantDeskIllustration } from './App';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
  });
  const [resume, setResume] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    if (!resume) {
      setErrorMessage('Please upload your resume.');
      setStatus('error');
      return;
    }

    const data = new FormData();
    data.append('firstName', formData.firstName);
    data.append('lastName', formData.lastName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('role', formData.role);
    data.append('resume', resume);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', role: '' });
        setResume(null);
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to submit application. Please check your network and try again.');
    }
  };

  return (
    <div className="pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <a href="/about-us" className="inline-flex items-center text-sm font-semibold text-[#3150A0] hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 text-orange-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
              Join Our Team
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-[#3150A0] leading-[1.1] tracking-tight mb-6">
              Build your career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-400">MakeEazy</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              We are a team of passionate professionals dedicated to simplifying compliance for businesses. Join us to make a real impact.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2 border border-orange-400 group">
              View Open Positions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            <ConsultantDeskIllustration />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-orange-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#3150A0] mb-6">Why work with us?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-blue-50 text-[#3150A0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Professional Growth</h3>
              <p className="text-slate-600">Continuous learning and opportunities to work on diverse compliance domains.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-blue-50 text-[#3150A0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Great Culture</h3>
              <p className="text-slate-600">A collaborative and supportive environment that values every team member's input.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center group">
              <div className="w-16 h-16 bg-blue-50 text-[#3150A0] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#3150A0] group-hover:text-white transition-colors">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Impactful Work</h3>
              <p className="text-slate-600">Help businesses grow by solving their complex compliance and financial challenges.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl shadow-slate-200/50">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#3150A0] mb-4">
                Can't find a suitable job?
              </h3>
              <p className="text-slate-600 text-lg">
                Share your details and upload your resume. We will get back to you when we have a suitable opportunity for you.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="Last Name" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="Email Address" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="Phone Number" />
              </div>
              
               <div className="space-y-2">
                <label htmlFor="role" className="text-sm font-medium text-slate-700">Role Interested In</label>
                <input type="text" id="role" value={formData.role} onChange={handleInputChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. Tax Consultant, Auditor" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Upload Resume</label>
                <div className="w-full px-4 py-8 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors flex flex-col items-center justify-center cursor-pointer relative">
                    <input type="file" id="resume" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" required />
                    <UploadCloud className="w-8 h-8 text-slate-400 mb-2" />
                    <span className="text-sm text-slate-600 font-medium text-center">
                      {resume ? resume.name : "Click to upload or drag and drop"}
                    </span>
                    <span className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                </div>
              </div>

              {status === 'error' && (
                <div className="p-4 rounded-xl bg-red-50 flex items-start gap-3 border border-red-100">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-800">{errorMessage}</p>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-green-50 flex items-start gap-3 border border-green-100">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-green-800">Your application has been received successfully. We will get back to you soon!</p>
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'} className="w-full bg-[#3150A0] hover:bg-[#243d7d] text-white px-6 py-4 rounded-xl text-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-2 group mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Details
                    <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
