import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import "./App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import JobsPage from "./pages/JobsPage";
import JobDetailModal from "./pages/JobDetailModal";
import LoginModal from "./components/LoginModal";
import Layout from "./pages/Layout";
import RequireAuth from "./auth/RequireAuth";
import { useAuth } from "./auth/auth";
import JobsFilterPage from "./pages/JobsFilterPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const location = useLocation();
  let background = location.state && location.state.background;
  const auth = useAuth();
  // console.log(auth.user);
  console.log(location);
  console.log(background);
  return (
    <ThemeProvider theme={darkTheme}>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs/:page" element={<JobsPage />} />
          <Route path="jobs/filterJobs" element={<JobsFilterPage />} />
        </Route>

        <Route
          path="*"
          element={
            <main>
              There nothing here
              <p>
                <Link to="/">Go to the home page</Link>
              </p>
            </main>
          }
        />
      </Routes>

      {background && auth.user ? (
        <Routes>
          <Route path="/jobs/jobDetail/:id" element={<JobDetailModal />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/jobs/jobDetail/:id" element={<LoginModal />} />
          <Route path="/sign_in" element={<LoginModal />} />
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
