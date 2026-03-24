import React from "react";

const caseStudies = [
  {
    title: "Supportta Solutions Private Limited",
    description: "Currently pursuing a QA Internship to strengthen knowledge and gain hands-on experience in software testing methodologies, test case design, and execution.",
    tags: ["QA Domain", "Internship", "Active Learning"],
    metric: "Current Role",
  },
  {
    title: "Luminar Technologies",
    description: "Successfully completed formal QA training accompanied by a 6-month internship. Transitioned domain focus, gaining practical exposure to testing standards and practices.",
    tags: ["Training", "6-Month Internship", "QA"],
    metric: "Certification",
  },
  {
    title: "Elixr Labs Technologies",
    description: "Worked as an Operations Assistant for 3 years at Infopark, Kochi. Developed strong organizational, communication, and professional skills in an IT industry setting.",
    tags: ["Operations", "3 Years", "Infopark Kochi"],
    metric: "Professional Exp",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800/30 border-b border-slate-800 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <p className="text-slate-400 max-w-2xl">
            My career journey, transitioning from operations management to building expertise in the Quality Assurance domain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-cyan-900/20"
            >
              <div className="inline-block px-3 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 w-max">
                {project.metric}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-800">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-medium text-slate-500 bg-slate-800 px-2 py-1 rounded">
                    {tag}
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
