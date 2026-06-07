import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function DashboardPage() {
  return (
    <div className="flex bg-slate-950 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-white">
            Executive Dashboard
          </h1>

          <p className="mt-2 text-slate-400">
            Cloud Governance, FinOps and DevOps overview.
          </p>
        </div>
      </div>
    </div>
  );
}