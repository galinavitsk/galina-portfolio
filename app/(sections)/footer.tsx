export function Footer() {
  return (
    <footer className="mt-12 pt-8 pb-4 border-parchment border-t-2 border-dashed text-center">
      <div className="space-y-2 font-mono-retro text-mocha text-sm">
        <p>Built with React & Tailwind CSS with a sprinkle of motion</p>
        <p>
          Last updated {new Date().toLocaleDateString()} · ©{' '}
          {new Date().getFullYear()} Galina Vitvitskaya
        </p>
      </div>
    </footer>
  )
}
