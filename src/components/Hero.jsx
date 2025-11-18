import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(1000px_circle_at_90%_10%,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs text-white/80 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Your policies, one smart wallet
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Insurance that moves with you
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Store policies from any insurer, access documents instantly, and get real-time assistance when it matters most.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-5 py-3 font-medium shadow-lg shadow-cyan-500/20 hover:opacity-95 transition">Get started</a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white px-5 py-3 font-medium hover:bg-white/15 transition">Explore features</a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
