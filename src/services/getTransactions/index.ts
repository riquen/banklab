import { mockTransactions } from '../../mocks/transactions';
import type { Transaction } from './types';

const RECENT_TRANSACTIONS_LIMIT = 5;

export const getTransactions = async (): Promise<Transaction[]> => {
  return mockTransactions
    .toSorted((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, RECENT_TRANSACTIONS_LIMIT);
};
