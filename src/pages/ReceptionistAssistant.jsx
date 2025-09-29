import { Link } from 'react-router-dom'

export default function ReceptionistAssistant() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Receptionist Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Mini-window appears during calls. Transcribes live. Suggests actions. Staff clicks ⚡ or ignores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/how-miyagi-works" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              See how Miyagi works
            </Link>
          </div>
        </div>
      </div>

      <section id="what-it-is" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Mini-window on every call
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Call comes in. Mini-window shows who, what, next. Staff clicks or handles manually.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Mini-window during call</div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-sm font-medium mb-2">Call transcript (live)</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div><span className="text-gray-400">[Patient]</span> Hi, I'm calling about insurance coverage for my appointment</div>
                      <div><span className="text-gray-400">[Staff]</span> Sure, let me check that for you</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 rounded">
                    <div className="text-sm font-medium mb-2">Patient context</div>
                    <div className="text-xs text-gray-600">
                      <div>Name: Sarah Chen</div>
                      <div>Last visit: 2 weeks ago</div>
                      <div>Upcoming: Dr. Smith, Thursday 2pm</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">⚡</span>
                      <span className="text-sm font-medium text-blue-900">Check bulk billing status</span>
                    </div>
                    <div className="text-xs text-blue-800 mb-3">Patient age & concession determine eligibility</div>
                    <button className="w-full px-4 py-2 bg-black text-white text-xs rounded hover:bg-gray-800 transition">
                      Run check
                    </button>
                  </div>

                  <div className="p-4 bg-gray-100 rounded opacity-60">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">⚡</span>
                      <span className="text-sm font-medium text-gray-700">Next: confirm & book</span>
                    </div>
                    <div className="text-xs text-gray-600 mb-3">If eligible, complete booking</div>
                    <button className="w-full px-4 py-2 bg-gray-300 text-gray-600 text-xs rounded" disabled>
                      Confirm bulk billing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 max-w-3xl">
            Staff clicks ⚡ to run or ignores and handles their way. Mini-window supports, never interrupts.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Transcript → prompt → one click
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Audio becomes text. Intent triggers Task. Prompt appears. Staff clicks to action.
          </p>

          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Call transcribed in real-time</h3>
                <p className="text-gray-600 mb-4">
                  Audio stream converts to text. Appears with 2-3 second delay. Staff reads along while talking.
                </p>
                <div className="p-4 bg-gray-50 rounded text-sm text-gray-600">
                  <div className="mb-2">[12:34] <span className="font-medium">Patient:</span> Can I book with Dr. Smith?</div>
                  <div>[12:35] <span className="font-medium">Staff:</span> Let me check availability</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Intent detected, prompt generated</h3>
                <p className="text-gray-600 mb-4">
                  Intent recognized. Task selected. Prompt appears with ⚡ badge. Happens automatically.
                </p>
                <div className="p-4 bg-blue-50 rounded border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚡</span>
                    <span className="text-sm font-medium">Check Dr. Smith availability this week</span>
                  </div>
                  <div className="text-xs text-gray-600">Task: Appointment booking | Calendar: Google</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Staff clicks, Task runs</h3>
                <p className="text-gray-600 mb-4">
                  One click executes Task. Result shows in Mini-window. Staff reads to patient.
                </p>
                <div className="p-4 bg-gray-50 rounded text-sm">
                  <div className="text-gray-900 font-medium mb-2">Available times for Dr. Smith:</div>
                  <div className="space-y-1 text-gray-600">
                    <div>• Tuesday 2:00 PM</div>
                    <div>• Thursday 10:30 AM</div>
                    <div>• Friday 3:15 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Explore works here too
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Ask questions during or after calls. Same interface as Manager Console.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="mb-6">
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-400">Ask about this call or patient...</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "Has this patient called about this before?"</p>
                <p className="text-sm text-gray-900 font-medium">Miyagi: "Yes. Sarah Chen called 3 times last month asking about bulk billing. Each time: under 65, no concession card."</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">You: "What should I tell her?"</p>
                <p className="text-sm text-gray-900 font-medium">Miyagi: "Gap fee $42 for this appointment type. Offer payment plan if needed."</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-8 max-w-3xl">
            Explore helps staff handle edge cases without escalating to managers.
          </p>
        </div>
      </section>

      <section id="demo" className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            See it in action
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            10-second loop. Transcript appears. Prompt generates. Staff clicks. Result shows.
          </p>

          <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">[10s looping video: Mini-window in action]</p>
          </div>

          <div className="mt-8 text-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors inline-block">
              Book demo
            </Link>
          </div>
        </div>
      </section>

      <section id="safety" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Safety by design
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Staff must click to approve. No automatic actions. All Tasks audited. Escalates when uncertain.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Click to approve</div>
              <h3 className="text-xl font-medium mb-3">Staff stays in control</h3>
              <p className="text-gray-600 text-sm">
                ⚡ prompts need one click to run. Staff reads, decides to click or ignore. No surprises.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Audit trail</div>
              <h3 className="text-xl font-medium mb-3">Every action logged</h3>
              <p className="text-gray-600 text-sm">
                Which Task ran, who clicked, what accessed, what changed. Managers review in Connections audit log.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Escalation</div>
              <h3 className="text-xl font-medium mb-3">AI says "I don't know"</h3>
              <p className="text-gray-600 text-sm">
                When uncertain, Miyagi escalates: "This is unusual—handle manually." Staff takes over.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="requirements" className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            What you need
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Compatible phone system. Screen for Mini-window. Connected PMS. No hardware changes.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Phone system</h3>
              <p className="text-gray-600 mb-4">
                VoIP (RingCentral, 3CX, Twilio) or PSTN with API access. Must support audio streaming for transcription.
              </p>
              <div className="text-sm text-gray-500">
                We check compatibility during onboarding.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Desktop setup</h3>
              <p className="text-gray-600 mb-4">
                Computer with monitor for Mini-window display. Works on Windows, Mac, or browser. No mobile version yet.
              </p>
              <div className="text-sm text-gray-500">
                Mini-window overlays or sits beside your PMS window.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">System integrations</h3>
              <p className="text-gray-600 mb-4">
                PMS (Medical Director, Best Practice, etc.), calendar (Google, Outlook), optional payment gateway.
              </p>
              <div className="text-sm text-gray-500">
                More integrations = smarter prompts. Phone is minimum.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to see Mini-window in action?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Book a demo. We'll show Mini-window on a real call with your practice data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/how-miyagi-works" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              See how Miyagi works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}