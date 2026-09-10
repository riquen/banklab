const dateFormatter = new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' });

export const formatDate = (date: Date) => dateFormatter.format(date);
