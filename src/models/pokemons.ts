export interface IGetPokemons {
  img: string;
  imgAnimated: string;
  url: string;
  name: string;
  weight: number;
  heigth: number;
  moves: Array<string>;
  stats: [];
  types: [];
}

export interface IPokemons {
  pokemons: IGetPokemons[];
  pokemonDetails: object;
  isLoading: boolean;
  isPopup: boolean;
}
