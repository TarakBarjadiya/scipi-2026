import React from "react";
import { PageId, NavItem } from "../types";

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  isMenuOpen,
  setIsMenuOpen,
  navItems,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* --- LOGO SECTION --- */}
        <div className="flex items-center gap-5 flex-1">
          {/* DU Logo — always left */}
          <img
            src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets/DU.svg"
            alt="Darshan University Logo"
            className="h-10 md:h-12 w-auto object-contain transition-transform"
            loading="lazy"
          />

          {/* SciPi Logo — Centered on mobile due to flex-1 on parent, left-aligned on desktop */}
          <div className="flex-1 flex justify-center lg:!justify-start">
            <img
              src="https://cdn.jsdelivr.net/gh/VasudevBarjadiya/sci-pi-assets@master/SciPi_26_nc.svg"
              alt="Sci-π Logo"
              className="h-10 md:h-12 w-auto object-contain transition-transform"
              loading="lazy"
            />
          </div>
        </div>

        {/* Desktop Navigation: hidden by default, shown at lg */}
        {/* This should now correctly appear on the right side of the header on your laptop screen. */}
        <nav className="hidden lg:!flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                activePage === item.id
                  ? "text-accent-primary scale-105 underline underline-offset-6"
                  : "text-slate-600 hover:bg-slate-100 hover:text-accent-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button - still hidden on desktop (lg:hidden) */}
        <button
          className="lg:hidden p-2 text-slate-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden glass border-b border-slate-200 px-4 py-4 space-y-1 animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                activePage === item.id
                  ? "bg-accent-primary text-white"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
