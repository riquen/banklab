import { mockAccount } from '../../mocks/account';
import type { Account } from './types';

export const getAccount = async (): Promise<Account> => {
  return mockAccount;
};
