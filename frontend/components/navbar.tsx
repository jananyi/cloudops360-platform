export default function Navbar() {
  return (
    <header className="border-b border-slate-800 bg-slate-950 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">
          CloudOps360
        </h2>

        <div className="flex gap-3">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Healthy
          </span>

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            Demo Environment
          </span>
        </div>
      </div>
    </header>
  );
}