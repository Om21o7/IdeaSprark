import { useState } from "react";

export default function IdeaInput({ onAddIdea }) {
  const [idea, setIdea] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!idea) return;
    onAddIdea(idea); 
    setIdea("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter your idea..."
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        style={{ width: "300px", padding: "10px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px" }}>Generate</button>
    </form>
  );
}
