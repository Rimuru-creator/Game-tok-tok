import React from "react";

export default function AnimeList({ animes, select }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {animes.map(a => (
        <div key={a.id} className="bg-gray-800 rounded overflow-hidden cursor-pointer" onClick={() => select(a)}>
          <img src={a.image} alt={a.title} className="w-full h-40 object-cover" />
          <div className="p-2">
            <h2 className="text-lg font-bold">{a.title}</h2>
            <p className="text-xs">{a.synopsis.slice(0,50)}...</p>
            <div className="flex gap-1 mt-1">
              {a.genre.map(g=>(<span key={g} className="text-xs bg-blue-600 rounded px-1">{g}</span>))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
