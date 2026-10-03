import Link from "next/link";

export default function Platforms() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            AI Platforms
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            AI platforms built for real-world engineering.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Bengals Inc. builds AI platforms that connect intelligent agents
            with the systems, tools, and execution environments required to
            accomplish meaningful technology work.
          </p>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Flagship platform
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Engineering Bench
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              AI software engineering from repository to verified result.
              Understand the codebase, implement changes, execute them in an
              isolated cloud environment, and verify the outcome.
            </p>

            <Link
              href="/platforms/engineering-bench"
              className="mt-8 inline-flex rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Engineering Bench →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}