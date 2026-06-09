import { idleResources } from "@/data/finops-data";

export default function IdleResources() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Idle Resources
      </h3>

      <div className="mt-5 space-y-3">
        {idleResources.map((item) => (
          <div
            key={item.resource}
            className="rounded-xl bg-slate-950 p-4"
          >
            <p className="text-white">{item.resource}</p>

            <p className="text-sm text-slate-400">
              {item.type}
            </p>

            <p className="mt-1 text-emerald-400">
              {item.savings}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}