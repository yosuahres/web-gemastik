'use client';

import React from 'react';

interface SidebarProps {
  onNewChat: () => void;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onNewChat, onClose }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-96 bg-gray-900 text-white p-4 z-40 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <svg
          className="w-8 h-8 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>
        <button onClick={onClose}>
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <button
        onClick={onNewChat}
        className="w-full bg-gray-200 text-gray-900 p-2 rounded-full font-bold my-4"
      >
        Start New Chat
      </button>
    </div>
  );
};

export default Sidebar;
