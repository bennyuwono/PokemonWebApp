import React from "react";
import "../assets/EmptyList.css";

const EmptyList = () => {
  return (
    <div className="empty-list">
      <p>You have not catch any Pokémon yet!</p>
      <p>Go to Éxplore, click on a Pokémon, and have fun!</p>
    </div>
  );
};

export default EmptyList;
