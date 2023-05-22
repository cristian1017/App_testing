import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
import { isLogout, setIsLogout } from "../../../../store/slices/login/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { Navigate } from "react-router-dom";

export const Nav = () => {
  const dispatch = useDispatch<AppDispatch>();
  const logout = useSelector(isLogout);
  const settings = ["Perfil", "Salir"];


  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
    if (e.currentTarget.textContent === settings[1]) {
      localStorage.removeItem("login");
      dispatch(setIsLogout(true))
    }
  };

  if(logout){
    return <Navigate to="/login" />
  }

  return (
    <Box>
      <Toolbar sx={{ background: "#00284A", display: "flex" }}>
        <img
          src="https://monoma.io/wp-content/uploads/2022/05/logo-white.png"
          alt=""
          style={{ width: "15%", height: "10%" }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Usuario">
                <PersonIcon />
              </Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={(e) => handleCloseUserMenu(e)}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
};
