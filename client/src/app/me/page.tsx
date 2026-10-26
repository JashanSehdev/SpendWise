"use client";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import styles from "./me.module.css";
import { useAppSelector } from "@/features/store";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";

export default function Me() {
  const user = useAppSelector((state) => state.auth.user);

  const [username, setusername] = useState<string>(user?.username ?? '');
  const [loading, setLoading] = useState<boolean>(true)
  
  try {

  } catch(error) {
    enqueueSnackbar()
  }
  return (
    <Box className={styles.page}>
      <Paper className={styles.box}>
        <Stack spacing={2}>
            <Stack spacing={4} direction={'row'} sx={{alignItems: 'center'}}>
                <Typography>Username: </Typography>
                <TextField placeholder="hi" defaultValue={username} onChange={(e) => setusername(e.target.value)} />
            </Stack>
            <Stack spacing={4} direction={'row'} sx={{alignItems: 'center'}}>
                <Typography>Email: </Typography>
                <Typography> {user?.email}</Typography>
            </Stack>
          
        <Button variant="contained">Update</Button>
        </Stack>

        {/* <Select defaultValue={}>
          <MenuItem value={"$"}>US Dollor</MenuItem>
          <MenuItem value={"₹"}>Indian Rupees</MenuItem>
        </Select> */}
      </Paper>
    </Box>
  );
}
