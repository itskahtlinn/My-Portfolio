"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut", duration: 0.5, delayChildren: 0.1, staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <section id="about" className="w-full py-16 flex flex-col items-center bg-white text-[#0B192C]">
      {/* Tabs */}
      <div
        className="inline-flex items-center rounded-md bg-zinc-200 p-1 shadow-md"
        role="tablist"
        aria-label="About tabs"
      >
        <button
          onClick={() => setActiveTab("skills")}
          role="tab"
          aria-selected={activeTab === "skills"}
          className={`group flex items-center gap-2 rounded-md px-8 py-2 text-sm font-medium transition ${
            activeTab === "skills" ? "bg-[#0B192C] text-white shadow" : "text-[#0B192C]"
          }`}
        >
          <img
            src="/assets/code.svg"
            alt=""
            aria-hidden="true"
            className={`w-4 h-4 transition ${activeTab === "skills" ? "invert brightness-0" : ""}`}
          />
          My Skills
        </button>

        <button
          onClick={() => setActiveTab("experience")}
          role="tab"
          aria-selected={activeTab === "experience"}
          className={`flex items-center gap-2 rounded-md px-10 py-2 text-sm font-medium transition ${
            activeTab === "experience" ? "bg-[#0B192C] text-white shadow" : "text-[#0B192C]"
          }`}
        >
          <img
            src="/assets/briefcase.svg"
            alt=""
            aria-hidden="true"
            className={`w-4 h-4 transition ${activeTab === "experience" ? "invert brightness-0" : ""}`}
          />
          Experience
        </button>
      </div>

      {/* Section title (dynamic) */}
      <h2 className="text-2xl font-semibold text-[#0B192C] mb-3 py-10">
        {activeTab === "skills" ? "Development Stack" : "Experience Timeline"}
      </h2>

      {/* Content */}
      <div className="-mt-6 w-full max-w-6xl mx-auto text-center">
        {activeTab === "skills" ? (
          <>
            <p className="text-zinc-700 max-w-3xl mx-auto mb-10">
              These are the technologies, frameworks, and tools I use to design and develop—from creating intuitive
              UI/UX to building responsive frontend applications.
            </p>

            {/* 3 Column Skills Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {/* Front-end Development */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-1">Front-end Development</h3>
                <p className="text-sm text-zinc-600 mb-6">Building responsive and interactive user interfaces</p>

                <motion.div
                  className="grid grid-cols-3 gap-4 mx-auto"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { src: "/assets/html-logo.svg", label: "HTML" },
                    { src: "/assets/css-logo.svg", label: "CSS" },
                    { src: "/assets/js-logo.svg", label: "JavaScript" },
                    { src: "/assets/tailwind-logo.svg", label: "TailwindCSS" },
                    { src: "/assets/react-logo.svg", label: "ReactJS" },
                    { src: "/assets/angular-logo.svg", label: "Angular" },
                  ].map((t) => (
                    <motion.div
                      key={t.label}
                      variants={item}
                      className="flex flex-col items-center justify-center gap-1 p-5 border rounded-lg shadow-sm w-20 h-20 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      <img src={t.src} alt={t.label} className="w-5 h-5" />
                      <span className="text-[10px] font-medium leading-none mt-1">{t.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Design & Tools */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-1">Design &amp; Tools</h3>
                <p className="text-sm text-zinc-600 mb-6">Design, development, and productivity tools</p>

                <motion.div
                  className="grid grid-cols-3 gap-4 mx-auto"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { src: "/assets/figma-logo.svg", label: "Figma" },
                    { src: "/assets/ps-logo.svg", label: "AdobePS" },
                    { src: "/assets/canva-logo.svg", label: "Canva" },
                    { src: "/assets/unity-logo.svg", label: "Unity" },
                    { src: "/assets/git-logo.svg", label: "Git" },
                    { src: "/assets/vercel-logo.svg", label: "Vercel" },
                    { src: "/assets/vscode-logo.svg", label: "VSCode" },
                    { src: "/assets/trello-logo.svg", label: "Trello" },
                    { src: "/assets/typescript-icon.svg", label: "Typescript" },
                  ].map((t) => (
                    <motion.div
                      key={t.label}
                      variants={item}
                      className="flex flex-col items-center justify-center gap-1 p-5 border rounded-lg shadow-sm w-20 h-20 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      <img src={t.src} alt={t.label} className="w-6 h-6" />
                      <span className="text-xs font-medium leading-none mt-1">{t.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Languages */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-lg font-semibold mb-1">Languages</h3>
                <p className="text-sm text-zinc-600 mb-6">Building responsive and interactive user interfaces</p>

                <motion.div
                  className="grid grid-cols-3 gap-4 mx-auto"
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {[
                    { src: "/assets/js-logo.svg", label: "JavaScript" },
                    { src: "/assets/python-logo.svg", label: "Python" },
                    { src: "/assets/c-logo.svg", label: "C#" },
                  ].map((t) => (
                    <motion.div
                      key={t.label}
                      variants={item}
                      className="flex flex-col items-center justify-center gap-1 p-5 border rounded-lg shadow-sm w-20 h-20 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                    >
                      <img src={t.src} alt={t.label} className="w-6 h-6" />
                      <span className="text-xs font-medium leading-none mt-1">{t.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </>
        ) : (
          /* EXPERIENCE TIMELINE */
          <motion.section
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-4xl text-left"
            aria-labelledby="experience-title"
          >
            <p className="text-zinc-600 text-center max-w-2xl mx-auto mb-8">
              Showcasing my internships that strengthened my journey in frontend development and UI/UX design.
            </p>

            {[
              {
                logo: "/assets/SMI-logo.svg", 
                role: "Front-end Developer Intern & UI/UX Designer",
                company: "SmoothMoves Inc.",
                dates: "August 2024–December 2024",
                location: "Makati City",
                type: "Internship",
                bullets: [
                  "Designed logos and icons for the company’s payroll system.",
                  "Helped lead the redesign of the company website, making it modern, responsive, and user-friendly.",
                  "Collaborated with a co-intern to develop E-Notify (visitor management app) — front-end & UI/UX.",
                  "Worked closely with the development team to ensure cohesive design and seamless experiences.",
                ],
              },
              {
                logo: "/assets/BEST-logo.svg",
                role: "Web Developer Intern",
                company: "Backend Solutions & Technologies Inc.",
                dates: "August 2025–October 2025",
                location: "Hybrid Set-up",
                type: "Internship",
                bullets: [
                  "Recreated an existing company system UI using React.js and Angular for better usability.",
                  "Contributed to Securipay v2.0 (web app) in front-end development and UI enhancements.",
                  "Collaborated in a hybrid Agile environment: stand-ups, sprints, and testing for high-quality output.",
                ],
              },
            ].map((exp) => (
              <article
                key={exp.role + exp.company}
                className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm p-5 md:p-6 mb-6"
              >
                {/* Badge */}
                <span className="absolute right-4 top-4 inline-flex items-center rounded-md bg-emerald-100 text-emerald-700 text-[11px] font-semibold px-2 py-1">
                  {exp.type}
                </span>

                {/* Header row */}
                <div className="flex items-start gap-3">
                  {/* Logo */}
                  <div className="shrink-0 rounded-lg border border-zinc-200 bg-white p-2">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-12 w-10 object-contain" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="text-base md:text-lg font-semibold leading-snug">{exp.role}</h4>
                    <p className="text-sm text-zinc-600">{exp.company}</p>

                    {/* meta */}
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-zinc-500">
                      <span className="inline-flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7Zm14 8H3v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Z"
                          />
                        </svg>
                        {exp.dates}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80" aria-hidden="true">
                          <path
                            fill="currentColor"
                            d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5Z"
                          />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullets */}
                <div className="mt-4">
                  <h5 className="text-sm font-semibold text-zinc-800 mb-1">Key Responsibilities &amp; Contributions:</h5>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-700">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </motion.section>
        )}
      </div>
    </section>
  );
}
