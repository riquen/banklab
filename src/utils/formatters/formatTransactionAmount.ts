import { TRANSACTION_DIRECTION, type TransactionType } from '../../services/getTransactions/types';
import { formatCurrency } from './formatCurrency';

export const formatTransactionAmount = (amountInCents: number, transactionType: TransactionType) =>
  formatCurrency(
    TRANSACTION_DIRECTION[transactionType] === 'out' ? -amountInCents : amountInCents,
    true,
  );
