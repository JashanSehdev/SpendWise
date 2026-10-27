import { Check, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, type Relation, UpdateDateColumn } from "typeorm";
import { User } from "../../users/entities/users.entity.js";


@Entity('accounts')
@Check('"balance" >= 0')
export class Account {

    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'integer'})
    userId : number

    @Column({type : 'varchar'})
    name : string

    @Column({type : 'integer', })
    balance : number

    @CreateDateColumn()
    createdAt : Date

    @UpdateDateColumn()
    updatedAt : Date

    @OneToMany(() => User, (user) => user.accounts)
    user : Relation<User>

}
