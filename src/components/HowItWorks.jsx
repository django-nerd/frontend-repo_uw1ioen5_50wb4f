import { CheckCircle2, UploadCloud, ScanLine, FileSignature } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: UploadCloud,
      title: 'Add your policies',
      desc: 'Scan a QR, upload PDFs, or forward emails—our parser organizes everything.'
    },
    {
      icon: ScanLine,
      title: 'We read the fine print',
      desc: 'Key coverage, exclusions, and renewal info are extracted automatically.'
    },
    {
      icon: FileSignature,
      title: 'Get proactive help',
      desc: 'Reminders, guidance, and one-tap assistance right when you need it.'
    },
    {
      icon: CheckCircle2,
      title: 'Stay protected',
      desc: 'Never miss renewals, keep documents handy, and understand your coverage.'
    }
  ]

  return (
    <section id="how" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <Icon className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-4 font-semibold text-white">{title}</h3>
              <p className="mt-1 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
