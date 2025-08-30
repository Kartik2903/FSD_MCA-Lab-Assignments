"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: in a real app submit to API
    console.log("submit", { name, email, message });
    alert("Message submitted (demo)");
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Jane Doe"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="jane@example.com"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          placeholder="How can we help?"
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
        />
      </div>

      <button type="submit" className="btn-primary">Send message</button>
    </form>
  );
}
