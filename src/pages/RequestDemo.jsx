export default function RequestDemo() {
  return (
    <>
      <div className="pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight">
            Request a demo
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed">
            See how Miyagi learns your practice and creates custom AI assistants. Book a 30-minute demo with our team.
          </p>
        </div>
      </div>

      <section className="py-32">
        <div className="max-w-3xl">
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-600">
              Demo booking form will be integrated here (e.g., Calendly, HubSpot, or custom form).
            </p>
          </div>
        </div>
      </section>
    </>
  )
}