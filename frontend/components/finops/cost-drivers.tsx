import { costDrivers } from "@/data/finops-data";

export default function CostDrivers() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">
        Top Cost Drivers
      </h3>

      <div className="mt-5 space-y-3">
        {costDrivers.map((item) => (
          <div
            key={item.service}
            className="flex justify-between rounded-xl bg-slate-950 p-4"
          >
            <span className="text-slate-300">
              {item.service}
            </span>

            <span className="text-cyan-400">
              {item.spend}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}