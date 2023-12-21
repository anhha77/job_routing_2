import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        minWidth: 275,
        bgcolor: grey[900],
        height: "240px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/jobs/jobDetail/${job.id}`)}
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            textAlign: "center",
            borderBottom: "1px solid #ccc",
          }}
          color="text.secondary"
          gutterBottom
        >
          {job.title}
        </Typography>
        <ul style={{ listStyle: "none", display: "flex", fontSize: "10px" }}>
          {job.skills.slice(0, 4).map((skill, index) => (
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
        <Typography variant="body2" sx={{ marginTop: "10px" }}>
          {job.description}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions sx={{ alignSelf: "center" }}>
        <Button
          size="small"
          sx={{ bgcolor: "#e67e22", color: "#000" }}
          onClick={() => navigate(`/jobs/jobDetail/${job.id}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
