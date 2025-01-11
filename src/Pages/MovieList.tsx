import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios"; // Ensure to import axios
import { SlidersHorizontal } from "lucide-react";

// Define the type for a Movie object
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

const MovieList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  const [genreFilter, setGenreFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState({ min: 0, max: 10 });
  const [movies, setMovies] = useState<Movie[]>([]); // Explicitly set the type of movies to Movie[]
  const [loading, setLoading] = useState(true);

  // Fetch movies from TMDB API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=0d62be90cc24bf3a77723ca6481b2320&language=en-US&page=1`
        );
        setMovies(response.data.results); // Set movies from TMDB API response
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies from TMDB:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const genreMatch = genreFilter === "" || movie.genre_ids.includes(parseInt(genreFilter));
    const yearMatch = yearFilter === "" || movie.release_date.startsWith(yearFilter); // movie.release_date exists now
    const ratingMatch =
      movie.vote_average >= ratingFilter.min && movie.vote_average <= ratingFilter.max;
    return genreMatch && yearMatch && ratingMatch;
  });

  const handleGenreChange = (e) => setGenreFilter(e.target.value);
  const handleYearChange = (e) => setYearFilter(e.target.value);
  const handleRatingChange = (e) => {
    const { name, value } = e.target;
    setRatingFilter((prev) => ({ ...prev, [name]: parseInt(value) }));
  };

  // Genre options based on TMDB genres
  const genres = [
    { id: 28, name: "Action" },
    { id: 35, name: "Comedy" },
    { id: 18, name: "Drama" },
    { id: 10402, name: "Music" },
    { id: 10749, name: "Romance" },
    { id: 27, name: "Horror" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 878, name: "Sci-Fi" },
    { id: 12, name: "Adventure" },
    { id: 99, name: "Documentary" },
    { id: 36, name: "History" },
    { id: 80, name: "Crime" },
    { id: 10751, name: "Family" },
    { id: 10770, name: "TV Movie" },
    { id: 10759, name: "Action & Adventure" },
    { id: 10762, name: "Kids" },
    { id: 10763, name: "News" },
    { id: 10764, name: "Reality" },
    { id: 10765, name: "Sci-Fi & Fantasy" },
  ];

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          {search ? `Search Results for "${search}"` : "Popular Movies"}
        </h1>
        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg hover:opacity-90 transition">
          <SlidersHorizontal /> Filters
        </button>
      </div>

      <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
        {/* Filters Section */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">Filters</h2>
          <div className="flex flex-col gap-6">
            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Genre</label>
              <select
                value={genreFilter}
                onChange={handleGenreChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-gray-300"
              >
                <option value="">All</option>
                {genres.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Year</label>
              <input
                type="number"
                value={yearFilter}
                onChange={handleYearChange}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-gray-300"
                placeholder="Enter year"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 dark:text-gray-300">Rating Range</label>
              <div className="flex gap-4">
                <input
                  type="number"
                  name="min"
                  value={ratingFilter.min}
                  onChange={handleRatingChange}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-gray-300"
                  placeholder="Min"
                />
                <input
                  type="number"
                  name="max"
                  value={ratingFilter.max}
                  onChange={handleRatingChange}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-2 text-gray-900 dark:text-gray-300"
                  placeholder="Max"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Movies List Section */}
        <div className="col-span-3 lg:col-span-4 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredMovies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {movie.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">Rating: {movie.vote_average}</p>
                <p className="text-gray-600 dark:text-gray-400">Year: {movie.release_date.split("-")[0]}</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Genre: {movie.genre_ids.map((id) => genres.find((g) => g.id === id)?.name).join(", ")}
                </p>
                <Link
                  to={`/movies/${movie.id}`}
                  className="mt-4 inline-block text-indigo-500 hover:text-indigo-600"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
