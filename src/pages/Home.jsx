import { Link } from 'react-router-dom'
import { Target, Shield, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            AI that learns your practice, staff stay in control
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Turn every call into structured data. Automate admin work with AI that suggests first, acts only when approved. Built for Australian medical practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/how-miyagi-works" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              See how it works
            </Link>
          </div>
          <div className="text-gray-500">
            Trusted by 50+ Australian practices
          </div>
        </div>
      </div>

      {/* How it works */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Assist. Simulate. Approve. Audit.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn your practice, build AI assistants, deploy with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">1</div>
              <h3 className="text-lg font-medium mb-2">Connect & Learn</h3>
              <p className="text-gray-600 text-sm">Connect phone and PMS. Miyagi captures calls, builds Practice Ontology, maps your workflows.</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">2</div>
              <h3 className="text-lg font-medium mb-2">Create Tasks</h3>
              <p className="text-gray-600 text-sm">Teach AI Tasks with examples from your best staff. Insurance checks, bookings, payments.</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">3</div>
              <h3 className="text-lg font-medium mb-2">Simulate First</h3>
              <p className="text-gray-600 text-sm">Test Tasks on historical calls. See accuracy. Fix edge cases. Deploy only when confident.</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">4</div>
              <h3 className="text-lg font-medium mb-2">Staff Approve</h3>
              <p className="text-gray-600 text-sm">Mini-window shows ⚡ prompts during calls. Staff clicks to approve or handles manually.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/how-miyagi-works" className="text-gray-900 hover:text-gray-600 transition font-medium">
              See the complete 7-step process →
            </Link>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            What you get
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">For managers</div>
              <h3 className="text-xl font-medium mb-4">Practice Ontology</h3>
              <p className="text-gray-600">
                Ask questions about your practice in plain language. Every call becomes searchable data. Spot patterns, identify automation opportunities.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">For reception staff</div>
              <h3 className="text-xl font-medium mb-4">Receptionist Assistant</h3>
              <p className="text-gray-600">
                Mini-window during calls shows real-time guidance. One-click ⚡ actions for common tasks. Handles complexity without overwhelming staff.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">For everyone</div>
              <h3 className="text-xl font-medium mb-4">Incremental autonomy</h3>
              <p className="text-gray-600">
                Start with AI suggestions. Build trust through simulation. Increase autonomy only when ready. Per-task control over what AI can do.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/products" className="text-gray-900 hover:text-gray-600 transition font-medium">
              Explore all capabilities →
            </Link>
          </div>
        </div>
      </section>

      {/* Australian healthcare */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Built for Australian healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Not generic AI. Purpose-built for Australian medical practices with Medicare, bulk billing, PBS, and local compliance built-in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><Target className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Australian-specific</h4>
              <p className="text-gray-600">
                Medicare eligibility, bulk billing rules, PBS protocols, health fund variations. Understands your reality.
              </p>
            </div>
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><Shield className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Data stays local</h4>
              <p className="text-gray-600">
                Australian data centers. APP compliant. SOC 2 certified. No offshore processing. Your data never leaves Australia.
              </p>
            </div>
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><TrendingUp className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Proven results</h4>
              <p className="text-gray-600">
                10-20 hours saved weekly, 45% fewer errors, faster payments. Real outcomes from real Australian practices.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/security" className="text-gray-900 hover:text-gray-600 transition font-medium">
              Learn about security & compliance →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            See Miyagi in your practice
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            30-minute demo with your actual practice data. See how calls become insights, insights become automation.
          </p>
          <Link to="/request-demo" className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Request demo
          </Link>
        </div>
      </section>
    </>
  )
}