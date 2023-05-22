import {
  Box,
} from "@mui/material";
import { Nav } from "./components/nav/Nav";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getPokemons } from "../../store/slices/pokemons/PokemonsSlice";
import { PokemonsList } from "./components/pokemons/PokemonsList";
import { PokemonsPagination } from "./components/Pagination";
import { Popup } from "./components/Popup";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <Box>
      <Nav />
      <PokemonsList currentPage={currentPage}/>
      <PokemonsPagination setCurrentPage={setCurrentPage}/>
      <Popup />
    </Box>
  );
};
