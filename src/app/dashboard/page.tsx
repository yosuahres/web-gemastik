'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import Chatbot, { AnxietyLevel } from '../chatbot/Chatbot';
import Header from '@/layouts/Header';
import Sidebar from '@/layouts/Sidebar';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [anxietyLevel, setAnxietyLevel] = useState<AnxietyLevel>('LOW');
  const router = useRouter();
  const supabase = createClient();
  const [chatbotKey, setChatbotKey] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleNewChat = () => {
    setChatbotKey(prevKey => prevKey + 1);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUser(data.user);
      } else {
        router.push('/login');
      }
    };
    getUser();
  }, [router, supabase.auth]);


  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-screen">
      <Header user={user} onToggleSidebar={toggleSidebar} />
      <div className="flex flex-1">
        {isSidebarOpen && <Sidebar onNewChat={handleNewChat} onClose={toggleSidebar} />}
        <div className="flex-1 pt-16 overflow-y-auto">
          <Chatbot key={chatbotKey} anxietyLevel={anxietyLevel} onNewChat={handleNewChat} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
