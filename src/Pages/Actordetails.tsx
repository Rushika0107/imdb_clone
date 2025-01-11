import React, { useState, useEffect } from "react";
import { Award, Instagram, Star, Twitter, Heart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import storage from "../utils/storage";
import { getActorDetails, getActorMovies, getActorAwards } from "../services/tmdbApi"; // Import updated TMDB helper functions

// Define the Actor, Movie, and Award interfaces
interface Movie {
  id: number;
  title: string;
  release_date: string;
  character: string;
  vote_average: number;
}

interface Award {
  name: string;
  year: string;
  category: string;
  film: string;
}

interface Actor {
  id: number;
  name: string;
  profile_path: string;
  biography: string;
  popularity: number;
  social_media?: {
    instagram: string;
    twitter: string;
  };
  imdb_id: string;
}

const Actordetails = () => {
  const { id } = useParams();
  const [actor, setActor] = useState<Actor | null>(null);
  const [knownFor, setKnownFor] = useState<Movie[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [isFavorite, setIsFavorite] = useState(storage.getFavorites().includes(Number(id)));

  useEffect(() => {
    const fetchActorData = async () => {
      const actorData = await getActorDetails(id); // Fetch actor details
      if (actorData) {
        setActor(actorData); // Set actor details in state

        const movieData = await getActorMovies(id); // Fetch actor's movies
        setKnownFor(movieData); // Set known movies in state

        const actorAwards = await getActorAwards(id); // Fetch actor's awards
        setAwards(actorAwards); // Set awards in state
      }
    };

    fetchActorData();
  }, [id]);

  const handleFavorite = () => {
    const favorites = storage.getFavorites();
    if (isFavorite) {
      storage.setFavorites(favorites.filter((actorId) => actorId !== Number(id)));
    } else {
      storage.setFavorites([...favorites, Number(id)]);
    }
    setIsFavorite(!isFavorite);
  };

  if (!actor) {
    return <div>Loading...</div>; // Show loading until data is fetched
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${actor.profile_path})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80" />
        </div>
        <div className="relative h-full container flex items-end pb-8">
          <div className="flex items-end gap-8">
            <img
              src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
              alt={actor.name}
              className="w-48 h-48 rounded-xl object-cover border-4 border-gray-900"
            />
            <div>
              <h1 className="text-4xl font-bold mb-4">{actor.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>{actor.popularity} Popularity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-500" />
                  <span>{awards.length} Awards</span>
                </div>
              </div>
              <button
                className={`bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors ${isFavorite ? "bg-red-500" : ""}`}
                onClick={handleFavorite}
              >
                {isFavorite ? (
                  <Heart className="w-5 h-5 text-white" />
                ) : (
                  <Heart className="w-5 h-5 text-orange" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Biography</h2>
        <p>{actor.biography || "No biography available."}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Known For</h2>
        <ul className="list-disc pl-5">
          {knownFor.map((movie) => (
            <li key={movie.id} className="mb-2">
              <Link to={`/movies/${movie.id}`} className="text-blue-500 hover:underline">
                {movie.title} ({movie.release_date?.split("-")[0]}) - {movie.character} - Rating: {movie.vote_average}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Awards</h2>
        <ul className="list-disc pl-5">
          {awards.map((award, index) => (
            <li key={index} className="mb-2">
              {award.name} ({award.year}) - {award.category} for {award.film}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Upcoming Projects</h2>
        <ul className="list-disc pl-5">
          {/* You may fetch upcoming projects from TMDB if available */}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold">Social Media</h2>
        <div className="flex gap-4">
          <a href={`https://www.instagram.com/${actor.social_media?.instagram}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Instagram
          </a>
          <a href={`https://twitter.com/${actor.social_media?.twitter}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Twitter
          </a>
          <a href={`https://www.imdb.com/name/${actor.imdb_id}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            IMDb
          </a>
        </div>
      </div>
    </div>
  );
};

export default Actordetails;
