import AppShell from "@/components/app-shell";
import KpiCard from "@/components/dashboard/kpi-card";
import ServiceCostChart from "@/components/charts/service-cost-chart";
import RegionCostChart from "@/components/charts/region-cost-chart";
import SpendTrendChart from "@/components/charts/spend-trend-chart";
import AccountCostChart from "@/components/finops/account-cost-chart";
import CostDrivers from "@/components/finops/cost-drivers";
import IdleResources from "@/components/finops/idle-resources";
import FinopsAnomaliesTable from "@/components/finops/finops-anomalies-table";
import SavingsRecommendations from "@/components/finops/savings-recommendations";
import MonthlyBreakdownTable from "@/components/finops/monthly-breakdown-table"; 

import { finopsMetrics } from "@/data/finops-data";

export default function FinOpsPage() {
  return (
    <AppShell
      title="FinOps Dashboard"
      description="Cloud cost visibility, anomaly tracking, idle resource detection and optimization insights."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {finopsMetrics.map((metric) => (
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

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <h3 className="mb-4 text-lg font-semibold text-white">
            Cost by Account
          </h3>
          <AccountCostChart />
        </div>
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        <CostDrivers />
        <IdleResources />
      </div>
      <div className="mt-6">
  <FinopsAnomaliesTable />
</div>

<div className="mt-6 grid gap-4 xl:grid-cols-2">
  <SavingsRecommendations />
  <MonthlyBreakdownTable />
</div>
    </AppShell>
  );
}