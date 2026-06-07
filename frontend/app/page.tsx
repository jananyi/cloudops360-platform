const modules = [
  {
    title: "Executive Dashboard",
    description: "Cloud spend, savings, anomalies, compliance and health overview.",
  },
  {
    title: "FinOps Dashboard",
    description: "Cost by service, region, account, idle resources and savings.",
  },
  {
    title: "Developer Portal",
    description: "Create environments and simulate Terraform provisioning workflows.",
  },
  {
    title: "Deployment Center",
    description: "Track build history, deployment status and rollback simulation.",
  },
  {
    title: "Monitoring Dashboard",
    description: "CPU, memory, network, pod health, incidents and SLO summary.",
  },
  {
    title: "Governance & Security",
    description: "Tag compliance, public exposure, security risks and findings.",
  },
  {
    title: "AI Cloud Advisor",
    description: "Ask AI about cloud cost, risks, idle resources and optimization.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <aside className="hidden min-h-screen w-72 border-r border-slate-800 bg-slate-950 p-6 lg:block">
          <div className="mb-10">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              CloudOps360
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Cloud Governance, FinOps & DevOps Control Center
            </p>
          </div>

          <nav className="space-y-2">
            {modules.map((module) => (
              <a
                key={module.title}
                href="#"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-white"
              >
                {module.title}
              </a>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <header className="border-b border-slate-800 bg-slate-950/80 px-6 py-5 backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-400">
                  Enterprise Cloud Operations Platform
                </p>
                <h2 className="mt-1 text-3xl font-bold text-white">
                  Executive Dashboard
                </h2>
              </div>

              <div className="flex gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Platform Healthy
                </span>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Demo Environment
                </span>
              </div>
            </div>
          </header>

          <section className="p-6">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Monthly Cloud Spend</p>
                <h3 className="mt-3 text-3xl font-bold">$48,320</h3>
                <p className="mt-2 text-sm text-red-400">+12.4% from last month</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Savings Identified</p>
                <h3 className="mt-3 text-3xl font-bold">$7,860</h3>
                <p className="mt-2 text-sm text-emerald-400">16.2% optimization opportunity</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Active Anomalies</p>
                <h3 className="mt-3 text-3xl font-bold">8</h3>
                <p className="mt-2 text-sm text-amber-400">3 high severity</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                <p className="text-sm text-slate-400">Compliance Score</p>
                <h3 className="mt-3 text-3xl font-bold">87%</h3>
                <p className="mt-2 text-sm text-cyan-400">12 findings open</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Environment Health
                </h3>
                <div className="mt-5 space-y-4">
                  {["Production", "QA", "Development"].map((env) => (
                    <div
                      key={env}
                      className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
                    >
                      <div>
                        <p className="font-medium text-white">{env}</p>
                        <p className="text-sm text-slate-400">
                          Services running normally
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                        Healthy
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold text-white">
                  Platform Modules
                </h3>
                <div className="mt-5 grid gap-3">
                  {modules.slice(1, 5).map((module) => (
                    <div
                      key={module.title}
                      className="rounded-xl border border-slate-800 bg-slate-950 p-4"
                    >
                      <p className="font-medium text-white">{module.title}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {module.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}