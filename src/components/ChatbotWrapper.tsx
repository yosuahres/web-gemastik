"use client";

import Chatbot from "@/app/chatbot/Chatbot";

interface ChatbotWrapperProps {
  className?: string;
  initialPrompt?: string;
}

const ChatbotWrapper = ({
  className = "",
  initialPrompt,
}: ChatbotWrapperProps) => {
  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className="flex-1 overflow-hidden">
        <Chatbot initialPrompt={initialPrompt} />
      </div>
    </div>
  );
};

export default ChatbotWrapper;
