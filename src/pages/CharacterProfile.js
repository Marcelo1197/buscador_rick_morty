import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Preloader from "../components/Preloader";
import Error from "../components/Error";

export default function CharacterProfile({ characterId }) {
  const [characterProfile, setCharacterProfile] = useState({
    name: "",
    image: "",
    gender: "",
    status: "",
    location: { name: "" },
  });
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${characterId}`
        );
        setLoading(true);
        //A: si el atributo ok del response da false
        //parseo a JSON el res para obtener el mensaje de la API
        if (!res.ok) {
          let errorResApi = await res.json();
          throw { errorMessage: errorResApi.error };
        }
        const character = await res.json();
        console.info(character);
        setError({ error: false });
        setLoading(false);
        setCharacterProfile(character);
        console.info(character);
      } catch (err) {
        setError({ error: true, errorMessage: err.errorMessage });
        setLoading(false);
      }
    };
    getCharacter();
  }, []);
  return (
    <>
      <div className="container col-md-3 mt-5">
        {loading && <Preloader />}
        {error.error && !loading && <Error message={error.errorMessage} />}
        {!error.error && !loading && (
          <div className="cardCharacter">
            <img src={characterProfile.image} />
            <h3>{characterProfile.name}</h3>
            <p>
              <strong>Genero:</strong> {characterProfile.gender}
            </p>
            <p>
              <strong>Estado:</strong>
              {characterProfile.status == "Alive" ? "Vivo" : "Muerto"}
            </p>
            <p>
              <strong>Ubicación:</strong> {characterProfile.location.name}{" "}
            </p>
            <p></p>
            <button onClick={() => history.goBack()}>VOLVER</button>
          </div>
        )}
      </div>
    </>
  );
}
