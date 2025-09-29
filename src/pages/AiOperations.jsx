import { Link } from 'react-router-dom'

export default function AiOperations() {
  return (
    <>
      {/* Hero */}
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            AI Operations
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Define reusable Tasks, compose them into Loops. Simulate before deploying. Control autonomy per Task. Assist-first · Simulate · Approvals · Audit
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

      {/* #tasks */}
      <section id="tasks" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Tasks: Reusable automation modules
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Tasks are building blocks. Each Task handles one specific thing—insurance verification, appointment booking, payment processing. Teach them with examples, simulate before deploying, then compose into Loops.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-medium mb-6">Teach with examples</h3>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-600 mb-6">
                  Show Miyagi 5-10 calls where your best staff handled the task well. The AI learns the pattern—what questions to ask, what data to check, how to explain policies.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Call #4421 - Jenny handles insurance (3.2min)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Call #4398 - Jenny handles insurance (2.8min)</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <input type="checkbox" checked readOnly className="w-4 h-4" />
                    <span className="text-sm">Call #4356 - Jenny handles insurance (3.1min)</span>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
                  Train Task from selected calls
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Simulate before deploy</h3>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Simulation mode:</div>
                  <p className="text-gray-900 font-medium mb-4">Run the Task against recent calls without actually taking any actions. See what it would have done.</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Call #4502 - Sarah asking about costs</span>
                      <span className="text-green-600">✓ Correct</span>
                    </div>
                    <p className="text-gray-600 text-xs">Task would have checked age (42), no concession, explained $45 gap—matches what Jenny did</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Call #4489 - Tom asking about bulk billing</span>
                      <span className="text-green-600">✓ Correct</span>
                    </div>
                    <p className="text-gray-600 text-xs">Task would have checked age (14), confirmed bulk billed—matches policy</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <div className="text-sm text-gray-900 font-medium">Accuracy: 94% (47/50 calls)</div>
                  <button className="ml-auto px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800">
                    Approve & deploy
                  </button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Rules & checks</h3>
              <p className="text-gray-600 mb-6">
                Add safety rules before deploying. These are hard constraints the Task must follow.
              </p>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span>⚠️</span>
                    <div>
                      <div className="font-medium mb-1">Escalate if patient mentions emergency symptoms</div>
                      <div className="text-gray-600 text-xs">Chest pain, difficulty breathing, severe bleeding → immediate escalation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span>⚠️</span>
                    <div>
                      <div className="font-medium mb-1">Require approval for charges over $200</div>
                      <div className="text-gray-600 text-xs">Large payments need staff confirmation before processing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span>⚠️</span>
                    <div>
                      <div className="font-medium mb-1">Escalate if confidence below 85%</div>
                      <div className="text-gray-600 text-xs">When AI isn't sure, hand off to staff</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Performance tracking</h3>
              <p className="text-gray-600 mb-6">
                Once deployed, see how the Task performs. Accuracy, speed, escalation rate—all tracked.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-medium mb-2">96%</div>
                  <div className="text-sm text-gray-600">Accuracy rate</div>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-medium mb-2">2.8min</div>
                  <div className="text-sm text-gray-600">Avg completion time</div>
                </div>
                <div className="p-6 bg-white rounded-lg border border-gray-200">
                  <div className="text-3xl font-medium mb-2">8%</div>
                  <div className="text-sm text-gray-600">Escalation rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #loops */}
      <section id="loops" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Loops: Complete workflows
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Loops are workflows composed from Tasks. A Loop might handle "New Patient Intake" using Tasks for verification, data collection, booking, and payment. Each Task in a Loop can have different autonomy levels.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-medium mb-6">Compose from Tasks</h3>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Loop: New Patient Intake</div>
                  <p className="text-gray-600 text-sm">Handles complete onboarding flow from first call to booked appointment</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <span className="text-2xl">1</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Task: Insurance Verification</div>
                      <div className="text-xs text-gray-600">Check eligibility, explain costs</div>
                    </div>
                    <div className="text-xs text-gray-500">Assist mode</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <span className="text-2xl">2</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Task: Data Collection</div>
                      <div className="text-xs text-gray-600">Gather demographics, medical history</div>
                    </div>
                    <div className="text-xs text-gray-500">Supervised</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <span className="text-2xl">3</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Task: Appointment Booking</div>
                      <div className="text-xs text-gray-600">Find slot, check practitioner, confirm</div>
                    </div>
                    <div className="text-xs text-gray-500">Autonomous</div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded">
                    <span className="text-2xl">4</span>
                    <div className="flex-1">
                      <div className="font-medium text-sm">Task: Payment Collection</div>
                      <div className="text-xs text-gray-600">Take deposit, send confirmation</div>
                    </div>
                    <div className="text-xs text-gray-500">Assist mode</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Per-Task autonomy</h3>
              <p className="text-gray-600 mb-6">
                Each Task within a Loop can have a different autonomy level. You might trust booking to run autonomously but keep payments assist-only.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-medium mb-2">⚡ Assist</div>
                  <p className="text-sm text-gray-600">AI suggests, staff approve</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-medium mb-2">👁 Supervised</div>
                  <p className="text-sm text-gray-600">AI acts, staff monitor</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="font-medium mb-2">🤖 Autonomous</div>
                  <p className="text-sm text-gray-600">AI handles independently</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Channels</h3>
              <p className="text-gray-600 mb-6">
                Loops can run across different channels—phone calls, WhatsApp messages, even scheduled background processes.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-white rounded border border-gray-200 text-sm">📞 Phone</div>
                <div className="px-4 py-2 bg-white rounded border border-gray-200 text-sm">💬 WhatsApp</div>
                <div className="px-4 py-2 bg-white rounded border border-gray-200 text-sm">📧 Email</div>
                <div className="px-4 py-2 bg-white rounded border border-gray-200 text-sm">⏰ Scheduled</div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-6">Audit logs</h3>
              <p className="text-gray-600 mb-6">
                Every Loop execution creates an audit trail. See what happened, why decisions were made, where escalations occurred.
              </p>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="text-sm text-gray-500 mb-3">Loop execution #8834 - New Patient Intake</div>
                <div className="space-y-2 text-sm">
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:23am</span>
                    <span>Started - Call from Sarah Chen</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:24am</span>
                    <span>Task: Insurance Verification → ⚡ Suggested $45 gap, staff approved</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:26am</span>
                    <span>Task: Data Collection → 👁 Collected demographics, auto-saved</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:28am</span>
                    <span>Task: Booking → 🤖 Booked slot Thu 2pm with Dr. Chen</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:29am</span>
                    <span>Task: Payment → ⚡ $45 deposit prompted, staff processed</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-gray-400 min-w-[60px]">10:30am</span>
                    <span className="font-medium">Completed - Confirmation sent to patient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #mapping */}
      <section id="mapping" className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Task ↔ Loop mapping
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Many-to-many relationships. One Task can be used in multiple Loops. One Loop contains multiple Tasks. Each Task-in-Loop pairing has its own autonomy setting.
          </p>

          <div className="p-8 bg-white rounded-lg border border-gray-200">
            <div className="text-sm text-gray-500 mb-4">Example mapping:</div>
            <div className="space-y-6">
              <div>
                <div className="font-medium mb-3">Task: Insurance Verification</div>
                <div className="space-y-2 text-sm pl-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Loop: New Patient Intake</span>
                    <span className="ml-auto text-xs px-2 py-1 bg-gray-100 rounded">Assist</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Loop: Existing Patient Rebooking</span>
                    <span className="ml-auto text-xs px-2 py-1 bg-gray-200 rounded">Supervised</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400">→</span>
                    <span>Loop: Bulk Billing Inquiry (Phone)</span>
                    <span className="ml-auto text-xs px-2 py-1 bg-black text-white rounded">Autonomous</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600">
                  Same Task, different autonomy levels depending on context. The New Patient flow keeps it assist-only for safety, while bulk billing inquiries run autonomously because they're lower-risk.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-medium mb-4">Gates before deployment</h3>
            <p className="text-gray-600 mb-6">
              Tasks must pass two gates before they can be used in a Loop:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <div className="font-medium">Simulated</div>
                </div>
                <p className="text-sm text-gray-600">Task must be tested in simulation mode with acceptable accuracy</p>
              </div>
              <div className="p-6 bg-white rounded-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✓</span>
                  <div className="font-medium">Permissions</div>
                </div>
                <p className="text-sm text-gray-600">Required system connections and permissions must be granted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* #transparency */}
      <section id="transparency" className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Decision trails & audit logs
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Every automated decision is logged. See why the AI chose a specific action, what data it used, what rules it followed.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-sm text-gray-500 mb-4">Decision breakdown:</div>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-sm mb-2">Decision: Explain $45 gap payment</div>
                  <div className="text-sm text-gray-600 mb-3">
                    Why: Patient (age 42) has no concession card. Practice policy: bulk bill under-16 and concession holders only.
                  </div>
                  <div className="text-xs text-gray-500">
                    Data sources: Patient record (PMS) · Practice policy (Ontology) · Staff training examples (Jenny's calls)
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-4">
                  <button className="text-sm text-gray-600 hover:text-gray-900 underline">
                    View full decision trace →
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">What's logged</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Every Task execution with timestamp</li>
                  <li>• Data inputs and sources used</li>
                  <li>• Rules that triggered</li>
                  <li>• Actions taken or suggested</li>
                  <li>• Staff approvals or overrides</li>
                  <li>• Escalation reasons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Who can access</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Practice managers see all logs. Staff see their own interactions. Audit-ready exports available for compliance.
                </p>
                <Link to="/security" className="text-sm text-gray-900 font-medium hover:underline">
                  Learn about audit & compliance →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link */}
      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            See Tasks & Loops in action
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            The Receptionist Assistant is where your staff experience Loops—real-time prompts, one-click actions, all powered by the Tasks you create here.
          </p>
          <Link to="/products/receptionist-assistant" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            <span>See Receptionist Assistant</span>
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to build your first Task?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Book a demo and we'll walk through creating a Task, simulating it, and deploying it in a Loop—using your actual practice data.
          </p>
          <Link to="/request-demo" className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Request demo
          </Link>
        </div>
      </section>
    </>
  )
}
