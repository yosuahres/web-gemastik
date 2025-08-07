"use client";

import { useAuth } from "@/contexts/AuthContext";
import SoilDataTable from "@/components/dashboard/SoilDataTable";
import PlantDataTable from "@/components/dashboard/PlantDataTable";

const DashboardPage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div>Please log in to access the dashboard.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-600 mt-2">Monitor your agricultural data and insights</p>
        </div>
        <div className="flex flex-col gap-8">
          <SoilDataTable />
          <PlantDataTable />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
