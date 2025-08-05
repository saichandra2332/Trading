// WalletPage.js
import React from "react";
import { motion } from "framer-motion";

export default function WalletPage({ wallet }) {
  return (
    <motion.div
      style={{
        padding: "24px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        borderRadius: "16px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.05)",
        maxWidth: "400px",
        margin: "0 auto"
      }}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.h2 
        style={{
          margin: "0 0 20px 0",
          color: "#2c3e50",
          fontSize: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <motion.span 
          animate={{ rotate: [0, 10, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          💰
        </motion.span>
        Wallet Overview
      </motion.h2>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <motion.div
          style={{
            background: "rgba(40, 167, 69, 0.1)",
            padding: "16px",
            borderRadius: "12px",
            borderLeft: "4px solid #28a745"
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p style={{ margin: "0 0 4px 0", color: "#495057", fontSize: "14px" }}>Available Funds</p>
          <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#28a745" }}>
            ₹{wallet.cash?.toLocaleString() || 0}
          </p>
        </motion.div>
        
        <motion.div
          style={{
            background: "rgba(13, 110, 253, 0.1)",
            padding: "16px",
            borderRadius: "12px",
            borderLeft: "4px solid #0d6efd"
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p style={{ margin: "0 0 4px 0", color: "#495057", fontSize: "14px" }}>Total Net Worth</p>
          <p style={{ margin: 0, fontSize: "24px", fontWeight: "700", color: "#0d6efd" }}>
            ₹{wallet.net?.toLocaleString() || 0}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}