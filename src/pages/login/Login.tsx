import { Box } from "@mui/material";
import { FormLogin } from "./components/FormLogin";
import { ErrorMsg } from "../../common/components/ErrorMsg";
import { isError } from "../../store/slices/login/LoginSlice";
import { useSelector } from "react-redux";

export const Login = () => {
  const error = useSelector(isError);

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          background: "#3C5D79",
          backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.8155637254901961) 0%, rgba(6,84,170,0.5746673669467788) 46%, rgba(0,212,255,0.4542191876750701) 100%), url(https://monoma.io/wp-content/uploads/2022/06/brooke-cagle-g1Kr4Ozfoac-unsplash-scaled.jpg)`,
          backgroundSize: "100% 100%",
          display: "flex",
          height: "100%",
          justifyContent: "end",
          alignItems: "center",
          width: "70%",
        }}
      >
        <img
          src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
          alt=""
          style={{ width: "55%", height: "10%" }}
        />
      </Box>
      <Box
        sx={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {error && <ErrorMsg />}
        <FormLogin />
      </Box>
    </Box>
  );
};
