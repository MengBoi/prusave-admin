import { useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonBase from "@mui/material/ButtonBase";
import { borderRadius } from "@mui/system";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = (props) => {
  const { open, setOpen, msg, onConfirm } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {msg}
        </Typography>

        <ButtonBase
          onClick={onConfirm}
          sx={{
            backgroundColor: "#009CBD",
            color: "white",
            width: "7rem",
            height: "3rem",
            fontSize: "1rem",
            marginTop: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          Yes
        </ButtonBase>
        <ButtonBase
          onClick={handleClose}
          sx={{
            backgroundColor: "#ED1B2E",
            color: "white",
            width: "7rem",
            height: "3rem",
            fontSize: "1rem",
            marginTop: "1rem",
            borderRadius: "0.5rem",
            marginLeft: "1rem",
          }}
        >
          No
        </ButtonBase>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
