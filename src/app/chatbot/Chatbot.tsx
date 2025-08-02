'use client';

import React, { useState, useRef, useEffect } from 'react';
import Message from './Message';

export type AnxietyLevel = 'LOW' | 'MEDIUM' | 'HIGH';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatbotProps {
  anxietyLevel: AnxietyLevel;
}

const Chatbot: React.FC<ChatbotProps> = ({ anxietyLevel }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([{ text: 'Hello! How are you feeling today?', sender: 'bot' }]);
  const [userInput, setUserInput] = useState('');
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
      setMessages((prevMessages) => [...prevMessages, { text: `Anxiety level set to: ${anxietyLevel}`, sender: 'bot' }]);
    }
  }, [anxietyLevel]);

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    // Add user message to chat
    setMessages([...messages, { text: userInput, sender: 'user' }]);
    setUserInput('');

    // Get bot response from Gemini API
    const getResponse = async () => {
      const response = await fetch('/api/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput, anxietyLevel }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prevMessages) => [...prevMessages, { text: data.text, sender: 'bot' }]);
      } else {
        setMessages((prevMessages) => [...prevMessages, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
      }
    };
    getResponse();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <div ref={chatboxRef} style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        {messages.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>
      <div style={{ padding: '1rem', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          style={{ width: 'calc(100% - 70px)', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button onClick={handleSendMessage} style={{ width: '60px', padding: '0.5rem', marginLeft: '10px', borderRadius: '4px', border: 'none', background: '#007bff', color: 'white' }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
