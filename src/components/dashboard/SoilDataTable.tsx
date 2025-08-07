"use client";

const soilData = [
  { id: 1, timestamp: "2024-08-07 10:00:00", ph: 6.5, moisture: 45, temperature: 25 },
  { id: 2, timestamp: "2024-08-07 10:05:00", ph: 6.6, moisture: 46, temperature: 25.1 },
  { id: 3, timestamp: "2024-08-07 10:10:00", ph: 6.5, moisture: 45.5, temperature: 25.2 },
  { id: 4, timestamp: "2024-08-07 10:15:00", ph: 6.7, moisture: 47, temperature: 25.1 },
  { id: 5, timestamp: "2024-08-07 10:20:00", ph: 6.6, moisture: 46.5, temperature: 25.3 },
];

const SoilDataTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Soil Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">pH</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Moisture (%)</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Temperature (°C)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {soilData.map((data, index) => (
              <tr key={data.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-4 px-6 text-sm text-gray-900">{data.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{data.timestamp}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{data.ph}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{data.moisture}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{data.temperature}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoilDataTable;
