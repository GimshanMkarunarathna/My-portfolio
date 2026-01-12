"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, message }),
    });
    const data = await res.json();
    setStatus(data.message);
    setName("");
    setMessage("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Send
        </button>
        {status && <p className="mt-2 text-green-500">{status}</p>}
      </form>
    </div>
  );
}
