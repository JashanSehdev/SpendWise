import { Box, Divider, Input, Stack, Typography } from "@mui/material";
import styles from "./additionl-input.module.css";
import { register } from "module";
import { FieldName, UseFormRegister } from "react-hook-form";
import { TransactionInput } from "../transaction.type";

const getTodayString = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

type Options = {
  label: string;
  name: FieldName<TransactionInput>;
  type: string;
  placeholder: string;
};

const options: Options[] = [
  {
    label: "Date",
    name: "createdAt",
    type: "datetime-local",
    placeholder: "Enter the Date",
  },
  {
    label: "Note",
    name: "note",
    type: "text",
    placeholder: "Enter a note",
  },
];

type Prop = {
  register: UseFormRegister<TransactionInput>;
};
export default function AdditionalInput({ register }: Prop) {
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
    </Stack>
  );
}
