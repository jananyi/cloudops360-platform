import Link from "next/link";
import {
  BarChart3,
  ShieldCheck,
  Server,
  Brain,
  Activity,
  Rocket,
} from "lucide-react";

const menuItems = [
  { name: "Executive Dashboard", href: "/dashboard", icon: BarChart3 },
  { name: "FinOps", href: "/finops", icon: BarChart3 },
  { name: "Governance", href: "/governance", icon: ShieldCheck },
  { name: "Developer Portal", href: "/developer-portal", icon: Server },
  { name: "Deployment Center", href: "/deployment-center", icon: Rocket },
  { name: "Monitoring", href: "/monitoring", icon: Activity },
  { name: "AI Advisor", href: "/ai-advisor", icon: Brain },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 p-5">
      <h1 className="text-2xl font-bold text-white mb-8">
        CloudOps360
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-900 hover:text-white"
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}