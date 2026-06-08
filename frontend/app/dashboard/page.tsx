import AppShell from "@/components/app-shell";
import KpiCard from "@/components/dashboard/kpi-card";
import EnvironmentHealth from "@/components/dashboard/environment-health";
import AnomaliesTable from "@/components/dashboard/anomalies-table";
import OptimizationList from "@/components/dashboard/optimization-list";
import ComplianceSummary from "@/components/dashboard/compliance-summary";
import RecentActivity from "@/components/dashboard/recent-activity";
import SpendTrendChart from "@/components/charts/spend-trend-chart";
import ServiceCostChart from "@/components/charts/service-cost-chart";
import RegionCostChart from "@/components/charts/region-cost-chart";

import { kpiMetrics } from "@/data/dashboard-data";

export default function DashboardPage() {
  return (
    <AppShell
      title="Executive Dashboard"
      description="Enterprise-wide cloud cost, governance, reliability and optimization overview."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpiMetrics.map((metric) => (
          <KpiCard
            key={metric.title}
            title={metric.title}
            value={metric.value}
            change={metric.change}
            status={metric.status}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Monthly Spend Trend
          </h3>
          <SpendTrendChart />
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Cost by Service
          </h3>
          <ServiceCostChart />
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Cost by Region
          </h3>
          <RegionCostChart />
        </div>

        <EnvironmentHealth />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <AnomaliesTable />
        <OptimizationList />
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <ComplianceSummary />
        <RecentActivity />
      </div>
    </AppShell>
  );
}