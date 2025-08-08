"use client";

import ChatbotWrapper from "@/components/ChatbotWrapper";
import { useAuth } from "@/contexts/AuthContext";
import { useUI } from "@/contexts/UIContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ChatbotPage = () => {
  const { user, loading } = useAuth();
  const searchParams = useSearchParams();
  const { setSidebarOpen } = useUI();

  useEffect(() => {
    setSidebarOpen(false);
  }, [setSidebarOpen]);

  const getInitialPrompt = () => {
    const disease_status = searchParams.get("disease_status");
    const ph = searchParams.get("ph");

    if (disease_status) {
      return `My plant has ${disease_status}. What should I do?`;
    }
    if (ph) {
      return `My soil has a pH of ${ph}. What does this mean and what should I do?`;
    }
    return undefined;
  };

  const initialPrompt = getInitialPrompt();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white pt-16">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-800">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          {/* <div>
            <h1 className="text-2xl font-bold">Anxiety Support Chatbot</h1>
            <p className="text-gray-400">
              {user 
                ? `Welcome back! Let's continue our conversation.`
                : `Talk to our AI assistant about your feelings.`
              }
            </p>
          </div> */}
        </div>
      </div>

      {/* Guest Notice */}
      {!user && (
        <div className="bg-blue-900/20 border border-blue-800 px-4 py-3 mx-4 mt-4 rounded-lg">
          <div className="max-w-5xl mx-auto">
            <p className="text-blue-200 text-sm">
              💡 You're using the chatbot as a guest.
              <Link
                href="/register"
                className="text-blue-400 hover:underline ml-1"
              >
                Create an account
              </Link>{" "}
              or
              <Link
                href="/login"
                className="text-blue-400 hover:underline ml-1"
              >
                sign in
              </Link>{" "}
              to save your conversations and access personalized anxiety level
              settings.
            </p>
          </div>
        </div>
      )}

      {/* Chatbot */}
      <div className="flex-1 overflow-hidden">
        <div className="max-w-5xl mx-auto h-full">
          <ChatbotWrapper className="h-full" initialPrompt={initialPrompt} />
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;
