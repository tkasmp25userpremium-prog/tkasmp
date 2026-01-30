import React from "react";
import { Page } from "../types";

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, isAdmin }) => {
  const navItems = [
    { label: "Home", id: Page.HOME },
    { label: "Matematika", id: Page.MATEMATIKA },
    { label: "B. Indonesia", id: Page.BAHASA_INDONESIA },
    { label: "Premium", id: Page.PREMIUM },
  ];

  if (isAdmin) {
    navItems.push({ label: "Admin Panel", id: Page.ADMIN });
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div
          className="text-xl font-extrabold tracking-tighter cursor-pointer hover:text-blue-500 transition-colors"
          onClick={() => setCurrentPage(Page.HOME)}
          role="button"
          aria-label="Go to Home"
        >
          TKA<span className="text-blue-500">SMP</span>
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`text-sm font-semibold transition-colors ${
                currentPage === item.id ? "text-blue-500" : "text-zinc-400 hover:text-white"
              }`}
              aria-current={currentPage === item.id ? "page" : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => setCurrentPage(Page.PREMIUM)} 
          className="md:hidden p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          aria-label="Premium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </button>
      </div>

      <div className="md:hidden flex overflow-x-auto border-t border-zinc-900 px-4 py-2 gap-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`text-xs whitespace-nowrap px-3 py-1 rounded-full transition-colors ${
              currentPage === item.id ? "bg-blue-600 text-white" : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800"
            }`}
            aria-current={currentPage === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;