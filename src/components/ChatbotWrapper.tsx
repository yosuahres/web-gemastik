"use client";

import { useState } from "react";
import Chatbot, { AnxietyLevel } from "@/app/chatbot/Chatbot";
import { useAuth } from "@/contexts/AuthContext";

interface ChatbotWrapperProps {
  showHeader?: boolean;
  defaultAnxietyLevel?: AnxietyLevel;
  className?: string;
}

const ChatbotWrapper = ({ 
  showHeader = true, 
  defaultAnxietyLevel = "LOW",
  className = ""
}: ChatbotWrapperProps) => {
  const { user } = useAuth();
  const [anxietyLevel, setAnxietyLevel] = useState<AnxietyLevel>(defaultAnxietyLevel);

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* {showHeader && (
        <div className="px-4 py-4 border-b border-gray-800 bg-gray-900">

        </div>
      )} */}
      
      <div className="flex-1 overflow-hidden">
        <Chatbot anxietyLevel={user ? anxietyLevel : defaultAnxietyLevel} />
      </div>
    </div>
  );
};

export default ChatbotWrapper;
