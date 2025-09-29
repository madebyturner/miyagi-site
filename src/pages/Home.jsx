import { Link } from 'react-router-dom'
import { ArrowRight, Check, Clock, AlertCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-[1.1] tracking-tight">
            Your practice runs on phone calls.
            <br />
            We make them intelligent.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Miyagi captures every call, understands Medicare and bulk billing,
            and guides staff through perfect responses — while they stay in control.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/request-demo" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Watch 2-minute demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="text-sm text-gray-500">
              No credit card required
            </div>
          </div>
        </div>
      </div>

      {/* Problem/Solution */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <div className="text-sm text-gray-500 mb-3">The problem</div>
              <h3 className="text-xl font-medium mb-4">Every call is different</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                  <p className="text-sm text-gray-600">Medicare rules change constantly</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                  <p className="text-sm text-gray-600">New staff take weeks to train</p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-gray-400 mt-0.5" />
                  <p className="text-sm text-gray-600">One mistake costs hours to fix</p>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500 mb-3">Our approach</div>
              <h3 className="text-xl font-medium mb-4">AI that knows your practice</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <p className="text-sm text-gray-600">Real-time Medicare eligibility checks</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <p className="text-sm text-gray-600">Staff productive in days, not weeks</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <p className="text-sm text-gray-600">Every action logged and auditable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - ultra simple */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-12">How Miyagi works</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">1</div>
              <div>
                <h3 className="font-medium mb-1">Connect your phone system</h3>
                <p className="text-sm text-gray-600">Works with any Australian practice phone system. Takes 10 minutes.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">2</div>
              <div>
                <h3 className="font-medium mb-1">Miyagi learns from your calls</h3>
                <p className="text-sm text-gray-600">Understands your workflows, doctors, and specific billing rules.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm flex-shrink-0">3</div>
              <div>
                <h3 className="font-medium mb-1">Staff see suggestions, stay in control</h3>
                <p className="text-sm text-gray-600">One-click actions appear. Staff approve or handle manually.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-medium">10-20 hours</div>
                <div className="text-sm text-gray-600">Saved per week</div>
              </div>
              <div>
                <div className="text-2xl font-medium">45%</div>
                <div className="text-sm text-gray-600">Fewer errors</div>
              </div>
              <div>
                <div className="text-2xl font-medium">2 days</div>
                <div className="text-sm text-gray-600">Faster payments</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust indicators */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-12">Built for Australian healthcare</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-medium mb-2">Medicare native</h3>
              <p className="text-sm text-gray-600">
                Bulk billing, safety nets, PBS — built in from day one.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Data stays here</h3>
              <p className="text-sm text-gray-600">
                Australian servers. APP compliant. Never leaves the country.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-2">You control everything</h3>
              <p className="text-sm text-gray-600">
                Start with suggestions. Add automation only when you're ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-medium mb-4">
            Ready to make your practice smarter?
          </h2>
          <p className="text-gray-600 mb-8">
            See Miyagi work with your actual practice data. 30-minute demo.
          </p>
          <Link to="/request-demo" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Book your demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}