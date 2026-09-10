import { faker } from '@faker-js/faker';
import type { Balance } from '../services/getBalance/types';

export const mockBalance: Balance = {
  balanceInCents: faker.number.int({ max: 999999 }),
};
