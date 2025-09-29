import { Link } from 'react-router-dom'
import { Target, Shield, TrendingUp } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero #top */}
      <div id="top" className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div>
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

      {/* Expected outcomes #outcomes */}
      <hr className="border-gray-300 my-16" />
      <section id="outcomes" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            Expected outcomes for your practice
          </h2>

          <div className="border-2 border-gray-300 rounded-lg p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6">Time savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Admin tasks automated:</span>
                    <span className="font-medium">70-80%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Hours saved per week:</span>
                    <span className="font-medium">10-20hrs</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Training time reduced:</span>
                    <span className="font-medium">60%</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-6">Quality improvements</h3>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Booking accuracy:</span>
                    <span className="font-medium">+45%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Patient wait times:</span>
                    <span className="font-medium">-30%</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-2">
                    <span className="text-gray-600">Payment processing:</span>
                    <span className="font-medium">2-3 days faster</span>
                  </div>
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
        <div className="max-w-5xl">
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

      {/* Trust & security #trust */}
      <hr className="border-gray-300 my-16" />
      <section id="trust" className="py-32 border-2 border-gray-300 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            Built for Australian healthcare
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Test before deploy</div>
              <p className="text-gray-600">
                Test Tasks before staff see them. You approve what goes live.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Australian data</div>
              <p className="text-gray-600">
                Australian data centres. APP compliant. End-to-end encryption.
              </p>
            </div>

            <div className="border border-gray-300 rounded-lg p-6">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Granular permissions</div>
              <p className="text-gray-600">
                Control what AI sees and does. Revoke access anytime. Audit trails track every decision.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/security" className="text-gray-900 hover:text-gray-600 transition font-medium">
              Read security documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Value proposition #value */}
      <hr className="border-gray-300 my-16" />
      <section id="value" className="py-32">
        <div className="max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Built for medical practice reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with input from practice managers and reception staff.
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-lg p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium mb-6">Common challenges</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400">→</span>
                    <span>High staff turnover requiring constant training</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Complex billing rules and insurance requirements</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Manual follow-ups consuming hours daily</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Inconsistent service across different staff</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-6">How Miyagi helps</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="text-black">✓</span>
                    <span>Real-time guidance reduces training from weeks to days</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black">✓</span>
                    <span>Automated eligibility checks and billing codes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black">✓</span>
                    <span>Loops handle follow-ups automatically</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-black">✓</span>
                    <span>Standardized workflows with flexibility when needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium mb-8 text-center">Why practices choose Miyagi</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center border border-gray-300 rounded-lg p-6">
                <div className="flex justify-center mb-4"><Target className="w-10 h-10 text-black" /></div>
                <h4 className="text-lg font-medium mb-2">Practice-specific AI</h4>
                <p className="text-gray-600">
                  Learns your specific workflows, policies, and preferences — not generic automation.
                </p>
              </div>
              <div className="text-center border border-gray-300 rounded-lg p-6">
                <div className="flex justify-center mb-4"><Shield className="w-10 h-10 text-black" /></div>
                <h4 className="text-lg font-medium mb-2">Human oversight built-in</h4>
                <p className="text-gray-600">
                  Staff approve every action. Start with full control, increase autonomy as trust builds.
                </p>
              </div>
              <div className="text-center border border-gray-300 rounded-lg p-6">
                <div className="flex justify-center mb-4"><TrendingUp className="w-10 h-10 text-black" /></div>
                <h4 className="text-lg font-medium mb-2">Measurable improvements</h4>
                <p className="text-gray-600">
                  Track time saved, errors reduced, and cash flow improved with real-time dashboards.
                </p>
              </div>
            </div>
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