import { compliance } from "@/data/dashboard-data";

export default function ComplianceSummary() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Compliance Summary</h3>

      <div className="mt-5 space-y-4">
        {compliance.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-300">{item.label}</span>
              <span className="text-cyan-400">{item.value}</span>
            </div>

            <div className="h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-cyan-500"
                style={{ width: item.value }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}