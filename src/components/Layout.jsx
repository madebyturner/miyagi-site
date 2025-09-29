import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-white antialiased">
      <div className="mx-auto max-w-7xl px-8 lg:px-12">
        <header className="fixed top-0 left-0 right-0 h-16 border-b border-gray-200 flex items-center bg-white z-40">
          <div className="mx-auto max-w-7xl px-8 lg:px-12 w-full">
            <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src="/miyagi_logo.svg" alt="Miyagi" className="h-8 w-auto" />
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <ProductDropdown />
              <Link to="/how-miyagi-works" className="text-gray-600 hover:text-gray-900 transition-colors">How Miyagi Works</Link>
              <Link to="/security" className="text-gray-600 hover:text-gray-900 transition-colors">Security</Link>
              <Link to="/integrations" className="text-gray-600 hover:text-gray-900 transition-colors">Integrations</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link to="/request-demo" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors text-center">
                Request demo
              </Link>
            </nav>
            </div>
          </div>
        </header>

        <div className="pt-16">
          {children}
        </div>

        <footer className="pt-32 pb-16">
          <div className="flex justify-between items-center">
            <img src="/miyagi_logo.svg" alt="Miyagi" className="h-6 w-auto" />
            <div className="flex gap-8 text-gray-600 text-sm">
              <Link to="/request-demo" className="hover:text-gray-900 transition-colors">Contact</Link>
              <a href="#" className="hover:text-gray-900 transition-colors">Status</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  let timeoutId = null

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => setIsOpen(false), 100)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Product
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed top-16 left-0 w-full bg-white border-t border-gray-200 py-16 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleLinkClick}
        >
          <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <div className="grid grid-cols-2 gap-24">
              {/* Left Side - Manager Console */}
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-8">Manager Console</div>
                <div className="space-y-8">
                  {/* Overview */}
                  <Link to="/products/manager" className="group block">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-gray-600 transition">Overview</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      One brain built from your data. Three sections managers use to explore, create Tasks, and build Loops.
                    </p>
                    <div className="text-sm text-gray-900 font-medium group-hover:underline mt-3">
                      Learn more →
                    </div>
                  </Link>

                  {/* Practice Ontology */}
                  <Link to="/products/manager/ontology" className="group block">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-gray-600 transition">Practice Ontology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Every call becomes structured data. Ask questions, verify via transcripts, create Tasks from insights.
                    </p>
                    <div className="text-sm text-gray-900 font-medium group-hover:underline mt-3">
                      Learn more →
                    </div>
                  </Link>

                  {/* AI Operations */}
                  <Link to="/products/manager/ai-operations" className="group block">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-gray-600 transition">AI Operations (Tasks & Loops)</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Define reusable Tasks, compose them into Loops, simulate before deploy. Control autonomy per Task.
                    </p>
                    <div className="text-sm text-gray-900 font-medium group-hover:underline mt-3">
                      Learn more →
                    </div>
                  </Link>

                  {/* Connections */}
                  <Link to="/products/manager/connections" className="group block">
                    <h3 className="text-lg font-medium mb-3 group-hover:text-gray-600 transition">Connections</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Phones, PMS, payments, calendar, WhatsApp. See what's connected and what permissions are granted.
                    </p>
                    <div className="text-sm text-gray-900 font-medium group-hover:underline mt-3">
                      Learn more →
                    </div>
                  </Link>
                </div>
              </div>

              {/* Right Side - Receptionist Assistant */}
              <div>
                <div className="text-sm uppercase tracking-wider text-gray-400 mb-8">Receptionist Assistant</div>
                <Link to="/products/receptionist-assistant" className="group block">
                  <h3 className="text-xl font-medium mb-4 group-hover:text-gray-600 transition">Mini-window</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Appears on-screen during calls. Reduces errors, doesn't replace reception. Same brain as Manager Console.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600 mb-6">
                    <div>• Transcript → prompts with ⚡ safe actions</div>
                    <div>• One-click approvals</div>
                    <div>• Send to Tasks for longer workflows</div>
                    <div>• Explore inline for policy questions</div>
                  </div>
                  <div className="text-sm text-gray-900 font-medium group-hover:underline">
                    See how it works →
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}