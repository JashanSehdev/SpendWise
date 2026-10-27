import z from "zod";


export const createAccountSchema = z.object({
    name : z.string().min(1, 'Account name required'),
    balance : z.coerce.number().min(0, 'Balance should ot be in negative')
})

export type CreateAccountInput = z.input<typeof createAccountSchema>

export type CreateAccountOutput = z.output<typeof createAccountSchema>