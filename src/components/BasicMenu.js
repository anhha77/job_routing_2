import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../auth/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function BasicMenu({
  anchorEl,
  open,
  handleClose,
  handleLogout,
  location,
}) {
  const auth = useAuth();

  return (
    <div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {!auth.user ? (
          <MenuItem onClose={handleClose}>
            <ExitToAppIcon sx={{ marginRight: "15px" }} />

            <Link
              to={"/sign_in"}
              state={{ background: location }}
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Sign In
            </Link>
          </MenuItem>
        ) : (
          <div>
            <MenuItem onClose={handleClose}>
              <AccountCircleIcon sx={{ marginRight: "15px" }} />
              <Typography
                variant="p"
                sx={{ marginRight: "15px", fontSize: "1.2rem" }}
              >
                {auth.user}
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ExitToAppIcon sx={{ marginRight: "15px" }} />
              Sign Out
            </MenuItem>
          </div>
        )}
      </Menu>
    </div>
  );
}
