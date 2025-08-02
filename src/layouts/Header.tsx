'use client';

import Link from 'next/link';
import { User } from '@supabase/supabase-js';
import ProfileDropdown from '@/components/ProfileDropdown';

const Header = ({ user, onToggleSidebar }: { user: User | null; onToggleSidebar: () => void }) => {
  return (
    <header className="bg-transparent text-white p-4 absolute top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={onToggleSidebar}>
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold">
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
          <span>anxiety</span>
        </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          {user ? (
            <ProfileDropdown user={user} />
          ) : (
            <>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
              <Link href="/register" className="hover:text-gray-400">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
