import { Box, Container, Stack, Typography } from "@mui/material";
import styles from "./transaction-navbar.module.css";
import { UseFormSetValue } from "react-hook-form";
import { TransactionType } from "@/enum/transaction.enum";
import { TransactionInput } from "../transaction.type";

type Options = {
  name: string;
  value: TransactionType;
};

const options: Options[] = [
  {
    name: "expense",
    value: TransactionType.EXPENSE,
  },
  {
    name: "income",
    value: TransactionType.INCOME,
  },

];

interface Prop {
  selected: TransactionType;
  setValue: UseFormSetValue<TransactionInput>;
}

export default function TransactionNavbar({
  selected, setValue
}: Prop) {
  return (
    <Container>
      <Stack direction={"row"} spacing={0.2} className={`${styles.bar} `}>
        {options.map((item) => (
          <Box
            key={item.name}
            className={`${styles.navigators} ${selected === item.value ? styles.selected : ""}`
          }
            onClick={() => setValue('type', item.value)}
          >
            <Typography>{item.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
