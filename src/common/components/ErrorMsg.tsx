import { Box, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { setOnError } from "../../store/slices/login/LoginSlice";

export const ErrorMsg = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOnClear = () => {
    dispatch(setOnError(false));
  };

  return (
    <Box
      sx={{
        background: "#FFEBE9",
        border: "1px solid #E0AEAE",
        borderRadius: "6px",
        display: "flex",
        padding: "16px",
        width: "80%",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontFamily: "Helvetica",
        }}
      >
        Usuario o contraseña incorrectos
      </Typography>
      <ClearIcon
        sx={{
          color: "#DF5F66",
          cursor: "pointer",
          left: "95%",
          position: "absolute",
        }}
        onClick={handleOnClear}
      />
    </Box>
  );
};
