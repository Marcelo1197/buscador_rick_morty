import React, { useState, useEffect } from "react";
import "../assets/styles/SearchBar.css";

export default function SearchBar(props) {
  return (
    <header>
      <div className="searchBar">
        <form>
          <label htmlFor="characterSearch">
            Ingrese un personaje de Rick & Morty
          </label>
          <input
            onChange={props.handleChange}
            type="text"
            id="characterSearch"
          />
          <button onClick={props.handleClick}>Buscar</button>
        </form>
      </div>
    </header>
  );
}
