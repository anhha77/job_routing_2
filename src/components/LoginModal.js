import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "./LoginForm";
import { grey } from "@mui/material/colors";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "90vw", sm: "450px", md: "650px" },
  bgcolor: grey[900],

  boxShadow: 24,
  p: 4,
};

export default function LoginModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LoginForm />
        </Box>
      </Modal>
    </div>
  );
}
