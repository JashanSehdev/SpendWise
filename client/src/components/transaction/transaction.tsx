"use client";
import { Button, Stack } from "@mui/material";
import styles from "./transaction.module.css";
import TransactionNavbar from "./transaction-navbar/transaction-navbar.page";
import Categories from "./category/category";
import AdditionalInput from "./additional-inputs/additional-input";
import { SubmitHandler, useForm } from "react-hook-form";
import { TransactionInput, TransactionOutput, transactionSchema } from "./transaction.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionType } from "@/enum/transaction.enum";

export default function Transaction() {
  const { register, setValue, watch, handleSubmit } = useForm<TransactionInput, unknown, TransactionOutput>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: TransactionType.EXPENSE,
      createdAt: new Date().toISOString().slice(0, 16),
    },
  });

  const onSubmit  : SubmitHandler<TransactionOutput>  = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack className={styles.page} spacing={2}>
        <TransactionNavbar setValue={setValue} selected={watch("type")} />

        <input
          className={styles.inputAmount}
          placeholder="$0"
          type="number"
          min={0}
          {...register("amount")}
        />
        <Categories setValue={setValue} category={watch("category")} />

        <AdditionalInput register={register} />
      <Button type="submit" variant="dashed">Go</Button>
      </Stack>
    </form>
  );
}
