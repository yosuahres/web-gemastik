"use client";

import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";
import { AnxietyLevel } from "@/types/api";

interface ChatMessage {
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  initialPrompt?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ initialPrompt }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const chatboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const getInitialRecommendation = async (prompt: string) => {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: prompt }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([{ text: data.text, sender: "bot" }]);
      } else {
        setMessages([{ text: "Sorry, something went wrong.", sender: "bot" }]);
      }
    };

    if (initialPrompt) {
      getInitialRecommendation(initialPrompt);
    } else {
      setMessages([
        {
          text: "Hello! How can I help you with your farm today?",
          sender: "bot",
        },
      ]);
    }
  }, [initialPrompt]);

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const newUserMessage: ChatMessage = { text: userInput, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setUserInput("");

    // Get bot response from Gemini API
    const getResponse = async () => {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: data.text, sender: "bot" },
        ]);
      } else {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, something went wrong.", sender: "bot" },
        ]);
      }
    };
    getResponse();
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto bg-black text-white">
      <div
        ref={chatboxRef}
        className="flex-1 p-4 overflow-y-auto flex flex-col w-full no-scrollbar"
      >
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div className="p-4 flex justify-center">
        <div className="relative w-full">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Your Message..."
            className="w-full p-4 pr-16 rounded-full bg-gray-800 text-white border border-gray-600 focus:border-orange-400 focus:outline-none"
          />
          <button
            onClick={() => handleSendMessage()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-orange-400 hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
