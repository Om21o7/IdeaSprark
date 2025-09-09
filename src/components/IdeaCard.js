import React, { useState } from "react";

export default function IdeaCard({ idea, onFollowup, onAIQuestion }) {
  const [aiInput, setAIInput] = useState("");
  const [showFollowupInput, setShowFollowupInput] = useState(false);
  const [followupText, setFollowupText] = useState("");

  const handleAIAsk = () => {
    if (!aiInput) return;
    onAIQuestion(aiInput);
    setAIInput("");
  };

  const handleAddFollowup = () => {
    if (!followupText) return;
    onFollowup(followupText);
    setFollowupText("");
    setShowFollowupInput(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{idea.title}</h2>
      <p className="text-gray-700 italic mb-2">{idea.tagline}</p>
      <p className="text-gray-600 mb-4">💡 Improvement: {idea.improvement}</p>

      {/* Follow-ups */}
      <div className="mb-4">
        <p className="text-gray-500 font-semibold mb-1">Follow-ups:</p>
        <ul className="list-disc ml-5 text-gray-500 text-sm">
          {idea.followups.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>

        {/* Show input form if user clicks Add Follow-up */}
        {showFollowupInput ? (
          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={followupText}
              onChange={(e) => setFollowupText(e.target.value)}
              placeholder="Type your follow-up..."
              className="flex-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleAddFollowup}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
            >
              Add
            </button>
            <button
              onClick={() => setShowFollowupInput(false)}
              className="bg-gray-300 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowFollowupInput(true)}
            className="mt-2 bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition"
          >
            Add Follow-up
          </button>
        )}
      </div>

      {/* AI Chat */}
      <div>
        <p className="text-gray-500 font-semibold mb-1">Ask AI:</p>
        <div className="flex gap-2">
          <input
            type="text"
            value={aiInput}
            onChange={(e) => setAIInput(e.target.value)}
            placeholder="Type your question..."
            className="flex-1 px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleAIAsk}
            className="bg-purple-500 text-white px-3 py-1 rounded-lg hover:bg-purple-600 transition"
          >
            Ask
          </button>
        </div>
        <ul className="mt-2 text-gray-500 text-sm">
          {idea.aiQuestions.map((q, i) => (
            <li key={i}>
              <strong>Q:</strong> {q.question} <br />
              <strong>A:</strong> {q.answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
