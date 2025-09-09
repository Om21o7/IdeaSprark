import React from "react";

export default function StatsBar({ totalIdeas, totalFollowups }) {
  return (
    <div className="flex gap-6 justify-start items-center bg-white p-4 rounded-lg shadow-md">
      <div>
        <p className="text-gray-600 text-sm">Total Ideas</p>
        <p className="text-xl font-bold text-gray-800">{totalIdeas}</p>
      </div>
      <div>
        <p className="text-gray-600 text-sm">Total Follow-ups</p>
        <p className="text-xl font-bold text-gray-800">{totalFollowups}</p>
      </div>
    </div>
  );
}
