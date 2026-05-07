import { HiHeart } from "react-icons/hi";
import { About } from "./(sections)/about";
import {Hero} from "./(sections)/hero";
import { Skills } from "./(sections)/skills";
import { Projects } from "./(sections)/projects";
import { Experience } from "./(sections)/experience";
import { Contact } from "./(sections)/contact";
export default function Home() {
  return (
      <main className="flex flex-col flex-1 gap-20 pb-20">
        <Hero />
        <About />
        <div className="flex flex-row justify-center items-center gap-x-20 font-mono-retro text-mocha-light text-center">
          <HiHeart size={16} /><HiHeart size={16} /><HiHeart size={16} />
        </div>
        <Skills />
        <div className="flex flex-row justify-center items-center gap-x-20 font-mono-retro text-mocha-light text-center">
          <HiHeart size={16} /><HiHeart size={16} /><HiHeart size={16} />
        </div>
        <Projects />
        <div className="flex flex-row justify-center items-center gap-x-20 font-mono-retro text-mocha-light text-center">
          <HiHeart size={16} /><HiHeart size={16} /><HiHeart size={16} />
        </div>
        <Experience />
        <div className="flex flex-row justify-center items-center gap-x-20 font-mono-retro text-mocha-light text-center">
          <HiHeart size={16} /><HiHeart size={16} /><HiHeart size={16} />
        </div>
        <Contact />
      </main>
  )
}
