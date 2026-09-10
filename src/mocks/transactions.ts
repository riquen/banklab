import { faker } from '@faker-js/faker';
import { TRANSACTION_TYPES, type Transaction } from '../services/getTransactions/types';
export const mockTransactions: Transaction[] = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  description: faker.company.name(),
  amountInCents: faker.number.int({ min: 100, max: 100000 }),
  date: faker.date.recent({ days: 30 }),
  transactionType: faker.helpers.arrayElement(TRANSACTION_TYPES),
}));
