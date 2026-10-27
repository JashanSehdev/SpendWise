import { IsEnum, IsNumber, IsString, Min, min } from "class-validator"
import { CreateDateColumn } from "typeorm"
import { TransactionType } from "../enum/transaction.enum.js"

export class CreateTransactionDto {

    @IsNumber()
    account_number : number

    @IsNumber()
    @Min(0)
    amount : number

    @IsString()
    counterParty : string   

    @IsString()
    category : string

    @IsString()
    note : string

    @IsString()
    time: string

    @IsEnum(TransactionType)
    type : TransactionType


}
