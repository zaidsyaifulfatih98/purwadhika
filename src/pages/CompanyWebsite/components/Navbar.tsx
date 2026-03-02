import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useMobileMenu } from "../hooks/useMobileMenu";
import Logo from"../assets/logo.jpg"
import { useAuthStore } from "../store/useAuthStore";


// Gambar logo bisa di public/logo-coffejiwo.png
const Navbar: React.FC = () => {
  const { navLinksRef, menuToggleRef, toggleMenu } = useMobileMenu("navLinks", "menu-toggle");
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuthStore();

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
        <Link to="/company-page/about-us" className={location.pathname === "/company-page/about-us" ? "active" : ""}>About Us</Link>
        <Link to="/company-page/products" className={location.pathname === "/company-name/products" ? "active" : ""}>Products</Link>
        <Link to="/teams" className={location.pathname === "/teams" ? "active" : ""}>Teams</Link>
        <Link to="/company-page/blog" className={location.pathname === "/company-page/blog" ? "active" : ""}>Blog</Link>
        {!isAuthenticated ? (
          <Link to="/company-page/login" className={location.pathname === "/company-page/login" ? "active" : ""}>Login</Link>
        ) : (
          <>
            <Link to="/company-page/create-blog" className={location.pathname === "/company-page/create-blog" ? "active" : ""}>Create Blog</Link>
            <div className="flex justify-end gap-3">
              <p className="text-white" id="user">{user?.name || user?.email}</p>
              <button type="button" className="text-white" onClick={logout}>Logout</button>

            </div>
          </>
        )}
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