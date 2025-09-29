import { Link } from 'react-router-dom'

export default function Integrations() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Integrations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Connect the systems you already use. Phone, PMS, payments, calendar, communication.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Core integrations
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Start with essential integrations. Phone required. Others enhance capabilities.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg border-2 border-black">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-medium">Phone Systems</h3>
                <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">Required</span>
              </div>
              <p className="text-gray-600 mb-6">
                VoIP or PSTN connection for call transcription and Mini-window. Foundation of Miyagi.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">RC</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">RingCentral</div>
                    <div className="text-xs text-gray-500">Full API support</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">3CX</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">3CX</div>
                    <div className="text-xs text-gray-500">VoIP integration</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">TW</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Twilio</div>
                    <div className="text-xs text-gray-500">Programmable voice</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-medium">Practice Management</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Recommended</span>
              </div>
              <p className="text-gray-600 mb-6">
                Read patient records. Book appointments. Update notes. Essential for smart prompts and automation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">MD</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Medical Director</div>
                    <div className="text-xs text-gray-500">PMS integration</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">BP</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Best Practice</div>
                    <div className="text-xs text-gray-500">PMS integration</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">PS</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Pracsoft</div>
                    <div className="text-xs text-gray-500">PMS integration</div>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200">
                  <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">GN</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Genie</div>
                    <div className="text-xs text-gray-500">PMS integration</div>
                  </div>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Beta</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Additional integrations
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Calendar, payments, communication tools make Miyagi smarter.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Calendar</div>
              <h3 className="text-xl font-medium mb-4">Booking & scheduling</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Google Calendar</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Microsoft Outlook</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>HotDoc</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">Beta</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Real-time availability sync. Book appointments from Mini-window.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Payments</div>
              <h3 className="text-xl font-medium mb-4">Payment processing</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Stripe</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Square</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Tyro</span>
                  <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">Beta</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Process payments. Send invoices. Check payment status during calls.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Communication</div>
              <h3 className="text-xl font-medium mb-4">Patient messaging</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span>SMS Gateway</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Email (SMTP)</span>
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Live</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>WhatsApp Business</span>
                  <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded">Q2 2025</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                Send reminders, confirmations, follow-ups automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Coming soon
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Roadmap integrations. Vote for what you need most.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Pathology integrations</h3>
                <span className="text-sm text-gray-500">Q2 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Direct connections to Australian Labs, Healius, Sonic Healthcare. Automated result delivery and follow-up.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Medicare & DVA</h3>
                <span className="text-sm text-gray-500">Q2 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Direct bulk billing claims. DVA verification. Real-time eligibility checks.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Pharmacy systems</h3>
                <span className="text-sm text-gray-500">Q3 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Send e-scripts. Check PBS eligibility. Manage repeat prescriptions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Specialist referrals</h3>
                <span className="text-sm text-gray-500">Q3 2025</span>
              </div>
              <p className="text-gray-600 text-sm">
                Automate referral generation. Look up specialist availability. Book appointments.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium">Custom integrations</h3>
                <span className="text-sm text-gray-500">On request</span>
              </div>
              <p className="text-gray-600 text-sm">
                Need something specific? We build custom integrations for unique requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Integration process
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            We handle technical setup. You run your practice.
          </p>

          <div className="space-y-12">
            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Discovery call</h3>
                <p className="text-gray-600">
                  Discuss current systems. What works, what doesn't. Identify integrations with biggest impact.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Technical setup</h3>
                <p className="text-gray-600">
                  Handle API credentials, OAuth flows, permission scopes. You approve, we configure.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Testing & verification</h3>
                <p className="text-gray-600">
                  Test calls. Check data sync. Verify permissions. Everything works before going live.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-medium mb-3">Go live</h3>
                <p className="text-gray-600">
                  Integrations active. Monitor first few days. Adjust permissions as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to connect your systems?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            See which integrations make sense for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/products/manager/connections" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              View Connections
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}