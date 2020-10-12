import { format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function generateStatements(theme: any, min: number, max: number) {
  const statements = [];
  const offStatements = [];

  const currentDate = new Date();

  for (let i = 0; i < 6; i++) {
    statements.push({
      month: format(subMonths(currentDate, 6 - i), "MMM", { locale: ptBR }),
      income: Number(getNumberWithMaxAndMinLimit(min, max)),
      incomeColor: theme.colors.success,
      outcome: Number(getNumberWithMaxAndMinLimit(min, max)) * -1,
      outcomeColor: theme.colors.error,
    });

    offStatements.push({
      month: format(subMonths(currentDate, 6 - i), "MMM", { locale: ptBR }),
      income: 100,
      incomeColor: theme.colors.success,
      outcome: 100 * -1,
      outcomeColor: theme.colors.error,
    })
  }

  const currentMonth = format(currentDate, "MMMM", { locale: ptBR });

  const currentRevenue = {
    month: currentMonth.charAt(0).toUpperCase() + currentMonth.slice(1),
    income: Number(getNumberWithMaxAndMinLimit(min, max)),
    outcome: Number(getNumberWithMaxAndMinLimit(min, max)) * -1,
  };

  return {
    statements,
    offStatements,
    currentRevenue,
  };
}

function getNumberWithMaxAndMinLimit(min: number, max: number): string {
  const range = max - min;


  return ((Math.random() * range) + min).toFixed(2);
}
