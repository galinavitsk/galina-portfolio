"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FaDiceD20 } from 'react-icons/fa';
import { GrGithub } from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
const projects = [
  {
    icon: <FaDiceD20/>,
    title: 'Quest Scheduler',
    description:
      'A tool for scheduling your dnd sessions. Allows DMs to set up windows they are available in, then players put in their availability in 30 minute chunks. And finally they can all look at a summary page to find a perfect time for them all to meet for that 4 hour session. Also allows specifying how many players and which players are required for a session.',
    color: 'bg-peach',
    tags: ['React', 'Tailwind', 'Postgres', 'Go'],
    links:[
        {type: 'github', url: 'https://github.com/galinavitsk/availability-scheduler', tooltip:"View Frontend on GitHub"},
        {type: 'github', url: 'https://github.com/galinavitsk/availability-scheduler-api', tooltip:"View Backend on GitHub"},
        {type: 'external', url: 'https://quest-scheduler.vercel.app/', tooltip:"View Live"},
    ]
  },
]
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-12">
      <div className="mb-8">
        <h2 className="inline-block pb-4 border-parchment border-b-2 border-dashed font-bold text-mocha text-3xl">
          Selected Work
        </h2>
      </div>

      <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
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
            className="flex flex-col bg-white shadow-hard hover:shadow-[6px_6px_0px_0px_#4A4A4A] p-6 border-window transition-all hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-12 h-12 ${project.color} border-2 border-mocha text-mocha flex items-center justify-center`}
              >
                {project.icon}
              </div>
              {project.links.map((link) => (<div key={link.url}>
                <Tooltip id={link.url} disableStyleInjection className="bg-parchment! text-mocha!" noArrow />
                <a
                  target="_blank"
                  data-tooltip-id={link.url}
                  data-tooltip-content={link.tooltip}
                  href={link.url}
                  className="text-mocha-light hover:text-mocha transition-colors"
                  aria-label={link.tooltip}
                >
                  {link.type === 'github' ? (
                    <GrGithub size={20} />
                  ) : (
                    <FiExternalLink size={20} />
                  )}
                </a>
                </div>
              ))}
            </div>

            <h3 className="mb-3 font-bold text-mocha text-2xl">
              {project.title}
            </h3>

            <p className="flex-1 mb-6 text-mocha-light leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-parchment border-t border-dashed">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-background px-2 py-1 border border-parchment font-mono-retro text-mocha-light text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
