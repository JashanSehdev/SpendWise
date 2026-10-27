import { getErrorMessage } from "@/api/api";
import { TransactionOutput } from "@/components/transaction/transaction.type";
import { useAppDispatch, useAppSelector } from "@/features/store";
import { createTransactionAsync } from "@/features/transaction/handle-transaction/transaction.action";
import { Transaction } from "@/type/transaction.type"
import { error } from "console";
import { enqueueSnackbar } from "notistack";
import { useState } from "react"


export const useTransaction = () => {
    const account = useAppSelector((state)=> state.account.account)
    const dispatch = useAppDispatch()
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const createTransaction = async(data : TransactionOutput) => {
        try {
            if (!account) {
                enqueueSnackbar ("Account required", {variant : 'error'})
                return 
            }
            setLoading(true)
            const result = await dispatch(createTransactionAsync({...data, account_number : account.id})).unwrap()
            setTransaction((prev) => [...prev, result]);
            enqueueSnackbar("Transaction Created Successfull", {variant : "success"})
        } catch (error) {
            enqueueSnackbar(getErrorMessage(error), {variant : 'error'})
        } finally {
            setLoading(false)
        }
    }

    return {createTransaction, loading, transactions}
}