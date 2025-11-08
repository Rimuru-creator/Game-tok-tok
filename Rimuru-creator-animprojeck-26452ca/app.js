import React, { useState, useEffect } from "react";
import AnimeList from "./components/AnimeList";
import AnimeDetail from "./components/AnimeDetail";

function App() {
  const [animes, setAnimes] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/anime")
      .then(res => res.json())
      .then(setAnimes);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 text-2xl font-bold">Web Anime</header>
      {selected ? (
        <AnimeDetail anime={selected} back={() => setSelected(null)} />
      ) : (
        <AnimeList animes={animes} select={setSelected} />
      )}
    </div>
  );
}

export default App;
