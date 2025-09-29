import { Link } from 'react-router-dom'

export default function Security() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Security & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            Built for Australian healthcare. Data stays in Australia. Encrypted everywhere.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Australian data residency
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Patient data stays in Australia. Call transcripts stay here. Practice information never leaves the country.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Sydney data center</h3>
              <p className="text-gray-600 mb-4">
                Sydney infrastructure on AWS ap-southeast-2. SOC 2 Type II certified. ISO 27001 compliant.
              </p>
              <div className="text-sm text-gray-500">
                Backup and disaster recovery also within Australia.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Australian Privacy Principles</h3>
              <p className="text-gray-600 mb-4">
                Full APP compliance for healthcare data. Patient consent capture. Access requests. Deletion workflows built-in.
              </p>
              <div className="text-sm text-gray-500">
                Regular third-party audits for APP compliance.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Healthcare standards</h3>
              <p className="text-gray-600 mb-4">
                Built for Australian medical practices. Medicare billing protocols. PBS requirements. Practice accreditation standards.
              </p>
              <div className="text-sm text-gray-500">
                RACGP and AGPAL accreditation-ready.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">No offshore processing</h3>
              <p className="text-gray-600 mb-4">
                All AI processing happens in Australia. Call transcription. Task execution. Loop operations. Entirely domestic.
              </p>
              <div className="text-sm text-gray-500">
                Third-party AI models fine-tuned and deployed in AU.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Encryption everywhere
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Encrypt patient data in transit and at rest. Industry-standard encryption. Key rotation. Regular penetration testing.
          </p>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">🔒</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-3">In transit (TLS 1.3)</h3>
                  <p className="text-gray-600 mb-2">
                    All connections use TLS 1.3. Phone audio streams. PMS data sync. Web traffic. Everything encrypted end-to-end.
                  </p>
                  <div className="text-sm text-gray-500">
                    Certificate pinning, HSTS enforcement, no downgrades to older TLS versions.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">💾</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-3">At rest (AES-256)</h3>
                  <p className="text-gray-600 mb-2">
                    Database encryption uses AES-256. Call recordings. Transcripts. Patient records. Audit logs. All encrypted at rest.
                  </p>
                  <div className="text-sm text-gray-500">
                    Automated key rotation, AWS KMS for key management, encrypted backups.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center text-lg font-medium flex-shrink-0">🔑</div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium mb-3">Key management</h3>
                  <p className="text-gray-600 mb-2">
                    Hardware security modules for key generation. Keys never leave secure enclaves. Regular rotation schedules.
                  </p>
                  <div className="text-sm text-gray-500">
                    FIPS 140-2 Level 3 validated HSMs, audit trail for all key operations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Role-based access control
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Staff see what they need. Managers control role permissions. Every access logged.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Practice Owner</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Full access to Manager Console</li>
                <li>• Create and modify Tasks & Loops</li>
                <li>• Set autonomy levels</li>
                <li>• Review audit logs</li>
                <li>• Manage user permissions</li>
                <li>• Access all Connections</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Practice Manager</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• View Manager Console</li>
                <li>• Create Tasks (approval required)</li>
                <li>• Modify existing Loops</li>
                <li>• Set autonomy for assigned Loops</li>
                <li>• Review performance data</li>
                <li>• Limited audit log access</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Receptionist</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Access Mini-window during calls</li>
                <li>• Click ⚡ prompts to run Tasks</li>
                <li>• Use Explore bar for questions</li>
                <li>• View own call history</li>
                <li>• No access to Manager Console</li>
                <li>• No permission changes</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-4">Practitioner</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• View patient interactions</li>
                <li>• Access relevant call transcripts</li>
                <li>• Review AI actions on their patients</li>
                <li>• Request Task modifications</li>
                <li>• Limited Explore access</li>
                <li>• No autonomy control</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-xl">💡</div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium mb-2">SSO and MFA ready</p>
                <p className="text-gray-600 text-sm">
                  Single sign-on via SAML/OIDC for practices with existing identity providers. Multi-factor authentication enforced for all users. Password policies configurable per practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Audit trails for everything
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Log every action. Who, what, when, why. Full transparency for compliance reviews.
          </p>

          <div className="bg-white p-8 rounded-lg border border-gray-200 mb-12">
            <div className="text-xs uppercase tracking-wider text-gray-400 mb-4">Sample audit log entries</div>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded text-sm">
                <div className="text-gray-500 w-32 flex-shrink-0">2025-09-28 10:34</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Task executed: Insurance verification</div>
                  <div className="text-gray-600 text-xs">User: jenny@practice.com.au | Patient: Sarah Chen | System: Medical Director | Action: Read age, concession status | Result: Bulk billed</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded text-sm">
                <div className="text-gray-500 w-32 flex-shrink-0">2025-09-28 10:35</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Permission changed: Loop autonomy</div>
                  <div className="text-gray-600 text-xs">User: manager@practice.com.au | Loop: Appointment Booking | Changed from: Assist | Changed to: Supervised | Reason: 30 days successful operation</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded text-sm">
                <div className="text-gray-500 w-32 flex-shrink-0">2025-09-28 10:36</div>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 mb-1">Data access: Patient record viewed</div>
                  <div className="text-gray-600 text-xs">User: dr.smith@practice.com.au | Patient: Michael Tran | System: Practice Ontology | Action: View call history | Duration: 2m 14s</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-3">Retention</h3>
              <p className="text-gray-600 text-sm">
                Retain audit logs for 7 years. Configurable per practice. Encrypted backups. Immutable storage.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Export</h3>
              <p className="text-gray-600 text-sm">
                Export logs to CSV or JSON. Filter by user, date, system, action. API access for automated reporting.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Alerts</h3>
              <p className="text-gray-600 text-sm">
                Alert on suspicious activity. Failed logins. Permission changes. Bulk data access. Real-time notifications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Phone permissions & consent
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Call recording needs patient consent. Miyagi captures, stores, honors consent preferences.
          </p>

          <div className="space-y-8">
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Consent capture</h3>
              <p className="text-gray-600 mb-4">
                Automated consent prompts on first call. "This call may be recorded for quality and training. Do you consent to recording and transcription?"
              </p>
              <div className="text-sm text-gray-500">
                Consent status stored per patient. No recording/transcription without consent.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Consent management</h3>
              <p className="text-gray-600 mb-4">
                Patients can delete recordings. Opt out of future recording. Request transcripts. Self-service via portal or staff-assisted.
              </p>
              <div className="text-sm text-gray-500">
                Deletion requests processed within 30 days. Audit trail preserved.
              </div>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Recording retention</h3>
              <p className="text-gray-600 mb-4">
                Configurable retention per call type. Standard: 2 years routine, 7 years clinical/billing. Auto-deletion after retention period.
              </p>
              <div className="text-sm text-gray-500">
                Transcripts retained separately with same retention policies.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50 -mx-8 lg:-mx-12 px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
            Security monitoring & response
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl">
            Monitor security 24/7. Regular penetration testing. Incident response procedures. Vulnerability management.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Monitoring</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 24/7 SOC monitoring</li>
                <li>• Real-time intrusion detection</li>
                <li>• Automated threat response</li>
                <li>• DDoS protection</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Testing</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Quarterly penetration testing</li>
                <li>• Annual third-party audits</li>
                <li>• Continuous vulnerability scanning</li>
                <li>• Bug bounty program</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Incident response</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Documented IR procedures</li>
                <li>• Practice notification protocols</li>
                <li>• Post-incident reviews</li>
                <li>• Regulatory reporting (if required)</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium mb-3">Updates</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Regular security patches</li>
                <li>• Zero-downtime deployments</li>
                <li>• Dependency vulnerability scanning</li>
                <li>• Rollback procedures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 tracking-tight">
            Questions about security?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Security team answers detailed questions. Provides documentation for compliance reviews.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-demo" className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
              Request demo
            </Link>
            <Link to="/products/manager/connections#security-link" className="px-8 py-4 text-gray-900 hover:text-gray-600 transition-colors text-center">
              View Connections
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}