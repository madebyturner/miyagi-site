import { Link } from 'react-router-dom'

export default function ProductOverview() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">AI that works with your team</h2>
          <p className="text-lg text-gray-600">
            Miyagi learns how your practice works, then creates AI assistants that help your staff handle calls more efficiently. Your team stays in control, AI provides the support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <Link to="/practice-ontology" className="group">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Practice Ontology</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-gray-600 transition">Living knowledge graph</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Every call captured, transcribed, and analysed. Entities discovered, relationships mapped, patterns identified. Your practice operations become structured data.
            </p>
            <div className="text-sm text-gray-900 font-medium group-hover:underline">
              Learn more →
            </div>
          </Link>

          <Link to="/insights" className="group">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Conversational Insights</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-gray-600 transition">Explore through dialogue</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              No dashboards to learn. Ask questions in plain language. AI surfaces patterns, quantifies problems, suggests solutions based on your actual data.
            </p>
            <div className="text-sm text-gray-900 font-medium group-hover:underline">
              Learn more →
            </div>
          </Link>

          <Link to="/ai-operations" className="group">
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">AI Operations</div>
            <h3 className="text-xl font-medium mb-4 group-hover:text-gray-600 transition">Custom AI workers</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Train custom AI workers (Loops) by showing them how your best staff handle specific tasks. They provide real-time guidance through an on-screen mini window.
            </p>
            <div className="text-sm text-gray-900 font-medium group-hover:underline">
              Learn more →
            </div>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-gray-50 -mx-6 lg:-mx-12 px-6 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-16 tracking-tight">What you can automate</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Insurance verification</div>
              <p className="text-gray-600">Automatically check eligibility, verify coverage, explain gap payments. Handles bulk billing rules, private billing, and edge cases.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Test results</div>
              <p className="text-gray-600">Release results to patients, flag abnormals, book follow-ups, notify practitioners. Handles privacy checks and urgent cases.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Appointment booking</div>
              <p className="text-gray-600">Schedule appointments, handle practitioner preferences, manage complex requirements. Applies practice-specific booking rules.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Payment processing</div>
              <p className="text-gray-600">Take deposits, explain costs, set up payment plans. Integrated with your systems, following your policies.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">New patient intake</div>
              <p className="text-gray-600">Collect demographics, explain policies, gather medical history. Customised to your practice's requirements.</p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">WorkCover claims</div>
              <p className="text-gray-600">If your practice handles WorkCover, Miyagi learns your specific workflow. Every practice is different.</p>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-12">
            These are examples. Practice Ontology discovers YOUR unique workflows and problems. AI assistants are created to solve what matters to your practice, not generic templates.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">Technical capabilities</h2>
          <p className="text-lg text-gray-600 mb-12">
            Built for Australian healthcare practices with technical depth where it matters.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Integrations</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Phone system connectivity (VoIP, PSTN)</li>
                <li>• Practice management systems</li>
                <li>• Payment processing (Stripe, Square)</li>
                <li>• Calendar sync (Google, Outlook)</li>
                <li>• WhatsApp Business API</li>
              </ul>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">AI capabilities</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time call transcription</li>
                <li>• Natural language understanding</li>
                <li>• Pattern recognition and learning</li>
                <li>• Context-aware decision making</li>
                <li>• Voice synthesis (when needed)</li>
              </ul>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Deployment options</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Staff assistance mode (on-screen)</li>
                <li>• Background automation mode</li>
                <li>• Full AI receptionist mode</li>
                <li>• Hybrid approaches per assistant</li>
              </ul>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Monitoring & control</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Real-time performance metrics</li>
                <li>• Call recordings and transcripts</li>
                <li>• AI decision transparency</li>
                <li>• Manual override always available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}