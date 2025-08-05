
import React from "react";
import { motion } from "framer-motion";
import { FiHome, FiUser, FiDollarSign, FiTrendingUp, FiGrid } from "react-icons/fi";

export default function Navbar({ setPage, page }) {
  const navItems = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "dashboard", label: "Dashboard", icon: <FiGrid /> },
    { id: "account", label: "Account", icon: <FiUser /> },
    { id: "wallet", label: "Wallet", icon: <FiDollarSign /> },
    { id: "trades", label: "Live Trades", icon: <FiTrendingUp /> },
  ];

  return (
    <motion.div
      className="navbar-container"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="navbar-glass">
        {navItems.map((item) => (
          <motion.div
            key={item.id}
            className={`nav-item ${page === item.id ? "active" : ""}`}
            onClick={() => setPage(item.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * navItems.indexOf(item) }}
          >
            <span className="nav-icon">{item.icon}</span>
            <motion.span
              className="nav-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {item.label}
            </motion.span>
            {page === item.id && (
              <motion.div
                className="nav-indicator"
                layoutId="nav-indicator"
                transition={{ type: "spring", bounce: 0.2 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        .navbar-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
          width: 100%;
        }
        .navbar-glass {
          display: flex;
          background: rgba(31, 41, 55, 0.8);
          backdrop-filter: blur(10px);
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .nav-item {
          position: relative;
          display: flex;
          align-items: center;
          margin: 0 1rem;
          padding: 0.75rem 1.25rem;
          color: #e5e7eb;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        .nav-item.active {
          color: #ffffff;
        }
        .nav-icon {
          margin-right: 0.5rem;
          font-size: 1.1rem;
        }
        .nav-label {
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav-indicator {
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          height: 3px;
          background: #3b82f6;
          border-radius: 3px;
        }
      `}</style>
    </motion.div>
  );
}




