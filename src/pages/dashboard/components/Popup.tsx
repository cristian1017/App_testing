import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  isPopup,
  setIsPopup,
} from "../../../store/slices/pokemons/PokemonsSlice";
import { PokemonDetails } from "./pokemons/PokemonDetails";
import { AppDispatch } from "../../../store/store";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "40%",
  bgcolor: "background.paper",
  borderRadius: 6,
  // border: "2px solid #000",
  // boxShadow: 24,
  p:4,
};

export const Popup = () => {
  const popup = useSelector(isPopup);
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    dispatch(setIsPopup(false));
  };

  return (
    <Modal
      open={popup}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <PokemonDetails />
      </Box>
    </Modal>
  );
};
