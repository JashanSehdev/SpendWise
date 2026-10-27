import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TransactionType } from "../enum/transaction.enum.js";

@Entity('transactions')
export class Transaction {
    
    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    account_number : number

    @Column({type : 'integer'})
    amount : number

    @Column({type : 'varchar'})
    counterParty : string

    @Column({type : 'varchar'})
    category : string

    @Column({type : 'varchar', length : 600})
    note : string

    @Column({type : 'enum', enum : TransactionType})
    type : TransactionType

    @Column({type : 'varchar'})
    time : string

    @CreateDateColumn()
    createdAt:  Date
}
