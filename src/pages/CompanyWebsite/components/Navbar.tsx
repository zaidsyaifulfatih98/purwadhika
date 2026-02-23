import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMobileMenu } from "../hooks/useMobileMenu";
import Logo from"../assets/logo.jpg"

// Gambar logo bisa di public/logo-coffejiwo.png
const Navbar: React.FC = () => {
  const { navLinksRef, menuToggleRef, toggleMenu } = useMobileMenu("navLinks", "menu-toggle");
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Anomali Coffe" className="bg-white logo-img" />
        <span>Anomali Caffee</span>
      </div>
      <div
        className="nav-links"
        ref={navLinksRef}
        id="navLinks"
        style={{ display: "flex" }}
      >
        <Link to="/company-page" className={location.pathname === "/company-page" ? "active" : ""}>Home</Link>
        <Link to="/about-us" className={location.pathname === "/about-us" ? "active" : ""}>About Us</Link>
        <Link to="/services" className={location.pathname === "/services" ? "active" : ""}>Products</Link>
        <Link to="/teams" className={location.pathname === "/teams" ? "active" : ""}>Teams</Link>
        <Link to="/blog" className={location.pathname === "/blog" ? "active" : ""}>Blog List</Link>
        <Link to="/create-blog" className={location.pathname === "/create-blog" ? "active" : ""}>Create Blog</Link>
      </div>
      <div
        className="menu-toggle"
        ref={menuToggleRef}
        role="button"
        tabIndex={0}
        aria-label="Menu"
        onClick={toggleMenu}
        onKeyDown={e => { if (e.key === "Enter") toggleMenu(); }}
      >
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};
export default Navbar;