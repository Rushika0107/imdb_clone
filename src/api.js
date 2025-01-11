// src/api/index.js

const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    rating: 8.8,
    year: 2024,
    duration: "166 min",
    genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
    director: "Denis Villeneuve",
    description:
      "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he endeavors to prevent a terrible future only he can foresee.",
    image:
      "https://images.unsplash.com/photo-1534809027769-b00d750a6bac?auto=format&fit=crop&w=2000&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=2000&q=80",
    cast: [
      {
        id: 1,
        name: "Timothée Chalamet",
        role: "Paul Atreides",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
        bio: "Rising star known for his compelling performances",
      },
      {
        id: 2,
        name: "Zendaya",
        role: "Chani",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        bio: "Multi-talented actress and fashion icon",
      },
    ],
    trailer: "https://youtu.be/Way9Dexny3w?si=wN1biiDXD5Nva1Ca",
    awards: ["Academy Award Nominee", "Golden Globe Nominee"],
    boxOffice: "$494.7M",
    language: "English",
    productionCompany: "Legendary Entertainment",
    releaseDate: "2024-03-01",
    metacriticScore: 81,
    rottenTomatoesScore: 94,
  },
  {
    id: 2,
    title: "Oppenheimer",
    rating: 8.4,
    year: 2023,
    duration: "180 min",
    genre: ["Biography", "Drama", "History"],
    director: "Christopher Nolan",
    description:
      "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II, exploring the moral complexities and consequences of scientific discovery.",
    image:
      "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=2000&q=80",
    backdrop:
      "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&w=2000&q=80",
    cast: [
      {
        id: 3,
        name: "Cillian Murphy",
        role: "J. Robert Oppenheimer",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
        bio: "Versatile actor known for intense performances",
      },
      {
        id: 4,
        name: "Emily Blunt",
        role: "Katherine Oppenheimer",
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
        bio: "Acclaimed actress with numerous awards",
      },
    ],
    trailer: "https://youtu.be/uYPbbksJxIg?si=Qiouvyxt6wHLZLnV",
    awards: ["Academy Award Winner", "BAFTA Winner", "Golden Globe Winner"],
    boxOffice: "$957.8M",
    language: "English",
    productionCompany: "Universal Pictures",
    releaseDate: "2023-07-21",
    metacriticScore: 89,
    rottenTomatoesScore: 93,
  },
  // Other movies...
];

let watchlist = []; // Watchlist array

const api = {
  // Get all movies
  getMovies: () => movies,

  // Get current watchlist
  getWatchlist: () => {
    return [...watchlist]; // Return a copy of the watchlist to avoid direct modification
  },

  // Add a movie to the watchlist
  addMovieToWatchlist: (movieId) => {
    const movie = movies.find((m) => m.id === movieId);
    if (movie && !watchlist.some((m) => m.id === movieId)) {
      watchlist.push(movie);
      console.log(`Added ${movie.title} to the watchlist`);
    } else {
      console.log(`Movie with ID ${movieId} is already in the watchlist`);
    }
  },

  // Remove a movie from the watchlist
  removeMovieFromWatchlist: (movieId) => {
    const index = watchlist.findIndex((m) => m.id === movieId);
    if (index !== -1) {
      const removedMovie = watchlist.splice(index, 1);
      console.log(`Removed ${removedMovie[0].title} from the watchlist`);
    } else {
      console.log(`Movie with ID ${movieId} not found in the watchlist`);
    }
  },
};

export default api;
