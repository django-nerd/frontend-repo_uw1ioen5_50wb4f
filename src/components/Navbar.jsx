import { Menu, ShieldCheck, Wallet, Smartphone } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/30 bg-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1px] shadow-lg">
              <div className="h-full w-full rounded-[10px] bg-slate-900/80 grid place-items-center">
                <Wallet className="h-5 w-5 text-cyan-300" />
              </div>
            </div>
            <span className="text-lg font-semibold tracking-tight">InsureWallet</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#services" className="hover:text-white transition">Assistance</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#cta" className="hover:text-white transition">Get the app</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#cta" className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 text-sm border border-white/10 transition">
              <Smartphone className="h-4 w-4" />
              Download
            </a>
            <button className="inline-flex md:hidden p-2 text-white/80 hover:text-white rounded-lg border border-white/10">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
