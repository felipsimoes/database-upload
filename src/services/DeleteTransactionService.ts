import AppError from '../errors/AppError';

import { getCustomRepository } from 'typeorm';

import TransactionRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction not found');
    }
    transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
