import { Chip, Stack, Typography } from "@mui/material";
import styles from "./category.module.css";
import { UseFormSetValue } from "react-hook-form";
import { TransactionInput } from "../transaction.type";



const categories: string[] = [
  "Food",
  "Rent",
  "Bills",
  "Transport",
  "Shopping",
  "Salary",
  "Others",
];

type Prop = {
  category: string,
  setValue : UseFormSetValue<TransactionInput>
};
export default function Categories({ category , setValue}: Prop) {
  return (
    <Stack spacing={2}>
      <Typography color="textSecondary">Category</Typography>

      <Stack spacing={1} direction={"row"} className={styles.chipBox}>
        {categories.map((item) => (
          <Chip
            className={` ${styles.chip} ${category === item && styles.selectedChip}`}
            key={item}
            label={item}
            onClick = {() => setValue('category', item)}
          />
        ))}
      </Stack>
    </Stack>
  );
}
