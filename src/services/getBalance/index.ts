import { mockBalance } from '../../mocks/balance';
import type { Balance } from './types';

export const getBalance = async (): Promise<Balance> => {
  return mockBalance;
};
