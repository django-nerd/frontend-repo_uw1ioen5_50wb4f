import { Smartphone, Download, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-cyan-500/15 via-indigo-600/15 to-sky-400/15 border border-white/15 p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Carry every policy in one smart wallet</h3>
              <p className="mt-2 text-white/80">Join the waitlist to get early access and special launch perks.</p>

              <form className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Your email" className="flex-1 rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder:text-white/60 outline-none focus:ring-2 focus:ring-cyan-400" />
                <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-slate-100 transition">
                  <Mail className="h-4 w-4" /> Join waitlist
                </button>
              </form>

              <div className="mt-4 flex items-center gap-4 text-white/70 text-sm">
                <div className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> No spam</div>
                <div className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Cancel anytime</div>
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-600 p-[1px]">
                    <div className="h-full w-full rounded-[10px] bg-slate-900/80 grid place-items-center">
                      <Smartphone className="h-5 w-5 text-cyan-200" />
                    </div>
                  </div>
                  <div className="text-white/80">
                    <div className="font-medium text-white">Download the app</div>
                    <div className="text-sm">iOS and Android</div>
                  </div>
                  <button className="ml-auto inline-flex items-center gap-2 rounded-lg bg-white/10 border border-white/15 px-3 py-2 text-sm text-white hover:bg-white/15 transition">
                    <Download className="h-4 w-4" /> Get link
                  </button>
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <div className="text-sm text-white/70">
                  Auto-detects car and health policies • Smart reminders • Claim guidance • Emergency support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
