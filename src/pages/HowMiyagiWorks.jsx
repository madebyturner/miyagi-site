import { Link } from 'react-router-dom'

export default function HowMiyagiWorks() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            How Miyagi Works
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Automate at your pace. Staff stay in control.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            The seven-step process
          </h2>

          <div className="space-y-16">
            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Connect your systems</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Connect phone system, PMS, calendar, other tools. Use Connections in Manager Console. Test permissions. Verify integrations. Run test call.
                </p>
                <Link to="/products/manager/connections" className="text-sm text-gray-900 hover:text-gray-600 transition font-medium">
                  Learn about Connections →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Explore your practice data</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Miyagi listens for 2-3 weeks. Builds your Practice Ontology. Maps calls, entities, patterns. Ask Explore: "What takes most time?" "Where do errors happen?" "Which calls repeat?"
                </p>
                <Link to="/products/manager/ontology" className="text-sm text-gray-900 hover:text-gray-600 transition font-medium">
                  Learn about Practice Ontology →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Create a Task</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Spot a problem. Create a Task. Teach with real call examples. Show 5-10 best performances. Set rules. Simulate before deploy.
                </p>
                <Link to="/products/manager/ai-operations#tasks" className="text-sm text-gray-900 hover:text-gray-600 transition font-medium">
                  Learn about Tasks →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Simulate before deploying</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Test against historical calls. See accuracy. Find edge cases. Get improvements. Adjust and re-simulate until confident.
                </p>
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600">
                  <div className="mb-2 font-medium text-gray-900">Simulation result:</div>
                  <div>Accuracy: 94% (47/50 calls)</div>
                  <div>Edge cases: 3 (escalated correctly)</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">5</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Compose Tasks into a Loop</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Combine Tasks into complete workflows. "Appointment Booking Loop": Check insurance → Find availability → Book appointment → Send confirmation. Each Task has tailored autonomy.
                </p>
                <Link to="/products/manager/ai-operations#loops" className="text-sm text-gray-900 hover:text-gray-600 transition font-medium">
                  Learn about Loops →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">6</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Deploy with Assist mode</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Start with Assist mode. Miyagi suggests actions with ⚡ badge. Staff approves or handles manually. Full control. Build trust first.
                </p>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">⚡</span>
                    <span className="text-sm font-medium text-blue-900">Suggested action</span>
                  </div>
                  <div className="text-xs text-blue-800">Check patient's bulk billing eligibility (age & concession status)</div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">7</div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium mb-4">Increase autonomy when ready</h3>
                <p className="text-gray-600 mb-4 max-w-2xl">
                  Observe performance. Check accuracy, speed, staff feedback. Increase autonomy to Supervised or Autonomous when ready. Escalate uncertainty to staff.
                </p>
                <div className="flex items-center gap-6 mt-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div className="text-xs text-gray-600">Assist</div>
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mb-2">
                      <span className="text-xl">👁</span>
                    </div>
                    <div className="text-xs text-gray-600">Supervised</div>
                  </div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-2">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div className="text-xs text-gray-600">Autonomous</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Why this approach works
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Most AI asks for blind trust. Miyagi builds trust through evidence and control.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Assist-first</h3>
              <p className="text-gray-600 text-sm">
                Suggest, don't act. Staff controls while building confidence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Simulate before deploy</h3>
              <p className="text-gray-600 text-sm">
                Never deploy untested. Simulation shows performance before going live.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Per-Task autonomy</h3>
              <p className="text-gray-600 text-sm">
                Per-Task autonomy levels. Insurance verification goes autonomous. Complex billing stays assist-first.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Audit everything</h3>
              <p className="text-gray-600 text-sm">
                Log every action. Timestamp, user, system, outcome. Full audit trail.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Escalate when uncertain</h3>
              <p className="text-gray-600 text-sm">
                AI knows its limits. Escalate unusual cases to staff with context.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Data stays in Australia</h3>
              <p className="text-gray-600 text-sm">
                Patient data stays in Australia. SOC 2 compliant. Built for Australian healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Typical timeline
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Connection to first autonomous Loop. Most practices follow this path:
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Week 1</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Connect & calibrate</p>
                <p className="text-gray-600">Connect phone, PMS, calendar. Test permissions. Run first calls.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Weeks 2-4</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Build Practice Ontology</p>
                <p className="text-gray-600">Miyagi learns your practice. Explore data. Identify patterns. Spot automation opportunities.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Week 5-6</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Create first Task</p>
                <p className="text-gray-600">Usually insurance verification or appointment booking. Teach with examples. Simulate. Refine.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Week 7-8</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Deploy in Assist mode</p>
                <p className="text-gray-600">Staff sees ⚡ prompts during calls. Click to approve. Build trust through evidence.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Week 9-10</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Build first Loop</p>
                <p className="text-gray-600">Combine Tasks into complete workflow. Set per-Task autonomy. Simulate full Loop.</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="text-sm text-gray-500 w-24 flex-shrink-0">Week 11+</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-1">Increase autonomy</p>
                <p className="text-gray-600">Move to Supervised, then Autonomous for high-confidence Tasks. Add more Tasks. Continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to start?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            See the process with your practice data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/products/manager" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              Explore Manager Console
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}