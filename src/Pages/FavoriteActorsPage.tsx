import React from "react";

interface Actor {
  id: number;
  name: string;
  image: string;
}

interface FavoriteActorsPageProps {
  favoriteActors: Actor[];
}

const FavoriteActorsPage: React.FC<FavoriteActorsPageProps> = ({ favoriteActors }) => {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Your Favorite Actors</h1>
      {favoriteActors.length === 0 ? (
        <p className="text-center text-gray-400">No favorite actors yet!</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {favoriteActors.map((actor) => (
            <div
              key={actor.id}
              className="bg-gray-800 rounded-lg shadow-lg max-w-xs p-4"
            >
              <img
                src={actor.image}
                alt={actor.name}
                className="rounded-t-lg object-cover h-64 w-full"
              />
              <div className="mt-4 text-center">
                <h2 className="text-xl font-semibold">{actor.name}</h2>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteActorsPage;
