import { Box, Button, Divider, Input, Stack, Typography } from "@mui/material";
import styles from "./additionl-input.module.css";
import { register } from "module";
import { FieldName, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TransactionInput } from "../transaction.type";
import { useState } from "react";
import Note from "./note/note";

type Options = {
  label: string;
  name: FieldName<TransactionInput>;
  type: string;
  placeholder: string;
};

const options: Options[] = [
  {
    label: "Date",
    name: "time",
    type: "datetime-local",
    placeholder: "Enter the Date",
  },
];

type Prop = {
  register: UseFormRegister<TransactionInput>
  setValue: UseFormSetValue<TransactionInput>;
};
export default function AdditionalInput({ register, setValue }: Prop) {
  const [openNote, setOpenNote] = useState<boolean>(false);
  return (
    <Stack className={styles.container} spacing={1}>
      {options.map((item) => (
        <Stack spacing={1} key={item.name}>
          <Box className={styles.optionBox}>
            <Typography>{item.name}</Typography>
            <Input
              {...register(item.name)}
              className={styles.input}
              type={item.type}
              placeholder={item.placeholder}
            />
          </Box>
          <Divider className={styles.divider} />
        </Stack>
      ))}
      <Box className={styles.optionBox}>
        <Typography>Note</Typography>
        <Button onClick={() => setOpenNote(true)}>Add a Note</Button>
      </Box>
      <Note setValue={setValue} open={openNote} setOpen={setOpenNote} />
    </Stack>
  );
}
