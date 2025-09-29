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

      {/* Product demonstration */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Save 15 hours weekly with AI that understands Australian healthcare
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            Watch how Medicare eligibility, bulk billing, and appointment booking happen automatically—with staff approval.
          </p>

          {/* Simple visual concept */}
          <div className="border-2 border-gray-300 rounded-lg p-12 mb-8">
            <div className="space-y-8">
              {/* Before */}
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-2">Before: Manual process</div>
                <div className="text-gray-700">
                  Patient calls → Staff manually checks Medicare → Looks up availability → Explains billing options → Books appointment
                </div>
                <div className="text-sm text-gray-500 mt-2">Time: 8-12 minutes per call</div>
              </div>

              {/* Arrow */}
              <div className="text-center">
                <div className="text-2xl text-gray-400">↓</div>
              </div>

              {/* After */}
              <div className="text-left">
                <div className="text-sm text-gray-500 mb-2">After: AI-assisted process</div>
                <div className="text-gray-700">
                  Patient calls → Miyagi instantly checks Medicare → Suggests optimal time slot → Staff clicks one button to confirm
                </div>
                <div className="text-sm text-gray-500 mt-2">Time: 2-3 minutes per call</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-lg font-medium mb-4">Result: 65% faster call handling</div>
            <p className="text-gray-600 mb-8">Staff focus on patient care, not administrative tasks</p>
            <Link to="/request-demo" className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              See it in your practice
            </Link>
          </div>
        </div>
      </section>

      {/* How it works - simplified */}
      <hr className="border-gray-300 my-16" />
      <section className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-medium mb-6">Assist. Simulate. Approve. Audit.</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-3 mx-auto">1</div>
              <h4 className="font-medium mb-2">Connect & Learn</h4>
              <p className="text-gray-600 text-sm">Phone + PMS connected. AI learns your workflows.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-3 mx-auto">2</div>
              <h4 className="font-medium mb-2">Create Tasks</h4>
              <p className="text-gray-600 text-sm">Teach AI with examples from your best staff.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-3 mx-auto">3</div>
              <h4 className="font-medium mb-2">Simulate First</h4>
              <p className="text-gray-600 text-sm">Test on historical calls before going live.</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-3 mx-auto">4</div>
              <h4 className="font-medium mb-2">Staff Approve</h4>
              <p className="text-gray-600 text-sm">AI prompts appear. Staff stay in control.</p>
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