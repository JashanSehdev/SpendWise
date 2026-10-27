"use client";
import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import styles from "./list-account.module.css";
import { Account } from "@/type/account.type";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { useEffect } from "react";
import { fetchAccountsAsync } from "@/features/account/handle-account/account.action";
import { setAccount } from "@/features/account/account.slice";

type AccountListProp = {
  accounts: Account[];
};
export default function ListAccount() {
  const { accounts, loading, account } = useAppSelector(
    (state) => state.account,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAccountsAsync());
  }, [dispatch]);


  const handleSelectAccount = (acc : Account) => {
    dispatch(setAccount(acc))
  }

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <TableContainer component={Stack} spacing={2} className={styles.contianer}>
        <Typography variant="h5" > My Accounts</Typography>
      <Table>
        <TableHead>
          <TableCell>Account Number</TableCell>
          <TableCell>Account Name</TableCell>
          <TableCell>Balance</TableCell>
          <TableCell>Created At</TableCell>
          <TableCell>Updated at</TableCell>
          <TableCell>Select</TableCell>
        </TableHead>
        <TableBody>
          {accounts.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.balance}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.updatedAt}</TableCell>
              <TableCell>
                <Button variant="outlined"
                
                    onClick={() => handleSelectAccount(item)}
                >
                  {account?.id === item.id ? "selected" : "select"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
