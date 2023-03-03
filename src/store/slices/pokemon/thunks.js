import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `/pokemon?limit=10&offset=${page * 10}`
    );

    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const pokemonData = await pokemonApi.get(pokemon.url);
        return {
          name: pokemon.name,
          image: pokemonData.data.sprites.front_default,
        };
      })
    );

    dispatch(setPokemons({ pokemons, page: page + 1 }));
  };
};
