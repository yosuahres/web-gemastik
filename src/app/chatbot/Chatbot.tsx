"use client";

import React, { useState, useRef, useEffect } from "react";
import Message from "./Message";

export type AnxietyLevel = "LOW" | "MEDIUM" | "HIGH";

interface ChatMessage {
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  anxietyLevel: AnxietyLevel;
}

const Chatbot: React.FC<ChatbotProps> = ({ anxietyLevel }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! How are you feeling today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const chatboxRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: `Anxiety level set to: ${anxietyLevel}`, sender: "bot" },
      ]);
    }
  }, [anxietyLevel]);

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, sender: "user" }]);
    setUserInput("");

    // Get bot response from Gemini API
    const getResponse = async () => {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userInput, anxietyLevel }),
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
            onClick={handleSendMessage}
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
