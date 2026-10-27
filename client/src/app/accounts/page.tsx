import Accounts from "@/components/accounts/accounts";
import { Button, Stack } from "@mui/material";
import styles from './account-page.module.css'
import CreateAccountModal from "@/components/accounts/create-account/create-account";

export default function AccountPage() {
    
    return (
        <Stack className={styles.container}>
            <Stack className={styles.button_container} >
                <CreateAccountModal/>

            </Stack>
            <Accounts/>
        </Stack>
    )
}5