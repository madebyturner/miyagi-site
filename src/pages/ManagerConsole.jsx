import { Link } from 'react-router-dom'

export default function ManagerConsole() {
  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Manager Console
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            One brain built from your practice data. Three sections managers use to explore insights, create Tasks, and build Loops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/how-miyagi-works" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              See how it works
            </Link>
            <Link to="/request-demo" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              Request demo
            </Link>
          </div>
        </div>
      </div>

      {/* #what-it-is */}
      <section id="what-it-is" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            One brain, three sections
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Everything your practice knows—calls, patterns, workflows—lives in one place. The Manager Console gives you three ways to work with that knowledge.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Understand</div>
              <h3 className="text-xl font-medium mb-3">Practice Ontology</h3>
              <p className="text-gray-600 text-sm">
                Ask questions about your practice. Every call becomes searchable, verifiable data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Automate</div>
              <h3 className="text-xl font-medium mb-3">AI Operations</h3>
              <p className="text-gray-600 text-sm">
                Create Tasks, compose them into Loops. Simulate before deploying. Control autonomy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Connect</div>
              <h3 className="text-xl font-medium mb-3">Connections</h3>
              <p className="text-gray-600 text-sm">
                See what's integrated. Manage what AI can access. Audit what's been done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* #explore */}
      <section id="explore" className="py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Explore feature</div>
            <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
              Ask questions about your practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              The Explore bar appears throughout the Manager Console. Ask in plain language, get answers backed by your actual data.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-400">Ask about your practice...</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "What's taking up most of our time?"</p>
                <p className="text-sm text-gray-900 font-medium">Miyagi: "Insurance verification takes 6.5 hours weekly across 47 calls. Each call averages 8.3 minutes."</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "Which staff member handles this best?"</p>
                <p className="text-sm text-gray-900 font-medium">Miyagi: "Jenny completes insurance calls in 3.2 minutes average. She checks age first, then concession status."</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "Can we automate this?"</p>
                <p className="text-sm text-gray-900 font-medium">Miyagi: "Yes. I can create a Task using Jenny's approach. Would you like to start?"</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 max-w-3xl">
            Explore is available in all three sections of the Manager Console. It's not a separate page—it's a layer that helps you understand and act on your practice data, wherever you are.
          </p>
        </div>
      </section>

      {/* #sections */}
      <section id="sections" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            Three sections, one workflow
          </h2>

          <div className="space-y-16">
            <Link to="/products/manager/ontology" className="group block">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition">Practice Ontology</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    Every call becomes structured data. Ask questions, verify via transcripts, spot patterns. When you see a problem worth solving, Miyagi suggests creating a Task.
                  </p>
                  <div className="text-sm text-gray-900 font-medium group-hover:underline">
                    Explore Practice Ontology →
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products/manager/ai-operations" className="group block">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition">AI Operations (Tasks & Loops)</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    Define reusable Tasks by teaching with examples. Compose Tasks into Loops for complete workflows. Simulate before deploying. Set autonomy levels per Task.
                  </p>
                  <div className="text-sm text-gray-900 font-medium group-hover:underline">
                    Explore AI Operations →
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/products/manager/connections" className="group block">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-gray-600 transition">Connections</h3>
                  <p className="text-gray-600 mb-6 max-w-2xl">
                    See what's connected (phones, PMS, payments). Manage what AI can access and what actions it can take. Review audit logs for every automated action.
                  </p>
                  <div className="text-sm text-gray-900 font-medium group-hover:underline">
                    Explore Connections →
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* #control */}
      <section id="control" className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Control the confidence ladder
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Start with AI assistance, build trust through transparency, increase autonomy only when you're ready.
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Assist</h3>
                <p className="text-gray-600 max-w-2xl">AI suggests actions, staff approve. The Mini-window shows prompts with ⚡ badges. One click to approve, or ignore and handle manually.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">👁</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Supervised</h3>
                <p className="text-gray-600 max-w-2xl">AI takes action automatically, staff monitor. See what was done in real-time. Intervene if needed. Audit trail shows every decision.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Autonomous</h3>
                <p className="text-gray-600 max-w-2xl">AI handles complete workflows independently. Escalates when uncertain or when rules require human judgment. Staff focus on exceptions only.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              <strong className="text-gray-900">Remember:</strong> You control autonomy per Task within each Loop. Insurance verification might run autonomously while complex billing stays assist-only. It's not all-or-nothing.
            </p>
          </div>
        </div>
      </section>

      {/* #proof */}
      <section id="proof" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Open the source record
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every insight, suggestion, and action is backed by real data. Click to see the transcript or record that supports it.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="mb-6">
              <div className="text-sm text-gray-500 mb-2">Miyagi insight:</div>
              <p className="text-gray-900 font-medium">"Jenny handles insurance verification 40% faster than team average"</p>
            </div>

            <button className="text-sm text-gray-600 hover:text-gray-900 transition underline">
              View source: 23 calls analyzed →
            </button>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Sample calls</div>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-gray-50 rounded">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Call #4421 - Jenny</span>
                    <span className="text-gray-500">3.2 min</span>
                  </div>
                  <p className="text-gray-600 text-xs">Patient asks about bulk billing → Jenny checks age (42) → Checks concession (no) → Explains gap payment</p>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Call #4398 - Jenny</span>
                    <span className="text-gray-500">2.8 min</span>
                  </div>
                  <p className="text-gray-600 text-xs">Patient asks about costs → Jenny checks age (14) → Confirms bulk billed → Patient books</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 max-w-3xl">
            Transparency builds trust. When Miyagi suggests creating a Task or shows you a pattern, you can always verify the underlying data. Audio available where permitted.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to see the Manager Console?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Book a demo and we'll walk through all three sections with your actual practice data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/how-miyagi-works" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              How Miyagi Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
