import { optimizations } from "@/data/dashboard-data";

export default function OptimizationList() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Optimization Opportunities
      </h3>

      <div className="mt-5 space-y-4">
        {optimizations.map((item) => (
          <div
            key={item.title}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-white">{item.title}</p>
                <p className="mt-1 text-sm text-emerald-400">
                  Potential savings: {item.savings}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs ${
                  item.priority === "High"
                    ? "bg-red-500/10 text-red-300"
                    : "bg-amber-500/10 text-amber-300"
                }`}
              >
                {item.priority}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}