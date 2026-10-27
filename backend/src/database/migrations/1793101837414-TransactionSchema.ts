import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class TransactionSchema1793101837414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name : 'transactions',
                columns : [
                    {
                        name: 'id',
                        isPrimary: true,
                        isGenerated : true,
                        generationStrategy: 'increment',
                        type : 'integer'
                    },
                    {
                        name : 'account_number',
                        type : 'integer'
                    },

                    {
                        name : 'amount',
                        type : 'integer'
                    },
                    {
                        name : 'counterParty',
                        type : 'varchar'
                    },
                    {
                        name : 'category',
                        type : 'varchar'
                    },
                    {
                        name : 'note',
                        type : 'varchar',
                        length: '600'
                    },
                    {
                        name : 'type',
                        type : 'enum',
                        enum : ['income', 'expense'],
                        default: "'expense'"
                    },
                    {
                        name : 'time',
                        type : 'varchar'
                    },
                    {
                        name : 'createdAt',
                        type : 'timestamp',
                        default : 'now()'
                    }
                ],
                checks : [
                    {
                        name : "ck_amount",
                        expression : '"amount" >= 0'
                    }
                ],

                foreignKeys : [
                    new TableForeignKey({
                        name : "fk_transaction_account",
                        columnNames: ['account_number'],
                        referencedColumnNames : ['id'],
                        referencedTableName: 'accounts',
                        onDelete : 'CASCADE'
                    })
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('transactions', 'fk_transaction_account')
        await queryRunner.dropTable('transactions')
    }

}
