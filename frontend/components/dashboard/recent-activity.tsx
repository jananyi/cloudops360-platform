import { recentActivity } from "@/data/dashboard-data";

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-white">Recent Activity</h3>

      <div className="mt-5 space-y-4">
        {recentActivity.map((activity, index) => (
          <div key={activity} className="flex gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />

            <div>
              <p className="text-sm text-slate-300">{activity}</p>
              <p className="text-xs text-slate-500">
                {index + 1} hour{index === 0 ? "" : "s"} ago
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}