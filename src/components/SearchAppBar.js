import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import { grey } from "@mui/material/colors";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useAuth } from "../auth/auth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BasicMenu, { SimpleDialog } from "./BasicMenu";
import { fetchDataFilterJobs } from "../data/fetchData";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 10,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "15ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  "& input.MuiInputBase-input": {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "70px",
    },
  },
}));

export default function SearchAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = React.useState(searchParams.get("query"));
  const [inputText, setInputText] = React.useState("");

  const hanldeInput = (value) => {
    console.log(value);
    setInputText(value);
  };

  const searchJobs = () => {
    setQuery(inputText);
    setSearchParams({
      query: inputText,
    });
    console.log(window.location.search);
    navigate(`/jobs/filterJobs${window.location.search}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: grey[900],
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="h4"
              sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
              className="xyz"
              onClick={() => navigate(`/`)}
            >
              Job Routing
            </Typography>
            <Search>
              <Button onClick={searchJobs}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
              </Button>

              <StyledInputBase
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
                value={inputText}
                onChange={(event) => hanldeInput(event.target.value)}
              />
            </Search>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            {auth.user ? (
              <>
                <AccountCircleIcon sx={{ marginRight: "15px" }} />
                <Typography
                  variant="p"
                  sx={{ marginRight: "15px", fontSize: "1.2rem" }}
                >
                  {auth.user}
                </Typography>
                <ExitToAppIcon />
                <Button
                  color="inherit"
                  sx={{ marginTop: "3px" }}
                  onClick={handleLogout}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <ExitToAppIcon />
                <Button color="inherit" sx={{ marginTop: "3px" }}>
                  <Link
                    to={"/sign_in"}
                    state={{ background: location }}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    Sign In
                  </Link>
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                marginTop: "5px",
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-three-dots-vertical"
                viewBox="0 0 16 16"
              >
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
              </svg>
            </Box>
            <BasicMenu
              anchorEl={anchorEl}
              open={open}
              handleClose={handleClose}
              handleLogout={handleLogout}
              location={location}
            />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
