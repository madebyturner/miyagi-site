import { Link } from 'react-router-dom'

export default function Connections() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Connections
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Connect your systems. Control permissions. Audit everything.
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

      <section id="phone-system" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Phone system first
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Connect your phone first. Test permissions. Verify audio quality. Confirm numbers.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Connect your phone provider</h3>
                  <p className="text-gray-600 mb-4">
                    Use API credentials or OAuth. Miyagi connects VoIP providers: RingCentral, 3CX, Twilio. Direct PSTN supported.
                  </p>
                  <div className="p-4 bg-gray-50 rounded text-sm text-gray-600">
                    Status: <span className="font-medium text-green-600">Connected</span> | Provider: RingCentral | Numbers: 3
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Set permissions</h3>
                  <p className="text-gray-600 mb-4">
                    Set what Miyagi can access. Listen to calls. Make outbound calls. Send SMS. View call history.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="p-3 bg-gray-50 rounded text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-gray-600">Listen to inbound calls</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-gray-600">Make outbound calls</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400">○</span>
                        <span className="text-gray-400">Send SMS (disabled)</span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-600">✓</span>
                        <span className="text-gray-600">Access call history</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">Test with a call</h3>
                  <p className="text-gray-600 mb-4">
                    Make a test call. Verify audio quality. Check transcription accuracy. Confirm Mini-window appears for staff.
                  </p>
                  <button className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors">
                    Make test call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrations" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            System integrations
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Connect PMS, calendar, payments, communication tools. Each integration has specific permissions and audit trail.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Practice Management</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Live</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Medical Director, Best Practice, Pracsoft, Genie. Read patient records. Book appointments. Create notes.
              </p>
              <div className="text-xs text-gray-500">
                Permissions: Read patients, book appointments
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Payments</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Live</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Stripe, Square, Tyro. Process payments. Send invoices. Check payment status.
              </p>
              <div className="text-xs text-gray-500">
                Permissions: Process payments, view history
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Calendar</h3>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Live</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Google Calendar, Outlook, HotDoc. Check availability. Book appointments. Send reminders.
              </p>
              <div className="text-xs text-gray-500">
                Permissions: View calendar, create events
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">WhatsApp</h3>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">Roadmap</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                WhatsApp Business API. Send reminders. Answer questions. Share documents.
              </p>
              <div className="text-xs text-gray-500">
                Coming Q2 2025
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link to="/integrations" className="text-gray-900 hover:text-gray-600 transition font-medium">
              See all integrations →
            </Link>
          </div>
        </div>
      </section>

      <section id="security-link" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Audit everything
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Log everything. Phone call. PMS update. Payment processed. Timestamp, user, outcome recorded.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Audit log sample</div>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 whitespace-nowrap">10:34 AM</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Insurance verification Task</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Success</span>
                  </div>
                  <div className="text-xs text-gray-600">Patient: Sarah Chen | System: Medical Director | Action: Read patient age, concession status | Result: Bulk billed</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 whitespace-nowrap">10:36 AM</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Appointment booking Task</span>
                    <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded">Escalated</span>
                  </div>
                  <div className="text-xs text-gray-600">Patient: Michael Tran | System: Google Calendar | Action: Check Dr. Smith availability | Result: No slots available - escalated to staff</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded">
                <div className="text-xs text-gray-500 whitespace-nowrap">10:39 AM</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium">Payment processing Task</span>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded">Success</span>
                  </div>
                  <div className="text-xs text-gray-600">Patient: Emma Wilson | System: Stripe | Action: Process payment $85 | Result: Payment completed, receipt sent</div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8 max-w-3xl">
            Filter logs by date, Task, Loop, user, system, outcome. Export for compliance review.
          </p>

          <Link to="/security" className="text-gray-900 hover:text-gray-600 transition font-medium">
            Learn about security & compliance →
          </Link>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to connect your practice?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect phone, PMS, other systems. Full support included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/integrations" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              View integrations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}