import { ShieldCheck, FileText, BellRing, Wallet, Headphones, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Wallet,
    title: 'Unified Policy Wallet',
    desc: 'Add policies from any insurer and keep everything organized with auto-tagging and reminders.'
  },
  {
    icon: FileText,
    title: 'Smart Documents',
    desc: 'Access digital ID cards, policy PDF, and claim forms in one tap, even offline.'
  },
  {
    icon: BellRing,
    title: 'Critical Alerts',
    desc: 'Renewals, premium due dates, NCB expiry, and coverage gaps—always informed in time.'
  },
  {
    icon: ShieldCheck,
    title: 'Coverage Insights',
    desc: 'Understand what’s covered and what’s not, with simple explanations and gaps highlighted.'
  },
  {
    icon: Headphones,
    title: '24/7 Assistance',
    desc: 'Request roadside help, hospital admission support, or claim guidance right from the app.'
  },
  {
    icon: Sparkles,
    title: 'Perks & Benefits',
    desc: 'Wellness rewards, partner discounts, and add-ons tailored to your profile.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Everything your policies need</h2>
          <p className="mt-3 text-white/70">Simple tools that save time and keep you protected.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/7.5 transition group">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-400/80 to-indigo-600/80 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="h-full w-full rounded-[10px] bg-slate-900/80 grid place-items-center">
                  <Icon className="h-5 w-5 text-cyan-200" />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-1 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
