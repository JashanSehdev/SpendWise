import { TransactionType } from "@/enum/transaction.enum";
import z from "zod";

export const transactionSchema = z.object({
    type : z.enum(TransactionType),
    amount : z.coerce.number().min(0),
    category : z.string(),
    time : z.string(),
    note : z.string(),
    counterParty : z.string().min(1, 'To / From Required')
})

export type TransactionInput = z.input<typeof transactionSchema>

export type TransactionOutput = z.output<typeof transactionSchema>
