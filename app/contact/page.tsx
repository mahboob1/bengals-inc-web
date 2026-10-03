export default function Contact() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Contact Bengals Inc.
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            Let's talk about what you're building.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Interested in Engineering Bench, AI platforms, or working with
            Bengals Inc.? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                General inquiries
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950">
                Start a conversation.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Tell us about your technology challenge, platform needs, or
                interest in Engineering Bench.
              </p>

              <a
                href="mailto:info@bengalsinc.com"
                className="mt-8 inline-block text-lg font-semibold text-gray-950 underline underline-offset-4"
              >
                info@bengalsinc.com
              </a>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Engineering Bench
              </p>

              <h2 className="mt-4 text-2xl font-bold text-gray-950">
                Interested in a demo?
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                See how Engineering Bench can understand, change, execute, and
                verify software engineering tasks.
              </p>

              <a
                href="/demo"
                className="mt-8 inline-flex rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Demo →
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}