import React, { useState, useEffect } from "react";

export default function CharacterCard(props) {
  return (
    <div className="col-3">
      <div className="item ">
        <img src={props.img} alt="" className="pic img-fluid" />
        <h4 className="characterName">{props.name}</h4>
        <p>¿Está vivo? {props.status === "Alive" ? "SI" : "NO"}</p>
      </div>
    </div>
  );
}
