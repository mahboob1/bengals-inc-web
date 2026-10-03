import Link from "next/link";

const workflow = [
  {
    number: "01",
    title: "Understand",
    description: "Repository intelligence identifies the relevant code and architecture.",
  },
  {
    number: "02",
    title: "Change",
    description: "The AI engineering agent plans and implements the requested change.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Commands and tests run inside an isolated cloud sandbox.",
  },
  {
    number: "04",
    title: "Verify",
    description: "Build and test results establish whether the change works.",
  },
];

export default function Demo() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Engineering Bench · Live Demo
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            From an engineering request
            <br />
            to a verified result.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Watch how Engineering Bench can take a natural-language software
            engineering task through repository analysis, implementation,
            cloud execution, and verification.
          </p>

          <div className="mt-10">
            <a
              href="https://aieng.bengalsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Open Engineering Bench →
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                Example task
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Add customer search to a Spring Boot application.
              </h2>

              <div className="mt-8 rounded-2xl bg-gray-950 p-6 font-mono text-sm leading-7 text-gray-300">
                <div className="text-gray-500">Engineering request</div>
                <div className="mt-3 text-white">
                  Add customer search to the application.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-8">
              <div className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Engineering workflow
              </div>

              <div className="mt-8 space-y-0">
                {workflow.map((step, index) => (
                  <div key={step.number} className="relative flex gap-5 pb-8">
                    {index < workflow.length - 1 && (
                      <div className="absolute left-[15px] top-9 h-full w-px bg-gray-200" />
                    )}

                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-950 text-xs font-semibold text-white">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-950">
                        {step.title}
                      </h3>

                      <p className="mt-1 leading-7 text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm font-semibold text-gray-400">Repository</p>
            <h3 className="mt-3 text-xl font-semibold text-gray-950">
              Understand the codebase
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Identify the controllers, services, persistence layer, tests,
              and configuration relevant to the request.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm font-semibold text-gray-400">Execution</p>
            <h3 className="mt-3 text-xl font-semibold text-gray-950">
              Work in the cloud
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Execute engineering commands inside an isolated persistent
              sandbox rather than the developer's local machine.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-7">
            <p className="text-sm font-semibold text-gray-400">Verification</p>
            <h3 className="mt-3 text-xl font-semibold text-gray-950">
              Prove the result
            </h3>
            <p className="mt-3 leading-7 text-gray-600">
              Run the application's actual build and test workflow and use
              the resulting evidence to verify the change.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Try the platform
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              See Engineering Bench for yourself.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore the working platform and see the engineering workflow
              beyond the marketing page.
            </p>

            <a
              href="https://aieng.bengalsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950"
            >
              Launch Engineering Bench →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}