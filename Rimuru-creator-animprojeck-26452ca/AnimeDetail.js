import React from "react";
import VideoPlayer from "./VideoPlayer";

export default function AnimeDetail({ anime, back }) {
  return (
    <div className="p-4">
      <button onClick={back} className="mb-4">&larr; Back</button>
      <div className="flex gap-4">
        <img src={anime.image} alt={anime.title} className="w-60 h-60 object-cover rounded" />
        <div>
          <h2 className="text-2xl font-bold">{anime.title}</h2>
          <p>{anime.synopsis}</p>
          <div className="mt-2">
            <b>Genre:</b> {anime.genre.join(", ")}
          </div>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-bold">Episode</h3>
      {anime.episodes.map(ep => (
        <div key={ep.number} className="mt-2 border p-2 rounded bg-gray-800">
          <div className="font-bold">{ep.title}</div>
          <VideoPlayer url={ep.video_url} />
        </div>
      ))}
    </div>
  );
}
