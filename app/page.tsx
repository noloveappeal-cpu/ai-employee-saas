"use client";

import { useState } from "react";

export default function HomePage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    const res = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({ input }),
      headers: { "Content-Type": "application/json" }
    });
    const data = await res.json();
    setOutput(data.output);
  }

  return (
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui" }}>
      <h1>AI Employee</h1>
      <p>Type a task and let your AI Employee respond.</p>

      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        rows={5}
        style={{ width: "100%", marginTop: 16 }}
        placeholder="Write a post, reply to a comment, draft a script..."
      />

      <button onClick={handleGenerate} style={{ marginTop: 16 }}>
        Generate
      </button>

      {output && (
        <section style={{ marginTop: 24 }}>
          <h2>Response</h2>
          <pre>{output}</pre>
        </section>
      )}
    </main>
  );
