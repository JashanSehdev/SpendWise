import { Box, Fab } from "@mui/material";
import styles from './page.module.css'
import Link from "next/link";

export default function app() {
  return (
    <Box className={styles.page}>
      <Link href={'./transaction'}>
      <Fab className= {styles.fab}>+</Fab>
      </Link>
      
    </Box>
  );
}
    