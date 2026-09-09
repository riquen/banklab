import { faker } from '@faker-js/faker';

export const mockTransactions = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  description: faker.company.name(),
  amount: faker.number.float({
    min: -1000,
    max: 5000,
    fractionDigits: 2,
  }),
  date: faker.date.recent({ days: 30 }),
}));
