import React from "react";

const skillsData = [
  {
    category: "Test Automation",
    skills: ["Cypress", "Playwright", "Selenium WebDriver", "Appium", "Puppeteer"],
    color: "cyan",
  },
  {
    category: "Frameworks & Tools",
    skills: ["Jest", "Mocha", "Chai", "Cucumber / BDD", "TestNG", "JUnit"],
    color: "blue",
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    color: "slate",
  },
  {
    category: "CI/CD & Performance",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "JMeter", "K6", "Postman", "Docker"],
    color: "emerald",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Arsenal & <span className="text-cyan-400">Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset tailored for full-stack quality assurance, from UI automation to API performance testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((group, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/50 transition-colors group"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <span className={`w-2 h-2 rounded-full mr-3 bg-${group.color}-400 group-hover:animate-pulse`}></span>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 text-sm rounded-md bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
