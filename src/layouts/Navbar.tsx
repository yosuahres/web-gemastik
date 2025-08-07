"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileDropdown from "@/components/ProfileDropdown";
import { useAuth } from "@/contexts/AuthContext";
import { useUI } from "@/contexts/UIContext";

const Navbar = () => {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const { isSidebarOpen } = useUI();

  const renderNavLinks = () => {
    if (loading) {
      return <div className="animate-pulse w-8 h-8 bg-gray-300 rounded-full"></div>;
    }

    if (user) {
      return (
        <div className="hidden md:flex space-x-4 items-center">
          {/* <Link href="/dashboard" className="text-white hover:text-gray-300 transition-colors">
            Dashboard
          </Link> */}
          {/* <Link 
            href="/chatbot" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Chatbot
          </Link> */}
          <ProfileDropdown user={user} />
        </div>
      );
    }

    if (pathname === "/") {
      return (
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/login" className="text-white">
            Login
          </Link>
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      );
    }

    if (pathname === "/login" || pathname === "/register") {
      return null;
    }

    return null;
  };

  return (
    <nav className={`text-white p-4 fixed top-0 left-0 w-full z-50 ${
      pathname.startsWith('/dashboard') || pathname.startsWith('/chatbot') ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
    }`}>
      <div className={`container mx-auto flex justify-between items-center transition-all duration-300 ${
        user && (pathname.startsWith('/dashboard') || pathname.startsWith('/chatbot')) && !isSidebarOpen ? 'ml-16' : ''
      }`}>
        <Link
          href={user ? "/dashboard" : "/"}
          className="flex items-center space-x-2 text-2xl font-bold"
        >
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
          <span>BotaniQ</span>
        </Link>
        <div className="hidden md:flex space-x-4 items-center">
          {renderNavLinks()}
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Button */}
          <button className="text-white focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
