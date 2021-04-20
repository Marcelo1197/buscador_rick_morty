import React, { useState, useEffect } from "react";
import Error from "../components/Error";
import Preloader from "../components/Preloader";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Home() {
  const [characterList, setCharacterList] = useState("");
  const [query, setQuery] = useState(0);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");
  const [error, setError] = useState({ error: false, errorMessage: "" });
  const [loading, setLoading] = useState(false);

  //A: disparado por cambios en el input que registra el personaje buscado
  const handleChangeInputSearchBar = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  //A: disparado por el botón que busca el personaje
  const handleClickSearchButton = (e) => {
    e.preventDefault();
    setUrl(
      `https://rickandmortyapi.com/api/character/?name=${query}&status=alive`
    );
  };

  //A: useEffect() con mismo comportamiento que componentDidMount()
  useEffect(() => {
    //A: muestro TODOS los personajes que existen al cargar la página
    const getAllCharacters = async (anyUrl) => {
      setLoading(true);
      const res = await fetch(anyUrl);
      const characters = await res.json();
      setCharacterList(characters.results);
      setLoading(false);
    };
    getAllCharacters(url);
  }, []);

  //A: useEFFECT() con un comportamiento como el método componentDidUpdate pero
  //dependiendo del state url
  useEffect(() => {
    const getCharacter = async (anyUrl) => {
      try {
        const res = await fetch(anyUrl);
        setLoading(true);
        //A: si el atributo ok del response da false
        //parseo a JSON el res para obtener el mensaje de la API
        if (!res.ok) {
          let errorResApi = await res.json();
          throw { errorMessage: errorResApi.error };
        }
        const characters = await res.json();
        setCharacterList(characters.results);
        setError({ error: false });
        setLoading(false);
      } catch (err) {
        setError({ error: true, errorMessage: err.errorMessage });
        setLoading(false);
      }
    };
    getCharacter(url);
  }, [url]);

  useEffect(() => {}, [error]);

  return (
    <div>
      <SearchBar
        handleChange={handleChangeInputSearchBar}
        handleClick={handleClickSearchButton}
      />
      {loading && <Preloader />}
      {error.error && !loading && <Error message={error.errorMessage} />}
      {!error.error && !loading && (
        <SearchResults charactersToShow={characterList} />
      )}
    </div>
  );
}
