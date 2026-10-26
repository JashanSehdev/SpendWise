import { TransactionType } from "@/enum/transaction.enum";
import z from "zod";

export const transactionSchema = z.object({
    type : z.enum(TransactionType),
    amount : z.coerce.number().min(0),
    category : z.string(),
    createdAt : z.string(),
    note : z.string(),
})

export type TransactionInput = z.input<typeof transactionSchema>

export type TransactionOutput = z.output<typeof transactionSchema>
