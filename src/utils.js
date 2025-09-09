// src/utils.js
import { FaLightbulb, FaCoffee, FaCat, FaRocket } from "react-icons/fa";

export const getIdeaIcon = (idea) => {
  const text = idea.toLowerCase();
  if (text.includes("cat")) return <FaCat color="#FF6F61" />;
  if (text.includes("coffee")) return <FaCoffee color="#6F4E37" />;
  if (text.includes("rocket") || text.includes("space")) return <FaRocket color="#4B9CD3" />;
  return <FaLightbulb color="#FFD700" />; // default
};

export const getIdeaColor = (idea) => {
  const text = idea.toLowerCase();
  if (text.includes("cat")) return "#FFE3E0";
  if (text.includes("coffee")) return "#FFF4E6";
  if (text.includes("rocket") || text.includes("space")) return "#E6F0FF";
  return "#F0FFF0"; // default
};
