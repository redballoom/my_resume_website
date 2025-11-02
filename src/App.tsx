import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import { useState } from "react";
import { AuthContext } from '@/contexts/authContext';
import MobileNav from '@/components/MobileNav';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <div className="relative min-h-screen">
        <MobileNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/other" element={<div className="text-center text-xl p-8">Other Page - Coming Soon</div>} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}
