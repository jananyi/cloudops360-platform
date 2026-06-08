import { environments } from "@/data/dashboard-data";

export default function EnvironmentHealth() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Environment Health</h3>

      <div className="mt-5 space-y-4">
        {environments.map((env) => (
          <div
            key={env.name}
            className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
          >
            <div>
              <p className="font-medium text-white">{env.name}</p>
              <p className="text-sm text-slate-400">
                {env.services} services · {env.uptime} uptime
              </p>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-sm ${
                env.health === "Healthy"
                  ? "bg-emerald-500/10 text-emerald-300"
                  : "bg-amber-500/10 text-amber-300"
              }`}
            >
              {env.health}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}