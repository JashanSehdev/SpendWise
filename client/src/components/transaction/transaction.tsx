"use client";
import { Button, InputLabel, Stack, TextField } from "@mui/material";
import styles from "./transaction.module.css";
import TransactionNavbar from "./transaction-navbar/transaction-navbar.page";
import Categories from "./category/category";
import AdditionalInput from "./additional-inputs/additional-input";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TransactionInput,
  TransactionOutput,
  transactionSchema,
} from "./transaction.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionType } from "@/enum/transaction.enum";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { useTransaction } from "@/hooks/useTransaction";

export default function Transaction() {
  const { createTransaction } = useTransaction();

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionInput, unknown, TransactionOutput>({
    resolver: zodResolver(transactionSchema),
    defaultValues: {
      type: TransactionType.EXPENSE,
      time: new Date().toISOString().slice(0, 16),
      category: "Food",
    },
  });

  useEffect(() => {
    const errorKeys = Object.keys(errors) as Array<keyof TransactionInput>;

    if (errorKeys.length > 0) {
      enqueueSnackbar(errors[errorKeys[0]]?.message, {
        variant: "warning",
        autoHideDuration: 2000,
      });
    }
  }, [errors]);

  const onSubmit: SubmitHandler<TransactionOutput> = (data) => {
    createTransaction(data);
  };
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

        <Stack>
          <InputLabel>
            {watch("type") === TransactionType.EXPENSE ? "To" : "From"}
          </InputLabel>
          <TextField
            placeholder={"eg: ABC Shop"}
            {...register("counterParty")}
          />
        </Stack>
        <Categories setValue={setValue} category={watch("category")} />
        <input hidden {...register("note")} />
        <AdditionalInput setValue={setValue} register={register} />
        <Button type="submit" variant="contained">
          Go
        </Button>
      </Stack>
    </form>
  );
}
