import { finopsAnomalies } from "@/data/finops-data";

export default function FinopsAnomaliesTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Cost Anomaly Details</h3>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3">Service</th>
              <th className="pb-3">Account</th>
              <th className="pb-3">Region</th>
              <th className="pb-3">Expected</th>
              <th className="pb-3">Actual</th>
              <th className="pb-3">Variance</th>
              <th className="pb-3">Severity</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {finopsAnomalies.map((item) => (
              <tr key={`${item.service}-${item.account}`} className="border-t border-slate-800">
                <td className="py-3">{item.service}</td>
                <td className="py-3">{item.account}</td>
                <td className="py-3">{item.region}</td>
                <td className="py-3">{item.expected}</td>
                <td className="py-3 text-red-400">{item.actual}</td>
                <td className="py-3 text-amber-400">{item.variance}</td>
                <td className="py-3">
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-300">
                    {item.severity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}