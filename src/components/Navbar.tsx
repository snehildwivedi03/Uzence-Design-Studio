import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { applyTheme, getInitialTheme } from "../utils/theme";
import type { Theme } from "../utils/theme";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="font-bold uppercase">UZENCE</div>

      <div className="hidden md:flex nav-links">
        <NavLink to="/">Input Demo</NavLink>
        <NavLink to="/table">Table Demo</NavLink>
      </div>

      <div className="flex items-center gap-3">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <button onClick={() => setMobileOpen((s) => !s)} className="md:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
