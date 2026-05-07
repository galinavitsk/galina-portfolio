"use client"
import { motion } from 'framer-motion'
import { CgMail } from 'react-icons/cg';
import { GrGithub } from 'react-icons/gr';
import { LiaLinkedin } from 'react-icons/lia';
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-12">
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
        }}
        className="bg-seafoam shadow-hard p-6 md:p-10 border-window"
      >
        <div className="bg-white mx-auto p-8 md:p-10 border-window max-w-xl text-center">
          <h2 className="mb-4 font-bold text-mocha text-3xl">
            Get in Touch
          </h2>

          <p className="mb-8 text-mocha-light text-lg leading-relaxed">
            I&apos;m currently open for new opportunities. Whether you have a
            question, a project idea, or just want to connect, my inbox is
            always open.
          </p>

          <a
            href="mailto:galinavitsk@gmail.com"
            className="inline-flex items-center gap-3 bg-peach shadow-hard hover:shadow-none mb-10 px-8 py-3 border-2 border-mocha font-bold text-mocha no-underline transition-all hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <CgMail size={20} />
            Send an Email
          </a>

          <div className="flex justify-center gap-6 pt-8 border-parchment border-t-2 border-dashed">
            <SocialLink href="https://github.com/galinavitsk" icon={<GrGithub size={24} />} label="GitHub" />
            <SocialLink
              href="https://www.linkedin.com/in/galinavitsk"
              icon={<LiaLinkedin size={24} />}
              label="LinkedIn"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
function SocialLink({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-mocha hover:text-peach transition-all hover:-translate-y-1"
    >
      {icon}
    </a>
  )
}
