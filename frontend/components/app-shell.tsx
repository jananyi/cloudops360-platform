import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";

export default function AppShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="mt-2 text-slate-400">{description}</p>

          <div className="mt-6">{children}</div>
        </main>
      </div>
    </div>
  );
}