import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon Api</h1>
      <hr />
      <span>Loading: {!isLoading ? "True" : "False"} </span>
      <ul>
        {pokemons.map(({ name, image }) => (
          <li key={name}>
            <p>{name}</p>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};

export default PokemonApp;
