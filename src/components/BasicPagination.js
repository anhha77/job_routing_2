import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import jobs from "../jobs.json";
import { useNavigate } from "react-router-dom";

export default function BasicPagination() {
  const jobsList = jobs.length;
  // console.log(jobsList);
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(jobsList / 5)}
        color="error"
        onChange={(event, page) => navigate(`/jobs/${page}`)}
      />
    </Stack>
  );
}
