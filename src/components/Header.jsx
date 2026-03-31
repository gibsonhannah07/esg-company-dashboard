import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>ESG Metrics Dashboard</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;