'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
  const [user, setUser] = useState<any>(null);
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="p-8 space-y-6 bg-gray-800 rounded-lg">
        <h2 className="text-2xl font-bold text-center">
          Welcome, {user.email}
        </h2>
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
