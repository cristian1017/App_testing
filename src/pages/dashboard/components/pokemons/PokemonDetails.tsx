import {
  Box,
  Typography,
  LinearProgress,
  linearProgressClasses,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  pokemonDetails,
  setIsPopup,
} from "../../../../store/slices/pokemons/PokemonsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store/store";

export const PokemonDetails = () => {
  const details = useSelector(pokemonDetails);
  const dispatch = useDispatch<AppDispatch>();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    },
  }));

  const handleClose = () => {
    dispatch(setIsPopup(false));
  };

  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <CloseIcon
        sx={{ color: "red", cursor: "pointer" }}
        onClick={handleClose}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40%",
          height: "100%",
        }}
      >
        <img
          src={details["imgAnimated"]}
          alt={details["name"]}
          style={{ width: "90%", height: "50%" }}
        />
      </Box>
      <Box sx={{ background: "#C6E2FA", width: "60%", borderRadius: "6px" }}>
        <Typography
          sx={{
            fontSize: "40px",
            fontFamily: "Helvetica",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {details["name"].toUpperCase()}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            height: "8%",
            padding: "5%",
          }}
        >
          {details["types"].map((e: string, index: number) => (
            <Box
              sx={{
                background:
                  e === "grass"
                    ? "#5EB41E"
                    : e === "fire"
                    ? "#FF4744"
                    : e === "water"
                    ? "#35A0FF"
                    : e === "bug"
                    ? "#51C500"
                    : e === "electric"
                    ? "#CCDD00"
                    : e === "rock"
                    ? "#818C00"
                    : e === "ghost"
                    ? "#68537D"
                    : e === "poison"
                    ? "#8F57C7"
                    : e === "psychic"
                    ? "#F92DFF"
                    : e === "flying"
                    ? "#F9A91E"
                    : e === "ground"
                    ? "#BDA85A"
                    : e === "dragon"
                    ? "#FF7B7B"
                    : e === "reset"
                    ? "#000000"
                    : e === "normal" || e === "dark"
                    ? "#BBBBBB"
                    : null,
                color: "white",
                borderRadius: "6px",
                width: "20%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:"19px"
              }}
              key={index}
            >
              {e}
            </Box>
          ))}
        </Box>
        <Box>
          {details["stats"].map(
            (e: { name: string; value: number }, index: number) => (
              <Box display={{ display: "flex" }} key={index}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Helvetica",
                    display: "flex",
                    width: "50%",
                    justifyContent: "flex-end",
                    marginRight: "20px",
                  }}
                >
                  {e.name}
                </Typography>
                <BorderLinearProgress
                  variant="determinate"
                  value={e.value}
                  sx={{ height: "25px", width: "100%" }}
                />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "Helvetica",
                    display: "flex",
                    marginLeft: "10px",
                  }}
                >
                  {e.value}%
                </Typography>
              </Box>
            )
          )}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              margin: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Helvetica",
                display: "flex",
                marginLeft: "10px",
              }}
            >
              Weight: {details["weight"]}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Helvetica",
                display: "flex",
                marginLeft: "10px",
              }}
            >
              Heigth: {details["heigth"]}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
