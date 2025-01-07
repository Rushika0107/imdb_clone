import React from "react";

const FavoritesPage = ({ favorites }: { favorites: any[] }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Favorite Actors</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-400">No favorite actors yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((actor) => (
            <div key={actor.id} className="bg-gray-800 rounded-lg p-4">
              <img
                src={actor.image}
                alt={actor.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{actor.name}</h2>
              <p className="text-gray-400">{actor.biography}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
