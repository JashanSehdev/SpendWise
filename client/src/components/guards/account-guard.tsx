'use client'
import { useAppSelector } from "@/features/store";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { ReactNode } from "react";


export default function AccountGuard ({children} : {children : ReactNode}) {
    const account = useAppSelector((state) => state.account.account);
    const router = useRouter()
    if (!account) {
        enqueueSnackbar('Account Required', {variant : 'error'})
        router.replace("/accounts")
        return null
    }
    return (
        <>
        {children}
        </>
    )
}