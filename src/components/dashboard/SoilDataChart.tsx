"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const dummySoilData = [
  { name: "NPK", value: 10, abnormal: false },
  { name: "pH", value: 6.5, abnormal: false },
  { name: "EC", value: 1.2, abnormal: true },
  { name: "Moisture", value: 45, abnormal: false },
];

const SoilDataChart = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Soil Data Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dummySoilData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {dummySoilData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.abnormal ? "#ef4444" : "#8884d8"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SoilDataChart;
