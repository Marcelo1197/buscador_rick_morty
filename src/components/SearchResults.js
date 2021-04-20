import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchResults(props) {
  const characterList = props.charactersToShow || [];

  return (
    <>
      <div className="container">
        <div className="row">
          {characterList.map((character, i) => {
            return (
              <CharacterCard
                key={character.id}
                img={character.image}
                name={character.name}
                url={character.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
