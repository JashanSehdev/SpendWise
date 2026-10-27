import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto.js';
import { UpdateAccountDto } from './dto/update-account.dto.js';
import { Repository } from 'typeorm';
import { Account } from './entities/account.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository : Repository<Account>
  ){}

  async create(createAccountDto : CreateAccountDto,userId: number) {
    const account = this.accountRepository.create({...createAccountDto, userId});
    return await this.accountRepository.save(account)
  }

  // findAll() {
  //   return `This action returns all account`;
  // }

  async findOne(id: number) {
    return await this.accountRepository.findOneBy({id})
  }

  async getUserAccounts(userId : number) {
    return await this.accountRepository.findBy({userId})
  }

  async update(id: number, updateAccountDto: UpdateAccountDto) {
    const account = await this.accountRepository.preload({
      id: id,
      ...updateAccountDto
    })

    if(!account) throw new NotFoundException('Account not found')
    return await this.accountRepository.save(account)
  }

  // remove(id: number) {
  //   return `This action removes a #${id} account`;
  // }
}
