import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              TesterPortfolio
            </Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Skills
              </Link>
              <Link href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                Experience
              </Link>
              <Link href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium border border-slate-700 hover:border-cyan-400">
                Contact Me
              </Link>
            </div>
          </div>
          {/* Mobile menu button (Simplified for now - can be wired to state later) */}
          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
