"use client";

import { FC } from "react";
import Chatbot from "@/app/chatbot/Chatbot";

interface RecommendationChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
}

const RecommendationChatbotModal: FC<RecommendationChatbotModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  if (!isOpen) return null;

  const getInitialPrompt = () => {
    if (!data) return "";
    if (data.disease_status) {
      return `My plant has ${data.disease_status}. What should I do?`;
    }
    if (data.ph) {
      return `My soil has a pH of ${data.ph}. What does this mean and what should I do?`;
    }
    return "I have an issue with my plant or soil. Can you help?";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg h-3/4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Get Recommendation</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
            &times;
          </button>
        </div>
        <div className="flex-grow overflow-y-auto">
          <Chatbot initialPrompt={getInitialPrompt()} />
        </div>
      </div>
    </div>
  );
};

export default RecommendationChatbotModal;
