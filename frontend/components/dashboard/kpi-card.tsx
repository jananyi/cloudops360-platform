type KpiCardProps = {
  title: string;
  value: string;
  change: string;
  status: string;
};

const statusColor: Record<string, string> = {
  success: "text-emerald-400",
  warning: "text-amber-400",
  danger: "text-red-400",
  info: "text-cyan-400",
};

export default function KpiCard({ title, value, change, status }: KpiCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-3 text-3xl font-bold text-white">{value}</h3>
      <p className={`mt-2 text-sm ${statusColor[status]}`}>{change}</p>
    </div>
  );
}