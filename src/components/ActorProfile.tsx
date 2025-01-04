import React, { useState } from "react";
import { Heart } from "lucide-react";

interface Actor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  notableMovies: string[];
}

interface ActorProfileProps {
  onFavorite: (actor: Actor) => void;
  favoriteActors: Actor[];
}

const actors: Actor[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    role: "Producer • Actor • Writer",
    bio: "Few actors in the world have had a career as diverse as Leonardo DiCaprio's...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6d/Leonardo_DiCaprio_January_2014.jpg",
    notableMovies: ["Titanic", "Inception", "Blood Diamond"],
  },
  {
    id: 2,
    name: "Mel Gibson",
    role: "Actor • Producer • Director",
    bio: "Mel Gibson is an American-Australian actor, producer, and director...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mel_Gibson_Cannes_2016.jpg",
    notableMovies: ["Braveheart", "The Patriot", "Signs"],
  },
  // Add more actors as needed.
];

const ActorProfile: React.FC<ActorProfileProps> = ({ onFavorite, favoriteActors }) => {
  const [popup, setPopup] = useState("");

  const handleFavoriteClick = (actor: Actor) => {
    onFavorite(actor);
    const isFavorite = favoriteActors.some((fav) => fav.id === actor.id);
    setPopup(isFavorite ? "Removed from Favorites" : "Added to Favorites");
    setTimeout(() => setPopup(""), 2000); // Clear the message after 2 seconds
  };

  return (
    <div className="bg-black text-white min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Actors</h1>
      {popup && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          {popup}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {actors.map((actor) => (
          <div
            key={actor.id}
            className="bg-gray-800 rounded-lg shadow-lg max-w-xs p-4 transform transition duration-300 hover:scale-105"
          >
            <div className="relative">
              <img
                src={actor.image}
                alt={actor.name}
                className="rounded-t-lg object-cover h-64 w-full"
              />
              <button
                onClick={() => handleFavoriteClick(actor)}
                className="absolute top-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80"
              >
                <Heart
                  className={`w-6 h-6 ${
                    favoriteActors.some((fav) => fav.id === actor.id)
                      ? "text-red-500 fill-current"
                      : "text-white"
                  }`}
                />
              </button>
            </div>
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
