import {
  Box,
  Button,
  InputAdornment,
  TextField,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { useState } from "react";
import { validationSchema } from "../validations/loginValidation";
import { getInfoLogin } from "../../../services/login/login";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import {
  handleChange,
  isLogged,
  setOnError,
} from "../../../store/slices/login/LoginSlice";
import { IFormLogin } from "../../../models/login";
import { Navigate } from "react-router-dom";

export const FormLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const login = useSelector(isLogged);

  const [view, setView] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const formik = useFormik<IFormLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const data = await getInfoLogin();
      const { email, password } = data;
      if (email === values.email && password === values.password) {
        setLoading(true)
        setTimeout(() => {
          dispatch(handleChange(data));
          console.log("login exitoso")
        }, 2000);
      } else {
        dispatch(setOnError(true));
      }
    },
  });
  
  if(login){
    return <Navigate to="/home" />
  } 
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80%",
        height: "30%",
        padding: "10px",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        background: "#F6F8FA",
      }}
      onSubmit={formik.handleSubmit}
    >
      <TextField
        id="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        variant="outlined"
        sx={{
          display: "flex",
          width: "100%",
          margin: "30px",
          background: "#FFFFFF",
        }}
      />

      <TextField
        id="password"
        label="Contraseña"
        type={view ? "text" : "password"}
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {view ? (
                <VisibilityIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setView(false)}
                />
              ) : (
                <VisibilityOffIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => setView(true)}
                />
              )}
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          display: "flex",
          width: "100%",
          marginBottom: "30px",
          background: "#FFFFFF",
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          width: "100%",
          borderRadius: "6px",
          background: "rgba(2,0,36,1)",
          "&:hover": { background: "#0F4AB8" },
        }}
      >
        {loading ? (
          <CircularProgress color="inherit" size={30} thickness={5} />
        ) : (
          "Iniciar sesión"
        )}
      </Button>
    </Box>
  );
};
