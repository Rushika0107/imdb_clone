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
        <div>
            <h2>Favorite Actors</h2>
            {favoriteActors.length === 0 ? (
                <p>No favorite actors yet!</p>
            ) : (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {favoriteActors.map((actor) => (
                        <div key={actor.id} style={{ margin: "10px" }}>
                            <img src={actor.image} alt={actor.name} style={{ width: "150px", height: "200px" }} />
                            <p>{actor.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteActorsPage;
