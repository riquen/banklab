export const TRANSACTION_TYPES = ['deposit', 'invoice', 'payment', 'withdrawal'] as const;

export type TransactionType = (typeof TRANSACTION_TYPES)[number];

export interface Transaction {
  id: string;
  description: string;
  amountInCents: number;
  date: Date;
  transactionType: TransactionType;
}

export const TRANSACTION_DIRECTION = {
  deposit: 'in',
  invoice: 'in',
  payment: 'out',
  withdrawal: 'out',
} as const satisfies Record<TransactionType, 'in' | 'out'>;

export const TRANSACTION_LABELS = {
  deposit: 'Deposit',
  invoice: 'Invoice',
  payment: 'Payment',
  withdrawal: 'Withdrawal',
} as const satisfies Record<TransactionType, string>;
