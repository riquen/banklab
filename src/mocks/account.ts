import { faker } from '@faker-js/faker';
import type { Account } from '../services/getAccount/types';

export const mockAccount: Account = {
  firstName: faker.person.firstName(),
  branch: faker.finance.accountNumber({ length: 4 }),
  accountNumber: faker.string.numeric(7),
  checkDigit: faker.string.numeric(1),
};
