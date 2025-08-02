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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="w-full max-w-4xl space-y-4">
        {/* <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Welcome, {user.email}</h2>
        </div> */}

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Simulasi Level Anxiety</h3>
          <div className="flex space-x-2">
            <button onClick={() => setAnxietyLevel('LOW')} className="px-4 py-2 bg-green-500 rounded-md">Set Low</button>
            <button onClick={() => setAnxietyLevel('MEDIUM')} className="px-4 py-2 bg-yellow-500 rounded-md">Set Medium</button>
            <button onClick={() => setAnxietyLevel('HIGH')} className="px-4 py-2 bg-red-500 rounded-md">Set High</button>
          </div>
        </div>

        <div className="h-[60vh] bg-gray-800 rounded-lg">
          <Chatbot anxietyLevel={anxietyLevel} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
