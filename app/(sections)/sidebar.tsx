
export function Sidebar(){
return <aside className="top-8 z-50 sticky w-full md:w-56 h-fit shrink-0">
        <div className="bg-white shadow-hard mb-6 p-4 border-window">
          <h2 className="mb-4 pb-2 border-pachment border-b border-dashed font-mono-retro text-mocha-light text-sm uppercase tracking-widest">
            Navigation
          </h2>
          <ul className="flex flex-col gap-2 font-mono-retro text-lg">
            <li>
              <a
                href="#home"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:bg-background px-3 py-2 border-transparent hover:border-peach border-l-2 text-mocha hover:text-peach transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Status Widget */}
        <div className="bg-white shadow-hard p-4 border-window">
          <p className="mb-2 pb-2 border-pachment border-b border-dashed font-mono-retro text-mocha-light text-sm uppercase tracking-widest">
            Status
          </p>
          <div className="flex items-center gap-2 mt-3">
            <span className="bg-seafoam border border-mocha rounded-full w-2.5 h-2.5 animate-pulse"></span>
            <span className="font-mono-retro text-mocha text-base">
              Available for work
            </span>
          </div>
        </div>
      </aside>
}