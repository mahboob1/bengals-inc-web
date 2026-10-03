import Link from "next/link";

const capabilities = [
  {
    title: "Repository Intelligence",
    description:
      "Analyze source code, project structure, configuration, dependencies, and relevant implementation context.",
  },
  {
    title: "AI Engineering Agent",
    description:
      "Reason about the requested change and determine the engineering actions required to implement it.",
  },
  {
    title: "Engineering Tools",
    description:
      "Inspect files, modify code, execute commands, and interact with the repository through controlled tools.",
  },
  {
    title: "Cloud Sandbox",
    description:
      "Execute engineering commands in an isolated cloud environment with a persistent workspace.",
  },
  {
    title: "Build & Test",
    description:
      "Run the project's actual build and test workflows rather than relying only on generated code.",
  },
  {
    title: "Verification",
    description:
      "Use execution and test results to establish whether the requested change was successfully completed.",
  },
];

export default function EngineeringBench() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            AI Platform · Engineering Bench
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
            AI software engineering,
            <br />
            from repository to verified result.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Engineering Bench enables an AI engineering agent to understand a
            repository, implement software changes, execute them in an
            isolated cloud environment, and verify the result.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/demo"
              className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white"
            >
              Request a Demo
            </Link>

            <a
              href="https://aieng.bengalsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900"
            >
              Open Engineering Bench →
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              The engineering workflow
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
              Understand. Change. Execute. Verify.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Understand", "Analyze the repository and identify relevant code and dependencies."],
              ["02", "Change", "Plan and implement the requested software change."],
              ["03", "Execute", "Run commands, builds, and tests inside the cloud sandbox."],
              ["04", "Verify", "Validate the implementation using actual execution results."],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="text-sm font-semibold text-gray-400">
                  {number}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-950">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Capabilities
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-5xl">
            One platform for the engineering loop.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {capabilities.map((capability) => (
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
    </main>
  );
}