'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';
import Chatbot, { AnxietyLevel } from '../chatbot/Chatbot';

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [anxietyLevel, setAnxietyLevel] = useState<AnxietyLevel>('LOW');
  const router = useRouter();
  const supabase = createClient();

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
      <div className="pt-16 flex-1 overflow-y-auto">
        <Chatbot anxietyLevel={anxietyLevel} />
      </div>
    </div>
  );
};

export default DashboardPage;
