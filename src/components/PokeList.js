import React from "react";

const PokeList = ({ pokemon }) => {
  return (
    <div>
      {pokemon.map((p) => (
        <div
          key={p}
          style={{
            fontSize: "1.5rem",
            color: "orangered",
            textTransform: "capitalize",
          }}
        >
          {p}
        </div>
      ))}
    </div>
  );
};

export default PokeList;
