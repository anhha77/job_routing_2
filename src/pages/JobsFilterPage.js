import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import JobCard from "../components/JobCard";
import jobs from "../jobs.json";
import BasicPagination from "../components/BasicPagination";
import { fetchDataFilterJobs } from "../data/fetchData";

const style = {
  width: "100vw",
  height: "100vh",
  bgcolor: "#000",
  p: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function JobsFilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [jobsFilter, setJobsFilter] = useState(null);
  const value = searchParams.get("query");
  // console.log(value);
  useEffect(() => {
    const getData = async () => {
      let result = await fetchDataFilterJobs(value);
      console.log(result);
      setJobsFilter(result);
    };
    getData();
  }, [value]);

  if (!jobsFilter) {
    return (
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="error" />
        </Box>
      </Box>
    );
  } else {
    if (jobsFilter.length === 0) {
      return (
        <Box
          sx={{
            bgcolor: "#000",
            height: "100vh",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">No jobs found</Typography>
        </Box>
      );
    }
    return (
      <Box sx={{ bgcolor: "#000", height: "100vh" }}>
        <Container sx={{ paddingTop: "50px" }}>
          <Grid container spacing={4}>
            {jobsFilter.slice(0, 5).map((job) => (
              <Grid item xs={12} sm={6} md={4} key={job.id}>
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
          {/* <Box
            sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
          >
            <BasicPagination />
          </Box> */}
        </Container>
      </Box>
    );
  }
}

export default JobsFilterPage;
