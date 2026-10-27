'use client'
import { Box, Paper, Stack, Typography } from "@mui/material";
import styles from "./my-account.module.css";
import { useAppSelector } from "@/features/store";

const MyAccount = () => {
  const account = useAppSelector((state) => state.account.account);
  if (!account) {
    return (
      <Box className={styles.placeholder}>
        <Typography>No Account Selected</Typography>
      </Box>
    )
  }
  return (
    <Stack spacing={1} className={styles.container}>
      <Typography variant="h6" sx={{fontWeight: 700}}>My Account</Typography>
      <Stack spacing={1} className={styles.info}>
        <Typography variant="h6">{account?.name}</Typography>
        <Typography variant="h5" sx={{fontWeight: 600}}>₹{account?.balance}</Typography>
      </Stack>
    </Stack>
  );
};

export default MyAccount;
