import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Analyze the repository and identify the code, architecture, and dependencies relevant to the task.",
  },
  {
    number: "02",
    title: "Change",
    description: "Plan and implement the required software changes using engineering tools.",
  },
  {
    number: "03",
    title: "Execute",
    description: "Run builds, commands, and tests inside an isolated cloud sandbox.",
  },
  {
    number: "04",
    title: "Verify",
    description: "Validate the result through automated execution and testing.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Bengals Inc. · AI Platforms
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            AI software engineering,
            <br />
            from repository to verified result.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
            Engineering Bench enables AI agents to understand a software
            repository, implement changes, execute them in an isolated cloud
            environment, and verify the result.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Request a Demo
            </Link>

            <Link
              href="/platforms/engineering-bench"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              Explore Engineering Bench →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Engineering Bench
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
              AI can generate code.
              <br />
              Software engineering requires more.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Engineering Bench connects repository intelligence, an AI
              engineering agent, engineering tools, cloud execution, and
              verification into one workflow.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="text-sm font-semibold text-gray-400">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-950">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Platform capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Built for real software engineering.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Engineering Bench brings the core activities of software engineering
            into a single AI-driven workflow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Repository Intelligence",
              description:
                "Understand project structure, source code, configuration, dependencies, and relevant implementation context.",
            },
            {
              title: "AI Engineering Agent",
              description:
                "Reason about engineering tasks and determine the changes required to implement them.",
            },
            {
              title: "Engineering Tools",
              description:
                "Inspect files, modify code, execute commands, and interact with the repository through controlled tools.",
            },
            {
              title: "Cloud Sandbox",
              description:
                "Execute builds and commands in an isolated cloud environment instead of relying on the developer's local machine.",
            },
            {
              title: "Build & Test",
              description:
                "Run the project's actual build and test workflows to determine whether the implementation works.",
            },
            {
              title: "Verification",
              description:
                "Use execution and test results to verify whether the requested engineering change was successfully completed.",
            },
          ].map((capability) => (
            <div
              key={capability.title}
              className="rounded-2xl border border-gray-200 p-7"
            >
              <h3 className="text-xl font-semibold text-gray-950">
                {capability.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              See Engineering Bench in action
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              Move from AI-generated code to verified engineering results.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Explore how Engineering Bench understands repositories, implements
              changes, executes them in the cloud, and verifies the result.
            </p>

            <div className="mt-10">
              <Link
                href="/demo"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-gray-200"
              >
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}