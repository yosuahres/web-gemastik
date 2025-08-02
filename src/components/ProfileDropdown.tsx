'use client';

import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

const ProfileDropdown = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl z-20">
          <div className="px-4 py-2 text-sm text-gray-700">
            {user.email}
          </div>
          <button
            onClick={handleLogout}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
