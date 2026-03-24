import React from "react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800/50 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-slate-900 border border-slate-700 p-8 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-sm font-mono text-slate-300 overflow-x-auto">
                <code className="block text-green-400 mb-2">// Background</code>
                <code className="block">const arjun = {'{'}</code>
                <code className="block text-cyan-400">  degree: "B.Com",</code>
                <code className="block text-purple-400">  diploma: "PDCFA",</code>
                <code className="block text-yellow-500">  certification: "QA Training",</code>
                <code className="block">  skills: ["Manual Testing", "Automation"],</code>
                <code className="block">  status: "QA Intern"</code>
                <code className="block">{'}'};</code>
              </pre>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Motivated and detail-oriented professional with a B.Com degree, Diploma in PDCFA, and 3 years of experience as an Operations Assistant at Elixr Labs Technologies, Infopark Kochi.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Seeking to transition into the Quality Assurance (QA) domain after successfully completing QA training and a 6-month internship at Luminar Technologies. Currently pursuing further hands-on experience through an internship at Supportta Solutions Private Limited. Passionate about learning, adapting to new challenges, and building a strong career in software testing and quality assurance.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                <h3 className="text-3xl font-bold text-cyan-400 mb-1">3+</h3>
                <p className="text-slate-500 text-sm">Years Operations Exp</p>
              </div>
              <div className="p-4 rounded-lg bg-slate-900 border border-slate-800">
                <h3 className="text-3xl font-bold text-blue-400 mb-1">QA</h3>
                <p className="text-slate-500 text-sm">Trained & Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
