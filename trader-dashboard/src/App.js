
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { ref, onValue } from "firebase/database";
import AccountPage from "./pages/AccountPage";
import WalletPage from "./pages/WalletPage";
import LiveTradesPage from "./pages/LiveTradesPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import Navbar from "./pages/Navbar";

export default function App() {
  const [account, setAccount] = useState({});
  const [wallet, setWallet] = useState({});
  const [trades, setTrades] = useState([]);
  const [page, setPage] = useState("dashboard");
  const [positions, setPositions] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    onValue(ref(db, "account"), (snap) => snap.exists() && setAccount(snap.val()));
    onValue(ref(db, "wallet"), (snap) => snap.exists() && setWallet(snap.val()));
    onValue(ref(db, "trades"), (snap) => {
      const data = snap.val();
      setTrades(data ? Object.values(data).reverse() : []);
    });
    onValue(ref(db, "dashboard/positions"), (snap) => {
      setPositions(snap.exists() ? Object.values(snap.val()) : []);
    });
    onValue(ref(db, "dashboard/summary"), (snap) => {
      setSummary(snap.exists() ? snap.val() : {});
    });
  }, []);

  return (
    <div style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: "20px",
      minHeight: "100vh",
      background: "#f9fafb"
    }}>
      {/* Navbar */}
      <Navbar setPage={setPage} page={page} />

      {/* Render Pages */}
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {page === "home" && <HomePage setPage={setPage} />}
        {page === "dashboard" && (
          <DashboardPage
            summary={summary}
            positions={positions}
            orders={trades}
          />
        )}
        {page === "account" && <AccountPage account={account} />}
        {page === "wallet" && <WalletPage wallet={wallet} />}
        {page === "trades" && <LiveTradesPage trades={trades} />}
      </div>
    </div>
  );
}
