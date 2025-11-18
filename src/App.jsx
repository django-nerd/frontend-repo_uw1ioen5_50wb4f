import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 pointer-events-none opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_0%_0%,rgba(34,211,238,0.15),transparent_60%),radial-gradient(800px_circle_at_100%_0%,rgba(99,102,241,0.1),transparent_60%)]" />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} InsureWallet. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
