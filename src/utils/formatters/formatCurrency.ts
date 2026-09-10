
const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const signedCurrencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  signDisplay: 'exceptZero',
});

export const formatCurrency = (valueInCents: number, showSign = false) => {
  const formatter = showSign ? signedCurrencyFormatter : currencyFormatter;
  return formatter.format(valueInCents / 100);
};
