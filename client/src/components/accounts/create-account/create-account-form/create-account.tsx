import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAccountInput, CreateAccountOutput, createAccountSchema } from "./create-account-form.type";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from './create-account.module.css'
import { useAppDispatch } from "@/features/store";
import { enqueueSnackbar } from "notistack";
import { getErrorMessage } from "@/api/api";
import { createAccountAsync } from "@/features/account/handle-account/account.action";

type Prop = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};
const CreateAccountForm = ({ setOpen }: Prop) => {
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        reset
    } = useForm<CreateAccountInput, unknown, CreateAccountOutput>({
        resolver : zodResolver(createAccountSchema),
        defaultValues: {
            balance : 0
        }
    })

    const onSubmit : SubmitHandler<CreateAccountOutput> = async(data) => {    
        try {
            await dispatch(createAccountAsync(data)).unwrap()
            enqueueSnackbar('Account Created Successfully')
            setOpen(false)
        } catch(error) {
            enqueueSnackbar(getErrorMessage(error))
        } finally {
            reset() 
        }
        
    }
  return (
    <Stack spacing={2} className={styles.container}>
      <Typography variant="h6">Create an Account</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <Box className={styles.inputBox}>
            <InputLabel>Account Name</InputLabel>
            <TextField fullWidth placeholder="Enter Your account name" {...register('name')}/>
          </Box>
          <Box className={styles.inputBox}>
            <InputLabel>Balance</InputLabel>
            <TextField  
            fullWidth
            placeholder="Enter your intial Account Balance" {...register('balance')}/>
            
          </Box>
        <Button type="submit" variant="contained">create</Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default CreateAccountForm;
