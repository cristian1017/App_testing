import { FC } from "react";
import { Pagination, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { pokemons } from "../../../store/slices/pokemons/PokemonsSlice";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const PokemonsPagination: FC<Props> = ({ setCurrentPage }) => {
  const getPokemon = useSelector(pokemons);

  const handlePageChange = (e, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Stack spacing={2} sx={{marginTop: "-15px",alignItems: "center" }}>
      <Pagination
        count={getPokemon.length / 10}
        color="primary"
        onChange={handlePageChange}
      />
    </Stack>
  );
};
