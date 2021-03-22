import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import PokeList from "./components/PokeList";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPageUrl]);
  if (loading) return "Loading...";

  function prevPage() {
    setCurrentPageUrl(prevPageUrl);
  }
  function nextPage() {
    setCurrentPageUrl(nextPageUrl);
  }
  return (
    <div>
      <h1 style={{ color: "orangered" }}>Pokelist</h1>
      <PokeList pokemon={pokemon} />
      <Pagination
        nextPage={nextPageUrl ? nextPage : null}
        prevPage={prevPageUrl ? prevPage : null}
      />
    </div>
  );
};

export default App;
