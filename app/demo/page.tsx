const workflow = [
  {
    number: "01",
    title: "Understand",
    label: "Repository Intelligence",
    description:
      "Engineering Bench analyzes the repository and identifies the code, architecture, tests, and configuration relevant to the request.",
  },
  {
    number: "02",
    title: "Change",
    label: "AI Engineering Agent",
    description:
      "The agent plans the implementation and applies the required code and test changes to the repository.",
  },
  {
    number: "03",
    title: "Execute",
    label: "Cloud Sandbox",
    description:
      "The change is executed inside an isolated cloud environment rather than on the developer's local machine.",
  },
  {
    number: "04",
    title: "Verify",
    label: "Build & Test",
    description:
      "Engineering Bench runs the application's actual build and test workflow and uses the results as verification evidence.",
  },
];

export default function Demo() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Engineering Bench · Product Demo
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            From an engineering request
            <br />
            to a verified result.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Engineering Bench connects repository intelligence, an AI
            engineering agent, cloud execution, and automated verification
            into one software engineering workflow.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://aieng.bengalsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Open Engineering Bench →
            </a>

            <a
              href="/platforms/engineering-bench"
              className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
            >
              Explore the platform
            </a>
          </div>
        </div>
      </section>

      {/* Request */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                The request
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Start with natural language.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-600">
                An engineer describes the change they want. Engineering Bench
                turns that request into an engineering workflow grounded in
                the actual repository.
              </p>
            </div>

            <div className="rounded-3xl bg-gray-950 p-8 shadow-xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Engineering request
              </div>

              <div className="mt-5 text-xl font-medium leading-8 text-white md:text-2xl">
                “Add customer search to the application.”
              </div>

              <div className="mt-8 border-t border-gray-800 pt-5 font-mono text-sm text-gray-500">
                Spring Boot · Java · Gradle
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            The engineering workflow
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Understand → Change → Execute → Verify
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            The important difference is what happens after the AI generates a
            proposed change.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {workflow.map((step) => (
            <div
              key={step.number}
              className="group rounded-3xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">
                  {step.number}
                </div>

                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                  Engineering Bench
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-950">
                {step.title}
              </h3>

              <p className="mt-2 text-sm font-semibold text-gray-500">
                {step.label}
              </p>

              <p className="mt-5 leading-7 text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Verification */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Verification
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
                Code is not the result.
                <br />
                A verified change is.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Engineering Bench executes the application's real build and
                test workflow so the agent's work can be evaluated against
                evidence from the repository.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-950 text-sm text-white">
                  ✓
                </div>

                <div>
                  <div className="font-semibold text-gray-950">
                    Verification workflow
                  </div>
                  <div className="text-sm text-gray-500">
                    Engineering Bench
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4 font-mono text-sm">
                <div className="rounded-xl bg-gray-950 px-5 py-4 text-gray-300">
                  ./gradlew test
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700">
                  Build and test execution
                </div>

                <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 text-gray-700">
                  Test results evaluated
                </div>

                <div className="rounded-xl border border-gray-900 bg-white px-5 py-4 font-semibold text-gray-950">
                  ✓ Change verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Try the platform
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              See Engineering Bench for yourself.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore the working platform and see how an engineering request
              moves from repository understanding to verified execution.
            </p>

            <a
              href="https://aieng.bengalsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
            >
              Launch Engineering Bench →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}