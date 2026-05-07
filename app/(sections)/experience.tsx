"use client";

import { motion } from 'framer-motion'
const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Vit Software',
    period: '2023 - Present',
    description:
      'Built and maintained high-performance React/TypeScript frontends and C#/.NET backend systems, including auditing features with Entity Framework Core that improved data traceability and cache reliability. Coordinated cross-team communication to reduce delivery blockers and keep sprints on track.',
    color: 'bg-[#FFB7B2]',
  },
  {
    role: 'Junior Full Stack Developer',
    company: 'Impact',
    period: '2021 - 2023',
    description:
      'Developed and maintained a full-stack web application using React, Vue.js, TypeScript, and Spring Boot/Java, managing state with Redux and building REST API endpoints. Stayed organized across sprints using Jira to track and deliver work efficiently.',
    color: 'bg-[#B5EAD7]',
  },
]
export function Experience() {
  return (
    <section id="experience" className="scroll-mt-12">
      <div className="mb-10">
        <h2 className="inline-block pb-4 border-[#E8E4DC] border-b-2 border-dashed font-bold text-[#4A4A4A] text-3xl">
          Experience
        </h2>
      </div>

      <div className="relative pl-4 md:pl-8">
        {/* Solid Vertical Line */}
        <div className="top-2 bottom-0 left-4 md:left-8 absolute border-[#E8E4DC] border-l-2 w-0"></div>

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                x: -10,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                margin: '-50px',
              }}
              transition={{
                delay: idx * 0.1,
              }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div
                className={`absolute -left-1.5 top-1.5 w-3.5 h-3.5 ${exp.color} border-2 border-[#4A4A4A] rounded-full`}
              >
              </div>

              <div className="bg-white shadow-hard p-5 md:p-6 border-window">
                <div className="flex md:flex-row flex-col md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="font-bold text-[#4A4A4A] text-xl">
                      {exp.role}
                    </h3>
                    <h4 className="mt-1 font-medium text-[#7A7A7A]">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="bg-[#FFFDF9] mt-2 md:mt-0 px-2 py-1 border border-[#E8E4DC] font-mono-retro text-[#7A7A7A] text-sm">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-4 text-[#4A4A4A] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
