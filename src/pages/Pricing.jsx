import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Start with insights. Add automation when ready. Save 10-20 hours weekly within 60 days.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-8">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Foundation</div>
              <div className="text-4xl font-medium mb-4">$299<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">
                Understand your practice. Build Practice Ontology. Ask questions with Explore. No automation yet.
              </p>
              <div className="text-sm font-medium text-gray-900 mb-8">Assist-first · Simulate · Approvals · Audit</div>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>• Unlimited call capture & transcription</li>
                <li>• Practice Ontology building</li>
                <li>• Explore conversational interface</li>
                <li>• Pattern detection & analytics</li>
                <li>• Performance benchmarking</li>
                <li>• Up to 3 users</li>
              </ul>

              <Link to="/request-demo" className="block w-full px-6 py-3 bg-white text-gray-900 text-sm text-center rounded-md border border-gray-300 hover:bg-gray-50 transition">
                Start with Foundation
              </Link>
            </div>

            <div className="border-2 border-black rounded-lg p-8 relative">
              <div className="absolute -top-3 left-8 bg-black text-white text-xs uppercase tracking-wider px-3 py-1 rounded">
                Recommended
              </div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Professional</div>
              <div className="text-4xl font-medium mb-4">$799<span className="text-lg text-gray-500">/mo</span></div>
              <p className="text-gray-600 mb-6">
                Create Tasks and Loops. Teach with examples. Simulate before deploy. Start with Assist mode.
              </p>
              <div className="text-sm font-medium text-gray-900 mb-8">Assist-first · Simulate · Approvals · Audit</div>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>• Everything in Foundation</li>
                <li>• Unlimited Task & Loop creation</li>
                <li>• Teaching through examples</li>
                <li>• Simulation & testing before deploy</li>
                <li>• Per-Task autonomy controls</li>
                <li>• Mini-window for staff (⚡ prompts)</li>
                <li>• PMS, calendar, payment integrations</li>
                <li>• Up to 10 users</li>
                <li>• Priority support</li>
              </ul>

              <Link to="/request-demo" className="block w-full px-6 py-3 bg-black text-white text-sm text-center rounded-md hover:bg-gray-800 transition">
                Start with Professional
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-8">
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Enterprise</div>
              <div className="text-4xl font-medium mb-4">Custom</div>
              <p className="text-gray-600 mb-6">
                Multi-location support. Custom integrations. Dedicated account manager. For practice groups and complex operations.
              </p>
              <div className="text-sm font-medium text-gray-900 mb-8">Assist-first · Simulate · Approvals · Audit</div>

              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li>• Everything in Professional</li>
                <li>• Multi-location support</li>
                <li>• Custom integrations (pathology, Medicare)</li>
                <li>• Dedicated account manager</li>
                <li>• Custom SLAs</li>
                <li>• On-premise deployment options</li>
                <li>• Unlimited users</li>
                <li>• White-glove onboarding</li>
              </ul>

              <Link to="/request-demo" className="block w-full px-6 py-3 bg-white text-gray-900 text-sm text-center rounded-md border border-gray-300 hover:bg-gray-50 transition">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Add-ons
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Optional capabilities for Professional and Enterprise plans.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Autonomous Loops</h3>
              <div className="text-3xl font-medium mb-4">$299<span className="text-base text-gray-500">/mo</span></div>
              <p className="text-gray-600 text-sm mb-4">
                Unlock full autonomy. Loops answer calls independently. Handle workflows end-to-end. Staff monitors exceptions only.
              </p>
              <div className="text-xs text-gray-500">
                Includes: Autonomous mode for up to 5 Loops, escalation protocols, enhanced audit logging.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">WhatsApp Business</h3>
              <div className="text-3xl font-medium mb-4">$149<span className="text-base text-gray-500">/mo</span></div>
              <p className="text-gray-600 text-sm mb-4">
                Enable WhatsApp patient interactions. Same Tasks and Loops, different channel. Send reminders. Answer questions. Book appointments.
              </p>
              <div className="text-xs text-gray-500">
                Coming Q2 2025. Includes message templates, media sharing, read receipts.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Advanced analytics</h3>
              <div className="text-3xl font-medium mb-4">$99<span className="text-base text-gray-500">/mo</span></div>
              <p className="text-gray-600 text-sm mb-4">
                Custom reports. Trend analysis. Benchmark against peer practices. Export datasets for analysis.
              </p>
              <div className="text-xs text-gray-500">
                Includes: Custom dashboards, CSV/JSON exports, API access.
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium mb-2">Additional users</h3>
              <div className="text-3xl font-medium mb-4">$29<span className="text-base text-gray-500">/user/mo</span></div>
              <p className="text-gray-600 text-sm mb-4">
                Add staff to Manager Console. View insights. Create Tasks. Manage Loops. Monitor performance.
              </p>
              <div className="text-xs text-gray-500">
                Role-based access control included. No limit on receptionist Mini-window users.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            What's included in every plan
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Assist-first</div>
              <p className="text-gray-600 text-sm">
                Start with ⚡ suggestions, not actions. Staff approves. Build trust before increasing autonomy.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Simulate</div>
              <p className="text-gray-600 text-sm">
                Test Tasks against historical calls before deploy. See accuracy, edge cases, improvements needed.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Approvals</div>
              <p className="text-gray-600 text-sm">
                Staff approves autonomy changes. Manager Console controls AI access and actions.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Audit</div>
              <p className="text-gray-600 text-sm">
                Log every action. Who, what, when, why. Full transparency for compliance review.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Australian data</div>
              <p className="text-gray-600 text-sm">
                Patient data stays in Australia. SOC 2 Type II certified. APP compliance built-in.
              </p>
            </div>

            <div>
              <div className="text-sm uppercase tracking-wider text-gray-400 mb-3">Escalations</div>
              <p className="text-gray-600 text-sm">
                AI knows its limits. Escalate unusual cases to staff with context.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 tracking-tight">
            Frequently asked questions
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-medium mb-6">Getting started</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium mb-2">Is there a setup fee?</h4>
                  <p className="text-gray-600 text-sm">
                    No setup fees. All plans include onboarding, integration support, initial Practice Ontology building.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">Do you offer a trial?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes. 30-day pilot program. Build Practice Ontology. Create first Task. No commitment. Full refund if unsatisfied.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">How long is the contract?</h4>
                  <p className="text-gray-600 text-sm">
                    Month-to-month. No long-term commitment. Enterprise plans may include annual contracts with discounts.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Implementation</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium mb-2">What's included in onboarding?</h4>
                  <p className="text-gray-600 text-sm">
                    Phone integration. PMS connection setup. Initial data import. Team training. First Task creation guided. Completed within 2 weeks.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">Does it integrate with our PMS?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes. Medical Director, Best Practice, Pracsoft, Genie, others. Read patient records. Check availability. Create appointments.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">How does the Mini-window work?</h4>
                  <p className="text-gray-600 text-sm">
                    Mini-window appears during calls. Shows real-time transcripts and ⚡ prompts. Staff clicks to run Tasks or handles manually. Supportive, not intrusive.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Autonomy & control</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium mb-2">How do autonomy levels work?</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Three levels: Assist (suggest, approve), Supervised (act, monitor), Autonomous (handle end-to-end, escalate exceptions). Set per Task.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Example: Insurance verification autonomous while complex billing stays assist-only.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">Can staff override AI actions?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes. Assist level requires approval. Supervised/Autonomous allows intervention anytime. Audit log shows what was done and why.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-6">Security & compliance</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium mb-2">Where is data stored?</h4>
                  <p className="text-gray-600 text-sm">
                    Australian data centers (AWS ap-southeast-2). No offshore processing. Data never leaves country. SOC 2 Type II certified. APP compliant.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">How do you handle patient consent?</h4>
                  <p className="text-gray-600 text-sm">
                    Automated consent prompts on first call. Store consent per patient. No recording without consent. Patients can request deletion anytime.
                  </p>
                </div>

                <div>
                  <h4 className="text-base font-medium mb-2">Can you provide compliance documentation?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes. Provide privacy policies, data processing agreements, audit reports, certifications under NDA.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            See the process with your practice data.
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