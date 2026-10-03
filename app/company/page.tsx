export default function Company() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Bengals Inc.
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            Building technology for the next generation of intelligent
            software.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Bengals Inc. develops software platforms that combine artificial
            intelligence, cloud infrastructure, and enterprise engineering
            practices to solve practical technology problems.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h2 className="text-xl font-semibold text-gray-950">
                AI-first
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                We build AI systems around real workflows rather than treating
                AI as an isolated feature.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-950">
                Engineering-driven
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                Our platforms connect intelligent reasoning with software,
                infrastructure, execution, and verification.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-950">
                Built to operate
              </h2>
              <p className="mt-3 leading-7 text-gray-600">
                We focus on systems that can perform meaningful work in
                real-world technology environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Our focus
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Turning intelligent systems into useful platforms.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bengals Inc. is focused on the intersection of AI, software
            engineering, cloud platforms, and enterprise technology. Our first
            AI platform, Engineering Bench, applies that approach to software
            development.
          </p>
        </div>
      </section>
    </main>
  );
}