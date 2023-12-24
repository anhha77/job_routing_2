import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jobs from "../jobs.json";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { fetchData } from "../data/fetchData";
import { red } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90vw", sm: "450px", md: "650px" },
  bgcolor: "#000",
  boxShadow: 24,
  p: 4,
};

function JobDetailModal() {
  const params = useParams();
  const jobId = params.id;
  // console.log(jobId);
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await fetchData(jobId);
      setJob(data);
      setIsLoading(false);
    };
    getData();
  }, [jobId]);

  if (!job) {
    return (
      <Modal
        open={true}
        onClose={() => {
          navigate(-1);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {isLoading ? (
          <Box sx={style}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress color="error" />
            </Box>
          </Box>
        ) : (
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              No job found
            </Typography>
          </Box>
        )}
      </Modal>
    );
  }
  return (
    <Modal
      open={true}
      onClose={() => {
        navigate(-1);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {isLoading ? (
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress color="error" />
          </Box>
        </Box>
      ) : (
        <Box sx={style}>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              paddingTop: "20px",
              borderBottom: "1px solid #ccc",
              textAlign: "center",
            }}
          >
            {job.title}
          </Typography>
          <Container sx={{ marginTop: "20px" }}>
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontSize: "1rem", textAlign: "center" }}
            >
              {job.description}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontSize: "1rem",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              Skills:
            </Typography>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                fontSize: "16px",
                justifyContent: "center",
                color: "#fff",
              }}
            >
              {job.skills.map((skill, index) => (
                <li
                  key={index}
                  style={{
                    padding: "5px",
                    backgroundColor: "#e74c3c",
                    borderRadius: "10px",
                    margin: "0px 5px",
                    cursor: "pointer",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontSize: "1rem",
                textAlign: "center",
                marginTop: "20px",
              }}
            >
              City: {job.city}
            </Typography>
          </Container>
        </Box>
      )}
    </Modal>
  );
}

export default JobDetailModal;
