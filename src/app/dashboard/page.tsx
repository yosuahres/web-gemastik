"use client";

import ChatbotWrapper from "@/components/ChatbotWrapper";
import { useAuth } from "@/contexts/AuthContext";

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
    <div className="flex flex-col h-screen bg-black">
      <div className="pt-16 flex-1 overflow-hidden">
        <ChatbotWrapper showHeader={true} defaultAnxietyLevel="LOW" />
      </div>
    </div>
  );
};

export default DashboardPage;
