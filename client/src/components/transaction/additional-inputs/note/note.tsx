import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import styles from "./note.module.css";
import BasicModal from "@/components/modal/modal";
import { Dispatch, SetStateAction, useState } from "react";
import {  UseFormSetValue } from "react-hook-form";
import { TransactionInput } from "../../transaction.type";

type NoteProp = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setValue: UseFormSetValue<TransactionInput>;
};
export default function Note({ open, setOpen, setValue }: NoteProp) {
  return (
    <BasicModal open={open} setOpen={setOpen}>
      <AddNote setValue={setValue} setOpen={setOpen} />
    </BasicModal>
  );
}

type AddNoteProp = {
  setValue: UseFormSetValue<TransactionInput>;
  setOpen :  Dispatch<SetStateAction<boolean>>
};
export function AddNote({ setValue, setOpen }: AddNoteProp) {
  const [note, setNote] = useState<string>("");
  const handleNote = () => {
    setValue("note", note);
    setOpen(false)
  };
  return (
    <Stack spacing={2} className={styles.container}>
      <Typography variant="h6">Add a Note</Typography>
      <TextField
        multiline
        rows={4}
        fullWidth
        placeholder="Enter your Note"
        defaultValue={note}
        onChange={(e) => setNote(e.target.value) }
      />

      <Button variant="contained" onClick={handleNote}>
        Add Note
      </Button>
    </Stack>
  );
}
