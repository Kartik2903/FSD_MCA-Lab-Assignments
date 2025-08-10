import React, { useState } from "react";

// Card for a GitHub repository (demonstrates prop destructuring)
export default function Vulnerability({ vuln }) {
  const {
    id = "Unknown CVE",
    summary = "No description available.",
    cvss = null,
    url = null,
    published = null,
  } = vuln || {};
  const [open, setOpen] = useState(false);
  const publishedDate = published ? new Date(published).toLocaleDateString() : "Unknown";
  return (
    <article className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-200 w-full">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="text-xs text-gray-400 mb-1">Published: {publishedDate}</div>
          <h3 className="text-xl font-bold mt-1 mb-1">
            {url ? (
              <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-700 break-all">{id}</a>
            ) : (
              <span className="text-blue-700 break-all">{id}</span>
            )}
          </h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className={`px-3 py-1 rounded-full text-sm font-semibold shadow ${typeof cvss === 'number' ? (cvss >= 7 ? 'bg-red-100 text-red-800' : cvss >= 4 ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800') : 'bg-gray-100 text-gray-700'}`}>
            {typeof cvss === 'number' ? `CVSS ${cvss}` : 'CVSS N/A'}
          </div>
          <button
            onClick={() => setOpen((s) => !s)}
            className="text-xs px-3 py-1 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            aria-expanded={open}
          >
            {open ? "Hide" : "Details"}
          </button>
        </div>
      </div>
      <p className="mt-4 text-gray-700 text-base leading-relaxed">
        {open ? summary : summary.length > 180 ? summary.slice(0, 180) + "..." : summary}
      </p>
    </article>
  );
}
