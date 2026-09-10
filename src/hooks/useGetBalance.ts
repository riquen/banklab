import { useQuery } from '@tanstack/react-query';
import { getBalance } from '../services/getBalance';

export const useGetBalance = () => {
  const { data } = useQuery({
    queryKey: ['balance'],
    queryFn: () => getBalance(),
  });
  return data;
};
