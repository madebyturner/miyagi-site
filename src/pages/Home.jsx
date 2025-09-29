import { Link } from 'react-router-dom'
import { Target, Shield, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero #top */}
      <div id="top" className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Automate admin work, Miyagi learns your practice, you control what happens.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            A real-time knowledge map of your practice — powering safe automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/how-miyagi-works" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              See how Miyagi works
            </Link>
          </div>
          <div className="text-gray-500">
            <div>Trusted by 50+ Australian practices</div>
          </div>
        </div>
      </div>

      {/* Mini-window moment #demo */}
      <hr className="border-gray-300 my-16" />
      <section id="demo" className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">See it in action</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Staff approve with one click</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mini-window shows guidance during calls. ⚡ marks actions ready to approve.
            </p>
          </div>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
              <div className="text-gray-400">
                [Demo: Insurance check → ⚡ prompt → one click → done]
              </div>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="font-medium">Patient asks about bulk billing</div>
                  <div className="text-gray-600">Miyagi checks eligibility. Staff clicks ⚡ to confirm.</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl">⚡</span>
                <div>
                  <div className="font-medium">Call continues</div>
                  <div className="text-gray-600">Task completes. Staff stay in control.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* How it works #flow */}
      <hr className="border-gray-300 my-16" />
      <section id="flow" className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Connect. Build. Deploy.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand your practice. Build automation. Scale when ready.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">1</div>
              <h3 className="text-xl font-medium mb-2">Connect your systems</h3>
              <p className="text-gray-600">Connect phone, PMS, payments. Miyagi learns from calls and data.</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">2</div>
              <h3 className="text-xl font-medium mb-2">Build custom Tasks</h3>
              <p className="text-gray-600">Teach Tasks with examples from your best staff. Miyagi handles bookings, insurance, payments.</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm font-medium mb-4">3</div>
              <h3 className="text-xl font-medium mb-2">Deploy with approvals</h3>
              <p className="text-gray-600">Simulate first. Deploy with approvals. Increase autonomy as trust builds.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/how-miyagi-works" className="text-gray-900 hover:text-gray-600 transition font-medium">
              See the complete process →
            </Link>
          </div>
        </div>
      </section>

      {/* Products overview #products */}
      <hr className="border-gray-300 my-16" />
      <section id="products" className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            Two products, one system
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            <Link to="/products/manager" className="group block border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">For owners/managers</div>
              <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition">Manager Console</h3>
              <p className="text-gray-900 text-lg mb-6 leading-snug">
                See what takes time. Query your practice data.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Explore call patterns. Build Tasks. Compose Loops. Control what runs.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div>• Practice Ontology—query your operations</div>
                <div>• AI Operations—create Tasks, build Loops</div>
                <div>• Connections—manage integrations</div>
              </div>
              <div className="text-sm text-gray-900 font-medium group-hover:underline">
                Explore Manager Console →
              </div>
            </Link>

            <Link to="/products/receptionist-assistant" className="group block border border-gray-300 rounded-lg p-6 hover:border-gray-400 transition-colors">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">For reception staff</div>
              <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition">Receptionist Assistant</h3>
              <p className="text-gray-900 text-lg mb-6 leading-snug">
                Reduce errors and training time. Handle calls faster.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Mini-window appears during calls. Shows prompts and actions. Staff approve with ⚡.
              </p>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div>• Real-time guidance with ⚡ actions</div>
                <div>• Inline Explore for policy questions</div>
                <div>• One-click approvals for common tasks</div>
              </div>
              <div className="text-sm text-gray-900 font-medium group-hover:underline">
                See Mini-window in action →
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* Built for Australian healthcare #australian */}
      <hr className="border-gray-300 my-16" />
      <section id="australian" className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Built for Australian healthcare reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed specifically for Australian practices. Understands Medicare, bulk billing, and the unique workflows that make your practice work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Medicare integration</div>
              <p className="text-gray-600">
                Automated eligibility checks, bulk billing workflows, and safety net calculations built-in.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">PBS & health funds</div>
              <p className="text-gray-600">
                Understands PBS scripts, health fund variations, and referral requirements across Australia.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Practice workflows</div>
              <p className="text-gray-600">
                Learns your specific Australian practice patterns, billing cycles, and compliance needs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><Target className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Practice-specific learning</h4>
              <p className="text-gray-600">
                Learns your workflows, policies, and Australian compliance requirements.
              </p>
            </div>
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><Shield className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Australian data protection</h4>
              <p className="text-gray-600">
                Data stays in Australia. APP compliant. Staff control every automated action.
              </p>
            </div>
            <div className="text-center border border-gray-300 rounded-lg p-6">
              <div className="flex justify-center mb-4"><TrendingUp className="w-10 h-10 text-black" /></div>
              <h4 className="text-lg font-medium mb-2">Proven results</h4>
              <p className="text-gray-600">
                10-20 hours saved weekly, 45% fewer errors, 2-3 days faster payments.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/security" className="text-gray-900 hover:text-gray-600 transition font-medium">
              Read about security & Australian compliance →
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA #cta */}
      <hr className="border-gray-300 my-16" />
      <section id="cta" className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            See how Miyagi works in your practice
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            30-minute demo. See Practice Ontology, build a Task, simulate live.
          </p>
          <Link to="/request-demo" className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Request demo
          </Link>
        </div>
      </section>
    </>
  )
}