import React, { useEffect, useState } from "react";
import axios from "axios";
import Vulnerability from "./vuln";

/**
 * Dashboard:
 * - Fetches data from API based on search input
 * - Passes each result down via props to VulnerabilityCard
 */

export default function Dashboard() {
  const [vulns, setVulns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    axios
      .get("https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=50")
      .then((res) => {
        if (cancelled) return;
        // NVD API: res.data.vulnerabilities is an array
        const vulns = (res.data.vulnerabilities || []).map((v) => {
          const cve = v.cve || {};
          return {
            id: cve.id || "Unknown CVE",
            summary: cve.descriptions?.[0]?.value || "No description available.",
            cvss: cve.metrics?.cvssMetricV31?.[0]?.cvssData?.baseScore || null,
            url: cve.references?.[0]?.url || null,
            published: cve.published || null,
          };
        });
        setVulns(vulns);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err?.message || "Failed to fetch data");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Local filtering by CVE ID or description
  const q = query.trim().toLowerCase();
  // Sort by published date descending
  const sorted = [...vulns].sort((a, b) => {
    const dateA = a.published ? new Date(a.published) : new Date(0);
    const dateB = b.published ? new Date(b.published) : new Date(0);
    return dateB - dateA;
  });
  const filtered = sorted.filter((v) => {
    if (!q) return true;
    return (
      (v.id && v.id.toLowerCase().includes(q)) ||
      (v.summary && v.summary.toLowerCase().includes(q))
    );
  });

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#020024] via-[#090979] to-[#09099f] py-10 w-full">
      <section className="w-full flex flex-col px-2 sm:px-6">
        <header className="mb-10 border-b pb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-400 mb-2 tracking-tight drop-shadow">NVD CVE Dashboard</h2>
            <p className="text-base text-gray-500">
              Source: <a href="https://nvd.nist.gov/vuln/data-feeds" className="underline text-blue-600 hover:text-blue-800 font-medium" target="_blank" rel="noopener noreferrer">NIST NVD API</a> (latest CVEs)
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto bg-gray-900 rounded-lg shadow px-3 py-2">
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleCount(10);
              }}
              placeholder="Search by CVE ID or description..."
              className="w-full md:w-80 px-4 py-2 border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-blue-400 bg-gray-800 text-gray-100 font-medium"
            />

            <button
              onClick={() => {
                setQuery("");
                setVisibleCount(10);
              }}
              className="px-4 py-2 bg-blue-700 hover:bg-blue-100 hover:text-blue-700 rounded-md text-sm font-semibold text-blue-100 transition"
            >
              Reset
            </button>
          </div>
        </header>

        {loading && <div className="text-gray-500 text-center py-12 text-lg font-medium">Loading vulnerabilities...</div>}
        {error && <div className="text-red-500 text-center py-12 text-lg font-medium">Error: {error}</div>}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-gray-600 text-center py-12 text-lg">No vulnerabilities found for your search.</div>
        )}

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 justify-items-center">
          {!loading &&
            !error &&
            filtered.slice(0, visibleCount).map((v) => (
              <Vulnerability key={v.id} vuln={v} />
            ))
            }
        </div>

        {!loading && !error && filtered.length > visibleCount && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount((c) => c + 10)}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-lg text-lg transition"
            >
              Load more
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
