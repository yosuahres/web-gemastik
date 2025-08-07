"use client";

import Navbar from "@/layouts/Navbar";
import { usePathname } from "next/navigation";
import { useState, createContext, useContext } from "react";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

interface SidebarContextType {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();
  const { user } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Show sidebar on all pages when user is logged in, except login/register pages
  const showSidebar = user && pathname !== '/login' && pathname !== '/register' && pathname !== '/';

  return (
    <SidebarContext.Provider value={{ isOpen: isSidebarOpen, toggleSidebar }}>
      <Navbar />
      {showSidebar && <DashboardSidebar isOpen={isSidebarOpen} />}
      <main className={showSidebar ? `transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}` : ''}>
        {children}
      </main>
    </SidebarContext.Provider>
  );
};

export default Layout;
