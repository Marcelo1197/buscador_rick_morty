import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CharacterContext } from "./context/CharacterContext";
import Home from "./pages/Home";
import CharacterProfile from "./pages/CharacterProfile";

function App() {
  const [characterIdenty, setCharacterIdenty] = useState(1);

  const handleClickCharacter = (characterId) => {
    setCharacterIdenty(characterId);
  };

  return (
    <div>
      <Router>
        <Switch>
          <CharacterContext.Provider value={handleClickCharacter}>
            <Route exact path="/" component={Home} />
            <Route
              path="/character"
              render={(routeProps) => (
                <CharacterProfile
                  {...routeProps}
                  characterId={characterIdenty}
                />
              )}
            />
          </CharacterContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
