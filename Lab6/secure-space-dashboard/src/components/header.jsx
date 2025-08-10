import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">SecureSpace — Vulnerability Dashboard</h1>
          <p className="text-sm text-gray-300">Single API (vulnerabilities) demo • Axios • React + Vite</p>
        </div>
        <div className="text-sm text-gray-300">Demo</div>
      </div>
    </header>
  );
}
