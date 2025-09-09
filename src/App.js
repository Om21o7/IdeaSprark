// src/App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import StatsBar from "./components/Statsbar.js";
import IdeaCard from "./components/IdeaCard.js";

// Function to ask AI
const askAI = async (question, ideaTitle) => {
  try {
    const res = await fetch("http://localhost:5000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question, ideaTitle }),
    });
    const data = await res.json();
    return data.answer;
  } catch (err) {
    console.error("Error calling backend:", err);
    return "AI error occurred";
  }
};




function App() {
  const [ideas, setIdeas] = useState([
    {
      title: "Open a cat café",
      tagline: "Purr-fect place!",
      improvement: "Add events",
      followups: ["Menu planning"],
      aiQuestions: [],
    },
    {
      title: "Robot gardener",
      tagline: "Green hands!",
      improvement: "Solar-powered",
      followups: ["Prototype design"],
      aiQuestions: [],
    },
  ]);

  const [newIdea, setNewIdea] = useState("");

  // Add new idea
  const addIdea = () => {
    if (!newIdea) return;
    const newIdeaObj = {
      title: newIdea,
      tagline: `"${newIdea} is awesome!"`,
      improvement: "Add more features or events",
      followups: [],
      aiQuestions: [],
    };
    setIdeas([...ideas, newIdeaObj]);
    setNewIdea("");
  };

  // Add follow-up to a specific idea
  const addFollowup = (index, text) => {
    if (!text) return;
    const updatedIdeas = [...ideas];
    updatedIdeas[index].followups.push(text);
    setIdeas(updatedIdeas);
  };

  // Add AI question and response
  const addAIQuestion = async (index, question) => {
    if (!question) return;
    const updatedIdeas = [...ideas];
    const answer = await askAI(question, updatedIdeas[index].title);
    updatedIdeas[index].aiQuestions.push({ question, answer });
    setIdeas(updatedIdeas);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <div className="container mx-auto px-4 mt-6">
        <StatsBar
          totalIdeas={ideas.length}
          totalFollowups={ideas.reduce((a, b) => a + b.followups.length, 0)}
        />

        {/* Add Idea Input */}
        <div className="flex gap-2 mt-4 mb-6">
          <input
            type="text"
            value={newIdea}
            onChange={(e) => setNewIdea(e.target.value)}
            placeholder="Enter new idea..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addIdea}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Idea
          </button>
        </div>

        {/* Ideas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ideas.map((idea, idx) => (
            <IdeaCard
              key={idx}
              idea={idea}
              onFollowup={(text) => addFollowup(idx, text)}
              onAIQuestion={(q) => addAIQuestion(idx, q)}
            />
          ))}
        </div>
      </div>

      <footer className="text-center text-gray-500 text-sm mt-10 mb-4">
        &copy; 2025 IdeaSpark. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
