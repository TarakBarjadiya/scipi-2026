import React, { useState, useEffect } from "react";
import "./index.css";
import { PageId, NavItem } from "./types";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Keynote from "./components/Keynote";
import Tracks from "./components/Tracks";
import Guidelines from "./components/Guidelines";
import Schedule from "./components/Schedule";
import Registration from "./components/Registration";
import Contact from "./components/Contact";

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "keynote", label: "Keynote" },
  { id: "tracks", label: "Categories" },
  { id: "guidelines", label: "Guidelines" },
  { id: "schedule", label: "Schedule" },
  { id: "registration", label: "Registration" },
  { id: "contact", label: "Contact" },
];

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home onNavigate={setActivePage} />;
      case "about":
        return <About />;
      case "keynote":
        return <Keynote />;
      case "tracks":
        return <Tracks />;
      case "guidelines":
        return <Guidelines />;
      case "schedule":
        return <Schedule />;
      case "registration":
        return <Registration />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col hero-gradient">
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={NAV_ITEMS}
      />

      <main className="pt-32 pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto w-full transition-all duration-300">
          {renderPage()}
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
          <p className="font-medium">
            © 2026 Vasudev Barjadiya, Darshan University
          </p>

          <p className="mt-1">
            Organized by the Department of Humanities & Sciences and the
            Department of Microbiology
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
