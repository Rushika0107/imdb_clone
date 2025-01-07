/*import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import MovieList from "./Pages/MovieList.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";
import Toprated from "./Pages/Toprated.jsx";
import Actordetails from "./Pages/Actordetails.tsx";
import TrendingMovies from "./components/TrendingMovies.tsx";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<MovieList/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/actor/:id" element={<Actordetails/>}/>
          <Route path="/top-rated" element={<Toprated/>}/>
        </Routes>
        <TrendingMovies/>
      </div>
    </BrowserRouter>
  );
}

export default App;*/
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./Pages/Home.tsx";
import MovieList from "./Pages/MovieList.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";
import Toprated from "./Pages/Toprated.jsx";
import Actordetails from "./Pages/Actordetails.tsx";
import FavoriteActorsPage from "./Pages/FavoriteActorsPage.tsx";
import ActorProfilesPage from "./components/ActorProfile.tsx";

function App() {
  const [favoriteActors, setFavoriteActors] = useState([]);

  const handleFavorite = (actor) => {
    setFavoriteActors((prevFavorites) => {
      if (prevFavorites.find((fav) => fav.id === actor.id)) {
        return prevFavorites.filter((fav) => fav.id !== actor.id);
      }
      return [...prevFavorites, actor];
    });
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/actor/:id" element={<Actordetails />} />
          <Route path="/top-rated" element={<Toprated />} />
          <Route
            path="/favorite-actors"
            element={<FavoriteActorsPage favoriteActors={favoriteActors} />}
          />
          <Route
            path="/actors"
            element={
              <ActorProfilesPage
                onFavorite={handleFavorite}
                favoriteActors={favoriteActors}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
