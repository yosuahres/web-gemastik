"use client";

import Image from "next/image";
import { FC } from "react";

interface PlantData {
  id: number;
  timestamp: string;
  disease_status: string;
  image: string;
}

const plantData: PlantData[] = [
  { id: 1, timestamp: "2024-08-07 10:00:00", disease_status: "Healthy", image: "/images/plant1.jpg" },
  { id: 2, timestamp: "2024-08-07 10:05:00", disease_status: "Early Blight", image: "/images/plant2.jpg" },
  { id: 3, timestamp: "2024-08-07 10:10:00", disease_status: "Healthy", image: "/images/plant3.jpg" },
  { id: 4, timestamp: "2024-08-07 10:15:00", disease_status: "Late Blight", image: "/images/plant4.jpg" },
  { id: 5, timestamp: "2024-08-07 10:20:00", disease_status: "Healthy", image: "/images/plant5.jpg" },
];

interface PlantDataTableProps {
  onGetRecommendation: (data: PlantData) => void;
}

const PlantDataTable: FC<PlantDataTableProps> = ({ onGetRecommendation }) => {
  const isAnomaly = (plant: PlantData) => {
    return plant.disease_status !== "Healthy";
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Plant Data</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {plantData.map((plant, index) => (
              <tr key={plant.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="py-4 px-6 text-sm text-gray-900">{plant.id}</td>
                <td className="py-4 px-6 text-sm text-gray-900">{plant.timestamp}</td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    plant.disease_status === "Healthy" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {plant.disease_status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  <Image 
                    src={plant.image} 
                    alt={`Plant ${plant.id}`} 
                    width={100} 
                    height={100} 
                    className="rounded-lg shadow-sm" 
                  />
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {isAnomaly(plant) && (
                    <button
                      onClick={() => onGetRecommendation(plant)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Get Recommendation
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantDataTable;
