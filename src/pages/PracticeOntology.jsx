import { Link } from 'react-router-dom'

export default function PracticeOntology() {
  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Practice Ontology
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Every call becomes structured, searchable data. Ask questions, verify via transcripts, discover what's worth automating.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/products/manager" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              Manager Console overview
            </Link>
          </div>
        </div>
      </div>

      {/* #explore */}
      <section id="explore" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Conversational insights, no dashboards
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            The Explore bar lets you ask questions in plain language. Get answers backed by your actual call data, with follow-up suggestions and "Create Task" prompts.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200 mb-12">
            <div className="mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-400">Ask about your practice...</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "What's causing the most frustration for staff?"</p>
                <p className="text-sm text-gray-900 font-medium mb-3">Miyagi: "Staff mention 'confusing' or 'complicated' 34 times weekly around insurance questions. 78% involve bulk billing eligibility."</p>
                <button className="text-xs text-gray-600 hover:text-gray-900 underline">View 12 example calls →</button>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-2">Miyagi suggests:</p>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
                    ⚡ Create Task: Insurance Verification
                  </button>
                  <button className="px-4 py-2 bg-white text-gray-900 text-sm rounded border border-gray-300 hover:bg-gray-50 transition">
                    Show me more patterns
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">What you can explore</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• "What's taking up most time?"</li>
                <li>• "Which staff handle [task] best?"</li>
                <li>• "Why are patients calling back?"</li>
                <li>• "What questions come up repeatedly?"</li>
                <li>• "Show me calls about [topic]"</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Follow-ups & suggestions</h3>
              <p className="text-gray-600 mb-4">
                Miyagi doesn't just answer—it suggests next steps. "Create Task" prompts appear when automation makes sense. Follow-up questions help you drill deeper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* #entities */}
      <section id="entities" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Entities: Patients, Practitioners, Calls, Call Types
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every call is analyzed and structured. Miyagi identifies who's involved, what's being discussed, and why—building a living map of your practice.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Patients</div>
              <p className="text-gray-600 mb-4">
                Linked to their call history, appointment patterns, common questions. Privacy-protected but searchable by pattern.
              </p>
              <div className="text-xs text-gray-500">
                Example: "Show me patients who ask about bulk billing multiple times"
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Practitioners</div>
              <p className="text-gray-600 mb-4">
                Availability patterns, booking preferences, patient demographics. Used to optimize scheduling and reduce conflicts.
              </p>
              <div className="text-xs text-gray-500">
                Example: "Which doctor has the most complex patient discussions?"
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Calls</div>
              <p className="text-gray-600 mb-4">
                Full transcripts (where permitted), duration, outcome, sentiment. Every call is a learning opportunity.
              </p>
              <div className="text-xs text-gray-500">
                Example: "Show me calls where staff couldn't answer the question"
              </div>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Call Types (Call Reasons)</div>
              <p className="text-gray-600 mb-4">
                Automatically categorized: booking, insurance, test results, billing, etc. Shows volume and trends over time.
              </p>
              <div className="text-xs text-gray-500">
                Example: "What's our most common call type?"
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              <strong className="text-gray-900">Relationships matter:</strong> Miyagi doesn't just categorize—it maps relationships. Which patients call about which topics? Which staff handle which call types best? These connections reveal automation opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* #verification */}
      <section id="verification" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Verify via transcript or record
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every insight can be verified. Click through to see the actual transcript or listen to the call (where permitted). No black box—complete transparency.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Call #4421</div>
                  <div className="font-medium">Sarah Chen asking about bulk billing</div>
                </div>
                <div className="text-sm text-gray-500">3.2 min</div>
              </div>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:00</span>
                  <p className="text-gray-600">Sarah: "Hi, I wanted to check if Dr. Chen bulk bills?"</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:12</span>
                  <p className="text-gray-600">Jenny: "Let me check... Sarah, you're 42, is that right?"</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:18</span>
                  <p className="text-gray-600">Sarah: "Yes, that's correct."</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:20</span>
                  <p className="text-gray-600">Jenny: "And do you have a concession card?"</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:24</span>
                  <p className="text-gray-600">Sarah: "No, I don't."</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-gray-500 min-w-[80px]">00:26</span>
                  <p className="text-gray-600">Jenny: "Okay, so Dr. Chen bulk bills for patients under 16 and concession card holders. For you, there would be a gap payment of about $45."</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">View full transcript</button>
                <span className="text-gray-300">|</span>
                <button className="text-sm text-gray-600 hover:text-gray-900 underline">Play audio</button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600 text-sm">
                Audio playback available where practice has granted recording permissions. All transcripts preserved for verification and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* #coverage */}
      <section id="coverage" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Coverage: Connected vs missing sources
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Practice Ontology shows what data sources are connected and what's missing. More connections = richer insights and better automation.
          </p>

          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Phone System</div>
                    <div className="text-sm text-gray-500">All calls captured & transcribed</div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">Connected</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Practice Management System</div>
                    <div className="text-sm text-gray-500">Patient records, appointments, billing</div>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">Connected</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Payment System</div>
                    <div className="text-sm text-gray-500">Would enable payment automation & tracking</div>
                  </div>
                </div>
                <Link to="/products/manager/connections" className="text-sm text-gray-900 font-medium hover:underline">Connect →</Link>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp Business</div>
                    <div className="text-sm text-gray-500">Optional: Handle patient messages via WhatsApp</div>
                  </div>
                </div>
                <span className="text-sm text-gray-400">Not connected</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 max-w-3xl">
            The more sources connected, the richer your Practice Ontology becomes. Each new connection reveals more patterns and creates more automation opportunities.
          </p>
        </div>
      </section>

      {/* #handoff */}
      <section id="handoff" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            From insight to action
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            When you discover a problem worth solving, Miyagi suggests creating a Task. One click takes you from data to automation.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-2">You discovered:</div>
                <p className="text-gray-900 font-medium mb-4">"Insurance verification takes 6.5 hours weekly. Jenny completes calls 40% faster by checking age first, then concession status."</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="text-sm text-gray-500 mb-3">Miyagi suggests:</div>
                <Link to="/products/manager/ai-operations" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                  <span>⚡</span>
                  <span>Create Task: Insurance Verification</span>
                </Link>
                <p className="text-sm text-gray-500 mt-3">
                  I'll use Jenny's calls as training examples and create a reusable Task you can add to Loops.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/products/manager/ai-operations" className="text-gray-900 hover:text-gray-600 transition font-medium">
              Learn about Tasks & Loops →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            See your practice as data
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Book a demo and we'll show you what Practice Ontology reveals about your operations—using your actual call data.
          </p>
          <Link to="/request-demo" className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Request demo
          </Link>
        </div>
      </section>
    </>
  )
}