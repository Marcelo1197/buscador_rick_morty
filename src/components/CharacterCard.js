import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CharacterContext } from "../context/CharacterContext";

export default function CharacterCard({ characterInfo }) {
  const handleClickCharacter = useContext(CharacterContext);

  return (
    <div className="col-5 col-md-3 col-lg-4">
      <Link
        to="/character"
        onClick={() => handleClickCharacter(characterInfo.id)}
      >
        <div className="card ">
          <img src={characterInfo.image} alt="" className="pic img-fluid" />
          <h4 className="characterName">{characterInfo.name}</h4>
        </div>
      </Link>
    </div>
  );
}
