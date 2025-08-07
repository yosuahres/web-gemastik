"use client";

import Navbar from "@/layouts/Navbar";
import { usePathname } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useUI } from "@/contexts/UIContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { user } = useAuth();
  const { isSidebarOpen } = useUI();

  // Show sidebar on all pages when user is logged in, except login/register pages
  const showSidebar = user && pathname !== '/login' && pathname !== '/register' && pathname !== '/';

  return (
    <div>
      <Navbar />
      {showSidebar && <DashboardSidebar />}
      <main className={showSidebar ? `transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}` : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
