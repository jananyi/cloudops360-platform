import { monthlyBreakdown } from "@/data/finops-data";

export default function MonthlyBreakdownTable() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Monthly Cost Breakdown</h3>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3">Month</th>
              <th className="pb-3">Compute</th>
              <th className="pb-3">Storage</th>
              <th className="pb-3">Database</th>
              <th className="pb-3">Network</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {monthlyBreakdown.map((item) => (
              <tr key={item.month} className="border-t border-slate-800">
                <td className="py-3">{item.month}</td>
                <td className="py-3">{item.compute}</td>
                <td className="py-3">{item.storage}</td>
                <td className="py-3">{item.database}</td>
                <td className="py-3">{item.network}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}