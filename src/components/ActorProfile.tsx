import React from "react";

interface Actor {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  notableMovies: string[];
}

const actors: Actor[] = [
  {
    id: 1,
    name: "Leonardo DiCaprio",
    role: "Producer • Actor • Writer",
    bio: "Few actors in the world have had a career as diverse as Leonardo DiCaprio's. DiCaprio has gone from humble beginnings in low-budget horror movies to becoming one of Hollywood's most recognized names.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Leonardo_DiCaprio_January_2014.jpg",
    notableMovies: ["Titanic", "Inception", "Blood Diamond", "The Departed"],
  },
  {
    id: 2,
    name: "Mel Gibson",
    role: "Actor • Producer • Director",
    bio: "Mel Gibson is an American-Australian actor, producer, and director, known for his roles in 'Braveheart' and 'Mad Max'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Mel_Gibson_Cannes_2016.jpg",
    notableMovies: ["Braveheart", "The Patriot", "Signs", "Mad Max"],
  },
  {
    id: 3,
    name: "Tom Cruise",
    role: "Actor • Producer • Director",
    bio: "Tom Cruise has been one of Hollywood's biggest names for decades, known for his roles in 'Top Gun' and 'Mission: Impossible' series.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Tom_Cruise_by_Gage_Skidmore.jpg",
    notableMovies: ["The Last Samurai", "Edge of Tomorrow", "Mission: Impossible", "Minority Report"],
  },
  {
    id: 4,
    name: "Scarlett Johansson",
    role: "Actress • Producer • Singer",
    bio: "Scarlett Johansson is an award-winning actress known for her roles in 'Black Widow' and 'Lost in Translation'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Scarlett_Johansson_2019_by_Glenn_Francis.jpg",
    notableMovies: ["Black Widow", "Lost in Translation", "Marriage Story", "Jojo Rabbit"],
  },
  {
    id: 5,
    name: "Natalie Portman",
    role: "Actress • Producer",
    bio: "Natalie Portman is a celebrated actress known for her roles in 'Black Swan' and 'Thor'.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Natalie_Portman_2023.jpg/800px-Natalie_Portman_2023.jpg",
    notableMovies: ["Black Swan", "Thor", "V for Vendetta", "Jackie"],
  },
];

const ActorProfile: React.FC = () => {
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
