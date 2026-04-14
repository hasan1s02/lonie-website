import React, { useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { Bot } from 'lucide-react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Navbar = () => (
  <header className="container">
    <Link to="/" className="logo">
      <Bot size={32} color="#6366F1" />
      <span>Lonie</span>
    </Link>
    <nav className="nav-links">
      <Link to="/blog">Blog</Link>
      <a href="/#pricing">Pricing</a>
      <Link to="/privacy">Privacy Policy</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="container">
    <div className="footer-content">
      <div className="logo">
        <Bot size={24} color="#6366F1" />
        <span>Lonie</span>
      </div>
      <p>&copy; {new Date().getFullYear()} Lonieapp.com. All rights reserved.</p>
      <div className="footer-links">
        <Link to="/blog">Blog</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>
    </div>
  </footer>
);

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
