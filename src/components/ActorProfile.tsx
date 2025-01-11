import React, { useState, useEffect } from "react";
import axios from "axios";

interface Actor {
  id: number;
  name: string;
  role?: string;
  bio?: string;
  image: string;
  notableMovies: string[];
}

const TMDB_API_KEY = "0d62be90cc24bf3a77723ca6481b2320";

const ActorProfile: React.FC = () => {
  const [actors, setActors] = useState<Actor[]>([]);

  // Fetch actor data from TMDb API
  const fetchActors = async () => {
    try {
      const actorIds = [287, 56734, 500, 1245, 524]; // Example TMDb IDs for actors
      const fetchedActors = await Promise.all(
        actorIds.map(async (id) => {
          const response = await axios.get(
            `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}`
          );
          const { name, biography, profile_path, known_for } = response.data;

          return {
            id,
            name,
            role: known_for.map((movie: any) => movie.media_type).join(" • "),
            bio: biography || "Biography not available.",
            image: `https://image.tmdb.org/t/p/w500${profile_path}`,
            notableMovies: known_for.map((movie: any) => movie.title || movie.name),
          };
        })
      );

      setActors(fetchedActors);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };

  useEffect(() => {
    fetchActors();
  }, []);

  return (
    <div className="bg-black text-white min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Favorite Actors & Actresses</h1>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="bg-gray-800 rounded-lg shadow-lg max-w-xs p-4 transform transition duration-300 hover:scale-105"
          >
            <img
              src={actor.image}
              alt={actor.name}
              className="rounded-t-lg object-cover h-64 w-full"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{actor.name}</h2>
              <p className="text-sm text-gray-400">{actor.role}</p>
              <p className="text-sm mt-2">{actor.bio}</p>
              <p className="text-sm mt-2">
                <span className="font-bold">Notable Movies:</span>{" "}
                {actor.notableMovies.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorProfile;
