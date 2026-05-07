"use client"

import { motion } from 'framer-motion'
import { BiBookOpen, BiMapPin } from 'react-icons/bi';
import { CgCodeSlash } from 'react-icons/cg';
import { FaComputer } from 'react-icons/fa6';
import { MdMusicNote } from 'react-icons/md';
export function About() {
    return (
    <section id="about" className="scroll-mt-12">
      <motion.div
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
        className="flex md:flex-row flex-col gap-8"
      >
        <div className="flex-1 bg-white shadow-hard p-6 md:p-8 border-window">
          <h2 className="flex items-center gap-3 mb-6 pb-4 border-parchment border-b-2 border-dashed font-bold text-mocha text-3xl">
            About Me
          </h2>

          <div className="space-y-4 text-mocha text-lg leading-relaxed">
            <p>
              I&apos;m a full-stack developer who loves to work on complex problems with visible outcomes.
              I specialize in building responsive, accessible, and performant user interfaces using React and Typescript. As well as robust and powerful backend services using languages such as .Net, Go, and Java, depending on the need.
            </p>
            <p>
              I also love design and working with clients to create visually stunning and user-friendly interfaces. With experience in design work I bridge the gap between engineering and user experience, ensuring that what we build not only works flawlessly but feels good to use.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-8 pt-6 border-parchment border-t-2 border-dashed">
            <div className="flex items-center gap-2 font-mono-retro text-mocha-light">
              <BiMapPin size={18} className="text-peach" /> Cincinnati, OH
            </div>
            <div className="flex items-center gap-2 font-mono-retro text-mocha-light">
              <CgCodeSlash size={18} className="text-seafoam" /> 5+ Years Experience
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
          <div className="bg-white shadow-hard p-4 border-window">
            <h3 className="mb-3 pb-2 border-parchment border-b border-dashed font-mono-retro text-mocha-light text-sm uppercase tracking-widest">
              Currently
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BiBookOpen size={16} className="mt-1 text-peach shrink-0" />
                <div>
                  <div className="font-mono-retro text-mocha-light text-xs">
                    Learning
                  </div>
                  <div className="font-medium text-mocha text-sm">
                    Azure
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaComputer size={16} className="mt-1 text-seafoam shrink-0" />
                <div>
                  <div className="font-mono-retro text-mocha-light text-xs">
                    Working
                  </div>
                  <div className="font-medium text-mocha text-sm">
                    Base Building video game
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MdMusicNote size={16} className="mt-1 text-lilac shrink-0" />
                <div>
                  <div className="font-mono-retro text-mocha-light text-xs">
                    Listening
                  </div>
                  <div className="font-medium text-mocha text-sm">
                    Beach Vibes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}