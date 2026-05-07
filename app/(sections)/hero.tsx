'use client'

import { motion } from 'framer-motion'
import { GiCat } from 'react-icons/gi';
export function Hero() {
  return (
    <section className="relative pt-8 md:pt-16" id="home">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="flex md:flex-row flex-col items-center md:items-start gap-10"
      >
        {/* Avatar */}
        <div className="flex justify-center items-center bg-peach shadow-hard border-window w-32 md:w-40 h-32 md:h-40 -rotate-2 transform shrink-0">
          <span className="block text-5xl md:text-6xl"><GiCat /></span>
        </div>

        <div className="flex-1">
          <p className="mb-3 font-mono-retro text-mocha text-lg">
            {'>'} hi<span className="animate-blink">_</span>
          </p>

          <h1 className="mb-4 font-bold text-mocha text-5xl md:text-6xl tracking-tight">
            I&apos;m <span className="text-peach">Galina</span>
          </h1>

          <div className="mb-6 font-handwriting text-mocha-light text-2xl md:text-3xl">
            Full-Stack Software Engineer
          </div>

          <p className="mb-8 pl-5 border-seafoam border-l-4 max-w-2xl text-mocha text-lg md:text-xl leading-relaxed">
            I build fun, accessible, and user-friendly web experiences, with a focus on clean code and delightful interfaces.
            Currently specializing in React for frontend and .Net for backend.
          </p>

          <div className="flex flex-wrap gap-4 font-mono-retro text-base">
            <a
              href="#projects"
              className="bg-seafoam shadow-hard hover:shadow-none px-6 py-3 border-2 border-mocha text-mocha no-underline transition-all hover:translate-x-0.5 hover:translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white shadow-hard hover:shadow-none px-6 py-3 border-[#4A4A4A] border-2 text-[#4A4A4A] no-underline transition-all hover:translate-x-0.5 hover:translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
