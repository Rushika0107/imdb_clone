/*import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import axios from "axios";

const TMDB_API_KEY = "0d62be90cc24bf3a77723ca6481b2320";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


type MovieCardProps = {
  id: number;
  title: string;
  rating: number;
  image: string;
  year: number;
  genre: string[];
};

const MovieCard: React.FC<MovieCardProps> = ({ id, title, rating, image, year, genre }) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);
  
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="bg-zinc-900/50 rounded-xl overflow-hidden movie-card-hover backdrop-blur-sm">
      <div className="relative aspect-[2/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-4 w-full">
            <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              View Details
            </button>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-yellow-500 font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate text-glow">{title}</h3>
          <span className="text-zinc-400 text-sm">{year}</span>
        </div>
        {genre && (
          <div className="flex flex-wrap gap-2">
            {genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300"
              >
                {g}
              </span>
            ))}
          </div>
        )}
        {movieDetails && (
          <div className="mt-2">
            <p className="text-sm text-zinc-300">{movieDetails.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;*/
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import axios from "axios";

const TMDB_API_KEY = "0d62be90cc24bf3a77723ca6481b2320";

type MovieCardProps = {
  id: number;
  title: string;
  rating: number;
  image: string;
  year: number;
  genre: string[];
};

const MovieCard: React.FC<MovieCardProps> = ({ id, title, rating, image, year, genre }) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: {
              api_key: TMDB_API_KEY,
              language: "en-US",
            },
          }
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="bg-zinc-900/50 rounded-xl overflow-hidden movie-card-hover backdrop-blur-sm">
      <div className="relative aspect-[2/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover-glow"
          onError={(e) => {
            e.currentTarget.src = "/placeholder-image.png"; // Use fallback image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 p-4 w-full">
            <button className="w-full bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
              View Details
            </button>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded-md flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-yellow-500 font-medium">{rating}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg truncate text-glow">{title}</h3>
          <span className="text-zinc-400 text-sm">{year}</span>
        </div>
        {genre && (
          <div className="flex flex-wrap gap-2">
            {genre.slice(0, 2).map((g) => (
              <span
                key={g}
                className="text-xs px-2 py-1 bg-zinc-800 rounded-full text-zinc-300"
              >
                {g}
              </span>
            ))}
          </div>
        )}
        {movieDetails && (
          <div className="mt-2">
            <p className="text-sm text-zinc-300">{movieDetails.overview}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
