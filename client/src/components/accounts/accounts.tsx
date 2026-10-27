import { Box, Stack } from '@mui/material'
import styles from './accounts.module.css'
import ListAccount from './list-accounts/list-accounts'
import { Account } from '@/type/account.type';
import MyAccount from './my-account/my-account';

export const mockAccounts: Account[] = [
  {
    id: 1,
    name: "John Doe Checking",
    balance: 2500.50,
    time: "2026-01-15T08:30:00.000Z",
    updatedAt: "2026-10-25T14:22:18.000Z"
  },
  {
    id: 2,
    name: "Jane Smith Savings",
    balance: 14200.00,
    time: "2026-03-22T11:15:30.000Z",
    updatedAt: "2026-10-27T09:05:00.000Z"
  },
  {
    id: 3,
    name: "Acme Corp Business",
    balance: 89450.75,
    time: "2026-06-01T09:00:00.000Z",
    updatedAt: "2026-10-26T18:45:12.000Z"
  }
];


export default function Accounts() {
    
    return ( 
        <Stack spacing={3}>
            <ListAccount/>
            <MyAccount/>
        </Stack>
    )
}