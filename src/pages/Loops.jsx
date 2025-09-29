export default function Loops() {
  return (
    <>
      <section className="py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">Loops</h2>
          <p className="text-lg text-gray-600 mb-12">
            Custom AI workers trained by your team. Loops learn from your best staff and provide real-time guidance through an on-screen mini window, making your entire team faster and more consistent.
          </p>
        </div>

        <div className="space-y-16 mb-24">
          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Step 1: Discovery</div>
            <h3 className="text-xl font-medium mb-4">Identify time-consuming tasks</h3>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-2">You: "What's taking up most of our time?"</p>
                  <p className="text-gray-900 font-medium">Miyagi: "Insurance verification takes 6.5 hours weekly across 47 calls. Each call averages 8.3 minutes."</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">You: "Can we make this faster?"</p>
                  <p className="text-gray-900 font-medium">Miyagi: "Yes. Should I create a Loop for insurance verification?"</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Practice Ontology identifies which tasks consume the most time, then suggests creating Loops to automate the biggest time sinks.
            </p>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Step 2: Training</div>
            <h3 className="text-xl font-medium mb-4">Show examples from your best staff</h3>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <div className="text-sm mb-4 text-gray-500">Miyagi shows you recent calls where staff handled insurance verification:</div>
              <div className="space-y-3 text-sm">
                <div className="p-4 bg-white rounded border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Call #1 - Jenny handling</span>
                    <span className="text-gray-500">3.2 minutes</span>
                  </div>
                  <p className="text-gray-600 text-xs">Patient asks about bulk billing → Jenny checks age (42) → Checks concession status (no card) → Explains gap payment clearly → Patient books</p>
                </div>
                <div className="p-4 bg-white rounded border border-gray-200">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Call #2 - Jenny handling</span>
                    <span className="text-gray-500">2.8 minutes</span>
                  </div>
                  <p className="text-gray-600 text-xs">Patient asks about costs → Jenny checks patient is 14 → Confirms bulk billed → Patient books immediately</p>
                </div>
              </div>
              <button className="mt-4 text-sm text-gray-900 font-medium">✓ Train the Loop using Jenny's approach</button>
            </div>
            <p className="text-gray-600 leading-relaxed">
              You select examples of how your best staff handle the task. The Loop learns from their approach — what questions to ask, what data to check, how to explain policies.
            </p>
          </div>

          <div>
            <div className="text-sm uppercase tracking-wider text-gray-400 mb-4">Step 3: Mini window assistance</div>
            <h3 className="text-xl font-medium mb-4">Real-time guidance during calls</h3>
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 mb-6">
              <div className="text-sm mb-4 text-gray-500">What staff see on-screen during an insurance verification call:</div>
              <div className="p-4 bg-white rounded border border-gray-200">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Detected:</span>
                    <span className="text-gray-900">Insurance verification inquiry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Patient:</span>
                    <span className="text-gray-900">Sarah Chen (#4421)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Loop suggests:</span>
                    <span className="text-gray-900">"Check age and concession status first"</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
                    Sarah is 42 without concession card → Gap payment applies: $45
                  </div>
                  <button className="w-full px-4 py-2 bg-black text-white text-sm rounded">
                    Explain gap payment to patient
                  </button>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your staff see intelligent prompts and suggestions, making them faster and more consistent. They stay in control of every interaction.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-medium mb-6 tracking-tight">Control the assistance level</h3>
          <p className="text-lg text-gray-600 mb-12">
            Start with simple guidance and increase assistance as trust builds. Your team always stays in control.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Guidance mode</div>
              <p className="text-gray-600">Shows suggestions and prompts on screen. Staff make all decisions and take all actions.</p>
            </div>
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Assistance mode</div>
              <p className="text-gray-600">Prepares actions and responses. Staff review and approve with one click before execution.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}