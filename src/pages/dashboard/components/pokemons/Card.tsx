import { FC } from "react";
import { Box, Typography } from "@mui/material";

interface Props {
  data: object;
}

export const Card: FC<Props> = ({ data }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          background: "#72AFE2",
          display: "flex",
          height: "70%",
          flexDirection: "column",
          justifyContent: "center",
          borderRadius: "20px 20px 0px 0px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={data["img"]}
            alt=""
            style={{ width: "75%", height: "110%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "5%",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            {new Date().toString().slice(0, 10)}
          </Typography>
          <Typography
            sx={{
              color: "white",
              background: "#00284A",
              borderRadius: "20px",
              display: "flex",
              width: "40%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Weight: {data["weight"]}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          background: "white",
          width: "100%",
          height: "100%",
          borderRadius: "0px 0 20px 20px",
        }}
      >
        <Typography
          sx={{
            alignItems: "center",
            color: "#00284A",
            fontSize: "25px",
            fontFamily: "Bebas Neue",
            fontStyle: "none",
            fontWeight: "400",
            margin: "20px",
            width: "100%",
          }}
        >
          {data["name"].toUpperCase()}
        </Typography>
        <Typography
          sx={{
            alignItems: "center",
            color: "#00284A",
            fontSize: "14px",
            fontFamily: "Bebas Neue",
            fontStyle: "none",
            marginLeft: "20px",
          }}
        >
          {data["moves"].map((move) => `#${move} `)}
        </Typography>
      </Box>
    </Box>
  );
};
