import { api, getErrorMessage } from "@/api/api"
import { CreateAccountOutput } from "@/components/accounts/create-account/create-account-form/create-account-form.type"
import { Account } from "@/type/account.type"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const createAccountAsync  = createAsyncThunk<Account, CreateAccountOutput>(
    'accounts/create',
    async (account, thunkApi) => {
        try {
            const response = await api.post("/accounts/", account)
            return response.data
        } catch (error: unknown) {
            return thunkApi.rejectWithValue(getErrorMessage(error))
        }
    }
 
)   

export const fetchAccountsAsync  = createAsyncThunk<Account[]>(
    'accounts/fetch',
    async (_, thunkApi) => {
        try {
            const response = await api.get("/accounts/")
            return response.data
        } catch (error: unknown) {
            return thunkApi.rejectWithValue(getErrorMessage(error))
        }
    }
 
)   
