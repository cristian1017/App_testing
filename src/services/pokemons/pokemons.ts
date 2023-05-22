import axios from "axios";
import { IGetPokemons } from "../../models/pokemons";

const baseURL = `https://pokeapi.co/api/v2/pokemon?limit=200`;

export const getAllPokemons = async () => {
  try {
    const { data } = await axios.get(`${baseURL}`);
    const promises = data.results.map((pokemon: IGetPokemons) =>
      axios.get(pokemon.url).then((res) => ({
        url: pokemon.url,
        img: res.data.sprites.versions["generation-v"]["black-white"]
          .front_default,
        imgAnimated:
          res.data.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        name: pokemon.name,
        weight: res.data.weight,
        heigth: res.data.height,
        moves: res.data.moves.slice(0, 3).map((e) => e.move.name),
        types: res.data.types.map((e) => e.type.name),
        stats: res.data.stats.map((e) => ({
          name: e.stat.name,
          value: e.base_stat,
        })),
      }))
    );
    const res = await Promise.all(promises);
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
};
