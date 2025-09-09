// src/components/FollowUpChat.js
import { useState } from "react";

export default function FollowUpChat({ ideaIndex, ideas, setIdeas }) {
  const [question, setQuestion] = useState("");

  const handleAsk = (e) => {
    e.preventDefault();
    if (!question) return;

    // Mock AI response
    const response = `Answer to "${question}" about "${ideas[ideaIndex].idea}"`;

    // Update the idea with new follow-up count
    const updatedIdeas = [...ideas];
    if (!updatedIdeas[ideaIndex].followUps) updatedIdeas[ideaIndex].followUps = 0;
    updatedIdeas[ideaIndex].followUps += 1;
    updatedIdeas[ideaIndex].lastFollowUp = response;
    setIdeas(updatedIdeas);

    setQuestion("");
  };

  return (
    <div style={{ marginTop: "10px", marginLeft: "20px" }}>
      <form onSubmit={handleAsk}>
        <input
          type="text"
          placeholder="Ask a follow-up..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{ width: "250px", padding: "5px", marginRight: "5px" }}
        />
        <button type="submit" style={{ padding: "5px" }}>Ask</button>
      </form>
      {ideas[ideaIndex].lastFollowUp && (
        <p style={{ marginTop: "5px", fontStyle: "italic" }}>
          {ideas[ideaIndex].lastFollowUp}
        </p>
      )}
    </div>
  );
}
