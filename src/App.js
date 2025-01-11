import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./Pages/Home.tsx";
import MovieList from "./Pages/MovieList.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";
import Toprated from "./Pages/Toprated.jsx";
import Actordetails from "./Pages/Actordetails.tsx";
import FavoriteActorsPage from "./Pages/FavoriteActorsPage.tsx";
//import { WatchlistProvider } from "./Pages/Watchlist.tsx";  // Correct the import path
import Watchlist from "./Pages/Watchlist.tsx";  // Correct import of Watchlist component


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    //<WatchlistProvider>  {/* Wrap the entire app in WatchlistProvider */}
      <BrowserRouter>
        <div
          className={`min-h-screen ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          } ${darkMode ? "dark-mode" : ""}`}
        >
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/actor/:id" element={<Actordetails />} />
            <Route path="/top-rated" element={<Toprated />} />
            <Route path="/favorite-actors" element={<FavoriteActorsPage />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </div>
      </BrowserRouter>
    //</WatchlistProvider>
  );
}

export default App;
