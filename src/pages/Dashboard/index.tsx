import { useGetAccount } from '../../hooks/useGetAccount';
import { useGetBalance } from '../../hooks/useGetBalance';
import { useGetTransactions } from '../../hooks/useGetTransactions';
import { TRANSACTION_LABELS } from '../../services/getTransactions/types';
import { formatCurrency } from '../../utils/formatters/formatCurrency';
import { formatDate } from '../../utils/formatters/formatDate';
import { formatTransactionAmount } from '../../utils/formatters/formatTransactionAmount';

export function Dashboard() {
  const account = useGetAccount();
  const balance = useGetBalance();
  const transactions = useGetTransactions();
  return (
    <>
      <div>
        <h1>BankLab</h1>
        <h2>Olá, {account?.firstName}</h2>
      </div>
      <div>
        <h3>Saldo disponível</h3>
        <p>{formatCurrency(balance?.balanceInCents ?? 0)}</p>
      </div>
      <div>
        <h3>Conta</h3>
        <p>Agência {account?.branch}</p>
        <p>Conta {account?.accountNumber}-{account?.checkDigit}</p>
      </div>
      <div>
        <h3>Últimas transações</h3>
        <ul>
          {transactions?.map(({ id, description, transactionType, amountInCents, date }) => (
            <li key={id}>
              <p>
                {description} ({TRANSACTION_LABELS[transactionType]})
              </p>
              <p>{formatTransactionAmount(amountInCents, transactionType)}</p>
              <p>{formatDate(date)}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
