"use client";

import {
  PieChart,
  Pie,
  Tooltip,
  ResponsiveContainer,
  Cell,
  Legend,
} from "recharts";

import { regionCosts } from "@/data/dashboard-data";

const COLORS = ["#22d3ee", "#22c55e", "#f59e0b"];

export default function RegionCostChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={regionCosts}
            dataKey="cost"
            nameKey="region"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {regionCosts.map((entry, index) => (
              <Cell key={entry.region} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}