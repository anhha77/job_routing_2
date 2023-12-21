import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../jobs.json";
import { Box, Container, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoneyIcon from "@mui/icons-material/Money";

function JobDetail() {
  const params = useParams();
  const jobId = params.id;
  // console.log(jobId);
  const job = jobs.find((job) => job.id === jobId);
  if (!job) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          bgcolor: "#000",
        }}
      >
        <Typography variant="h3" sx={{ color: "#fff" }}>
          No job found
        </Typography>
        ;
      </Box>
    );
  }
  return (
    <Box
      sx={{
        textAlign: "center",
        height: "100vh",
        bgcolor: "#000",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          paddingTop: "20px",
          borderBottom: "1px solid #ccc",
        }}
      >
        {job.title}
      </Typography>
      <Container sx={{ marginTop: "20px" }}>
        <Typography variant="p" sx={{ color: "#fff" }}>
          {job.description}
        </Typography>
        <Box
          sx={{
            marginTop: "20px",
            display: { sx: "block", md: "flex" },
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { sx: "0px", md: "0px 40px" },
              marginTop: "20px",
              width: "50%",
            }}
          >
            <BusinessIcon sx={{ color: "#fff", marginRight: "10px" }} />
            <Typography variant="p" sx={{ color: "#fff" }}>
              {job.companyId}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { sx: "0px", md: "0px 40px" },
              marginTop: "20px",
              width: "50%",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <LocationCityIcon sx={{ color: "#fff", marginRight: "10px" }} />
            <Typography variant="p" sx={{ color: "#fff" }}>
              {job.city}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { sx: "0px", md: "0px 40px" },
              marginTop: "20px",
              width: "50%",
            }}
          >
            <CalendarTodayIcon sx={{ color: "#fff", marginRight: "10px" }} />
            <Typography variant="p" sx={{ color: "#fff" }}>
              {job.postedDate}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: { sx: "0px", md: "0px 40px" },
              marginTop: "20px",
              width: "50%",
              justifyContent: { xs: "flex-start", md: "flex-end" },
            }}
          >
            <MoneyIcon sx={{ color: "#fff", marginRight: "10px" }} />
            <Typography variant="p" sx={{ color: "#fff" }}>
              {job.salaryLow} - {job.salaryHigh}
            </Typography>
          </Box>
        </Box>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            fontSize: "16px",
            marginTop: "50px",
            justifyContent: "center",
          }}
        >
          {job.skills.map((skill, index) => (
            <li
              key={index}
              style={{
                padding: "5px",
                backgroundColor: "#e74c3c",
                borderRadius: "5px",
                margin: "0px 5px",
                cursor: "pointer",
              }}
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}

export default JobDetail;
