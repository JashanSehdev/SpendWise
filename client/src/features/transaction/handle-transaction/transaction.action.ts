import { api, getErrorMessage } from "@/api/api"
import { TransactionOutput } from "@/components/transaction/transaction.type"
import { Transaction } from "@/type/transaction.type"
import { createAsyncThunk } from "@reduxjs/toolkit"



export const createTransactionAsync  = createAsyncThunk<Transaction, TransactionOutput & {account_number : number}>(
    'transaction/create',
    async (data, thunkApi) => {
        try {
            const response = await api.post("/transactions/", data)
            return response.data
        } catch (error: unknown) {
            return thunkApi.rejectWithValue(getErrorMessage(error))
        }
    }
 
)   
