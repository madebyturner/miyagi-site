export default function Insights() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Conversational Insights</h2>
          <p className="text-lg text-gray-600 mb-12">
            No dashboards to learn. Ask questions in plain language and get answers based on your actual call data. AI surfaces patterns, quantifies problems, and suggests solutions specific to your practice.
          </p>
        </div>

        <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 mb-16">
          <h3 className="text-lg font-medium mb-6">Example conversation</h3>
          <div className="space-y-6 text-sm">
            <div>
              <p className="text-gray-600 mb-2">You: "Why are patients complaining about wait times?"</p>
              <p className="text-gray-900 font-medium">Miyagi: "Tuesday afternoons show 47% longer call handling. Dr. Smith's appointments run 12 minutes over on average due to complex patient discussions."</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">You: "What can we do about it?"</p>
              <p className="text-gray-900 font-medium">Miyagi: "Consider scheduling buffer time after Dr. Smith's appointments, or creating an AI assistant to help with pre-appointment preparation calls."</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">You: "Show me the data"</p>
              <p className="text-gray-900 font-medium">Miyagi: "Here's a breakdown of Tuesday afternoon calls over the last 6 weeks..."</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h3 className="text-xl font-medium mb-4">What you can explore</h3>
            <ul className="space-y-3 text-gray-600">
              <li>• "What's our biggest time waster?"</li>
              <li>• "Which staff member handles X best?"</li>
              <li>• "Why are patients calling back?"</li>
              <li>• "What questions do we get most?"</li>
              <li>• "How do we compare to last month?"</li>
              <li>• "What's causing booking errors?"</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Types of insights</h3>
            <div className="space-y-4">
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Performance patterns</div>
                <p className="text-gray-600 text-sm">Peak times, seasonal trends, staff efficiency variations</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Problem identification</div>
                <p className="text-gray-600 text-sm">Bottlenecks, error sources, process inefficiencies</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-2">Opportunity spotting</div>
                <p className="text-gray-600 text-sm">Tasks suitable for AI assistance, workflow improvements</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium mb-6 tracking-tight">From insights to action</h3>
          <p className="text-lg text-gray-600 mb-8">
            Insights aren't just interesting data — they're the foundation for creating AI assistants that solve your specific problems.
          </p>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-base font-medium mb-2">Discover the problem</h4>
              <p className="text-gray-600 text-sm">
                "Insurance verification is taking 6.5 hours per week and causing delays"
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-base font-medium mb-2">Identify the solution</h4>
              <p className="text-gray-600 text-sm">
                "Jenny handles this best — let's train an AI assistant using her approach"
              </p>
            </div>
            <div className="border-l-2 border-gray-200 pl-6">
              <h4 className="text-base font-medium mb-2">Track the impact</h4>
              <p className="text-gray-600 text-sm">
                "AI assistant now handles 89% of queries, saving 6 hours weekly"
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}