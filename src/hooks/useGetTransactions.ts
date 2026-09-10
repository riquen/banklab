import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '../services/getTransactions';

export const useGetTransactions = () => {
  const { data } = useQuery({
    queryKey: ['transactions'],
    queryFn: () => getTransactions(),
  });
  return data;
};
