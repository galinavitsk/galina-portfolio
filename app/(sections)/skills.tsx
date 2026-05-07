"use client"

import { motion } from 'framer-motion'
const skillCategories = [
  {
    title: 'Languages',
    color: 'bg-peach',
    skills: ['TypeScript', 'C#', 'CSS3/Sass', 'Java'],
  },
  {
    title: 'Frameworks & Libraries',
    color: 'bg-seafoam',
    skills: ['React', 'Next.js', '.Net', 'Tailwind CSS', 'Framer Motion', 'Tanstack Table', 'Entity Framework'],
  },
  {
    title: 'Tools & Testing',
    color: 'bg-lilac',
    skills: ['Git/GitHub', 'Figma', 'Slack', 'Jira'],
  },
]
export function Skills() {
  return (
    <section id="skills" className="scroll-mt-12">
      <div className="mb-8">
        <h2 className="inline-block pb-4 border-parchment border-b-2 border-dashed font-bold text-mocha text-3xl">
          Technical Skills
        </h2>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: '-50px',
            }}
            transition={{
              delay: idx * 0.1,
            }}
            className="flex flex-col bg-white shadow-hard border-window"
          >
            <div
              className={`${category.color} border-b-2 border-mocha px-4 py-2 font-bold text-mocha`}
            >
              {category.title}
            </div>

            <div className="flex-1 p-5">
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-mocha"
                  >
                    <span className="font-mono-retro text-peach text-sm">
                      {'>'}
                    </span>{' '}
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
