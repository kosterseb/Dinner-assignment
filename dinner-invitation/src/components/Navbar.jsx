import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle =
    "px-4 py-2 text-lg font-medium hover:text-[#b8860b] transition-colors";

  return (
    <nav className="flex justify-center items-center py-6 bg-white shadow-sm sticky top-0 z-50">
      <ul className="flex gap-8">
        <li><NavLink to="/" className={linkStyle}>Forside</NavLink></li>
        <li><NavLink to="/pris" className={linkStyle}>Prisberegning</NavLink></li>
        <li><NavLink to="/bordplan" className={linkStyle}>Bordplan</NavLink></li>
      </ul>
    </nav>
  );
}
