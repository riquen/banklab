import { useQuery } from '@tanstack/react-query';
import { getAccount } from '../services/getAccount';

export const useGetAccount = () => {
  const { data } = useQuery({
    queryKey: ['account'],
    queryFn: () => getAccount(),
  });
  return data;
};
