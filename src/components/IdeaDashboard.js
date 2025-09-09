import FollowUpChat from "./FollowUpChat";
import { getIdeaIcon, getIdeaColor } from "../utils";

export default function IdeaDashboard({ ideas, setIdeas }) {
  return (
    <div>
      <h2>Idea Dashboard</h2>
      {ideas.length === 0 && <p>No ideas yet.</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {ideas.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: getIdeaColor(item.idea),
              padding: "15px",
              borderRadius: "10px",
              width: "300px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            <div style={{ fontSize: "24px", marginBottom: "10px" }}>
              {getIdeaIcon(item.idea)} {item.idea}
            </div>
            <p><strong>Tagline:</strong> {item.tagline}</p>
            <p><strong>Improvement:</strong> {item.improvement}</p>
            <p><strong>Follow-ups:</strong> {item.followUps || 0}</p>
            <FollowUpChat ideaIndex={index} ideas={ideas} setIdeas={setIdeas} />
          </div>
        ))}
      </div>
    </div>
  );
}
