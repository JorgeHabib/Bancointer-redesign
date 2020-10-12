import { format, subMonths } from "date-fns"
import { ptBR } from 'date-fns/locale';

interface Coordinates {
  x: string;
  y: number;
}

export default function generateInvestments(max: number) {
  const currentDate = new Date();
  const investmentGrowth = {
    id: 'growth',
    data: [] as Coordinates[],
  }
  const offInvestmentGrowth = {
    id: 'growth',
    data: [] as Coordinates[],
  }

  for (let i = 0; i < 5; i++) {
    investmentGrowth.data.push({
      x: format(subMonths(currentDate, 4 - i), "MMM", { locale: ptBR }),
      y: getRandomPercentage(max),
    });

    offInvestmentGrowth.data.push({
      x: format(subMonths(currentDate, 4 - i), "MMM", { locale: ptBR }),
      y: 0,
    })
  }

  const monthEvolution = getRandomPercentage(max);
  const totalInvested = getRandomPercentage(max) * 15;

  return {
    investmentGrowth: [investmentGrowth],
    offInvestmentGrowth: [offInvestmentGrowth],
    totalInvested,
    monthEvolution,
  };
}

function getRandomPercentage(max: number) {
  return Math.floor(Math.random() * max);
}

// {
//   "id": "japan",
//   "data": [
//     {
//       "x": "jan",
//       "y": 26
//     },
//     {
//       "x": "fev",
//       "y": 55
//     },
//     {
//       "x": "mar",
//       "y": 35
//     },
//     {
//       "x": "abr",
//       "y": 67
//     },
//   ]
// },
