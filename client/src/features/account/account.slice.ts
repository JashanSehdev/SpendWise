import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Account } from "@/type/account.type";
import { createAccountAsync, fetchAccountsAsync } from "./handle-account/account.action";

type InitialState = {
  account: Account | null;
  accounts: Account[];
  loading: boolean;
};

const initialState: InitialState = {
  account: null,
  accounts: [],
  loading: true,
};

const accountSlice = createSlice({
  name: "accountSlice",
  initialState,
  reducers: {
    setAccount : (state, action: PayloadAction<Account>) => {
      state.account = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAccountAsync.fulfilled, (state, action) => {
        state.accounts.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchAccountsAsync.fulfilled, (state, action) => {
        state.accounts = action.payload;
        state.loading = false
      })

      .addCase(createAccountAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchAccountsAsync.pending, (state) => {
        state.loading = false
      })

      .addCase(createAccountAsync.rejected, (state) => {
        state.loading = false
      })
      .addCase(fetchAccountsAsync.rejected, (state) => {
        state.loading = false
      })
  },
});

export const {setAccount} = accountSlice.actions
export default accountSlice.reducer;
