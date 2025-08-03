"use client";

import { useState } from "react";
import Chatbot, { AnxietyLevel } from "../chatbot/Chatbot";
import { useAuth } from "@/contexts/AuthContext";

const DashboardPage = () => {
  const { user, loading } = useAuth();
  const [anxietyLevel, _setAnxietyLevel] = useState<AnxietyLevel>("LOW");

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
    <div className="flex flex-col h-screen">
      <div className="pt-16 flex-1 overflow-y-auto">
        <Chatbot anxietyLevel={anxietyLevel} />
      </div>
    </div>
  );
};

export default DashboardPage;
