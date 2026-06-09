import { savingsRecommendations } from "@/data/finops-data";

export default function SavingsRecommendations() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Savings Recommendations</h3>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-slate-400">
            <tr>
              <th className="pb-3">Recommendation</th>
              <th className="pb-3">Category</th>
              <th className="pb-3">Savings</th>
              <th className="pb-3">Effort</th>
              <th className="pb-3">Priority</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {savingsRecommendations.map((item) => (
              <tr key={item.recommendation} className="border-t border-slate-800">
                <td className="py-3">{item.recommendation}</td>
                <td className="py-3">{item.category}</td>
                <td className="py-3 text-emerald-400">{item.savings}</td>
                <td className="py-3">{item.effort}</td>
                <td className="py-3">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                    {item.priority}
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