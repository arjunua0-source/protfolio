import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900 opacity-90"></div>
        {/* Subtle grid background for tech feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl animate-fade-in-up order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              Hi, I&apos;m Arjun U A
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Software Tester & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                QA Professional
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Meticulous Software Tester specializing in both automated frameworks and exploratory manual testing. I ensure code quality, performance, and bulletproof user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a href="#experience" className="px-8 py-3 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_25px_rgba(8,145,178,0.6)]">
                View Experience
              </a>
              <a href="#contact" className="px-8 py-3 rounded-md bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium transition-colors">
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-slate-800 shadow-[0_0_30px_rgba(8,145,178,0.3)]">
              {/* Note: User must save the image as profile.jpg in the public folder */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Profile of Arjun U A" className="object-cover w-full h-full" />
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-500/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
