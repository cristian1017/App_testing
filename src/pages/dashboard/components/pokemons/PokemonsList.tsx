import {
  pokemons,
  setIsPopup,
  setPokemonDetails,
} from "../../../../store/slices/pokemons/PokemonsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Card } from "./Card";
import { FC } from "react";
import { AppDispatch } from "../../../../store/store";

interface Props {
  currentPage: number;
}

export const PokemonsList: FC<Props> = ({ currentPage }) => {
  const getPokemon = useSelector(pokemons);
  const dispatch = useDispatch<AppDispatch>();

  const perPage = 10;
  const indexOfLast = currentPage * perPage;
  const indexOfFirst = indexOfLast - perPage;

  const handleOpenCard = (pokemon: object) => {
    dispatch(setIsPopup(true));
    dispatch(setPokemonDetails(pokemon));
  };

  return (
    <Box
      sx={{
        margin: "30px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {getPokemon?.slice(indexOfFirst, indexOfLast).map((pokemon, index) => (
        <Box
          key={index}
          sx={{
            borderRadius: "20px",
            height: "360px",
            margin: "20px",
            width: "15%",
            boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              boxShadow: "10px 10px 10px rgba(0, 0, 0, .3)",
              cursor: "pointer",
            },
          }}
          onClick={() => handleOpenCard(pokemon)}
        >
          <Card data={pokemon} />
        </Box>
      ))}
    </Box>
  );
};
