'use client'
import BasicModal from "@/components/modal/modal";
import { useState } from "react";
import CreateAccountForm from "./create-account-form/create-account";
import { Box, Button } from "@mui/material";


const CreateAccountModal = () => {
    const [open, setOpen] = useState(false)
  return (
    <Box>
      <Button  variant="contained" onClick={() =>setOpen(true)}>
        Create Account
      </Button>
      <BasicModal open={open} setOpen={setOpen}>
        <CreateAccountForm setOpen={setOpen} />
      </BasicModal>
    </Box>
  );
};

export default CreateAccountModal;
