import AppShell from "@/components/app-shell";

const cards = [
  "Cost by Service",
  "Cost by Region",
  "Idle Resource Detection",
  "Optimization Recommendations",
];

export default function Page() {
  return (
    <AppShell
      title="FinOps Dashboard"
      description="Analyze cloud spend, anomalies, idle resources and optimization opportunities."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white"
          >
            <h3 className="text-lg font-semibold">{card}</h3>
            <p className="mt-2 text-sm text-slate-400">
              Module placeholder prepared for Day 8 implementation.
            </p>
          </div>
        ))}
      </div>
    </AppShell>
  );
}