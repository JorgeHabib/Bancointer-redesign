import React, { createContext, useState, useCallback, useContext, useMemo } from 'react';
import { useTheme } from 'styled-components';
import { Serie } from '@nivo/line';

import generateInvestments from '../utils/generateInvestments';
import generateStatements from '../utils/generateStatements';
import generateBalance from '../utils/generateBalance';

interface AuthState {
  user: User;
  statementData: StatementData;
  investmentData: InvestementData;
  balance: number;
}

interface CurrentRevenueData {
  month: string;
  income: number;
  outcome: number;
}

interface InvestementData {
  investmentGrowth: Serie[];
  offInvestmentGrowth: Serie[];
  totalInvested: number;
  monthEvolution: number;
}

interface StatementData {
  statements: Statement[];
  offStatements: Statement[];
  currentRevenue: CurrentRevenueData;
}

export interface Statement {
  month: string;
  income: number;
  outcome: number;
  incomeColor: string;
  outcomeColor: string;
}

export interface User {
  name: string;
}

interface AuthContextData {
  user: User,
  statementData: StatementData;
  investmentData: InvestementData;
  balance: number;
  login(data: LoginCredentials): void;
  logout(): void;
}

interface LoginCredentials {
  name: string;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const LOWER_STATEMENT_VALUE = 5000;
const UPPER_STATEMENT_VALUE = 8000;
const UPPER_INVESTMENT_PERCENTAGE = 60;

export const AuthProvider: React.FC = ({ children }) => {
  const [userData, setUserData] = useState<AuthState>({} as AuthState);
  const theme = useTheme();

  const login = useCallback(({ name }: LoginCredentials) => {
    const statementData = generateStatements(theme, LOWER_STATEMENT_VALUE, UPPER_STATEMENT_VALUE);
    const investmentData = generateInvestments(UPPER_INVESTMENT_PERCENTAGE);
    const balance = generateBalance();

    setUserData({ user: { name }, statementData, investmentData, balance });
    console.log({ user: { name }, statementData, investmentData, balance })
  }, [theme]);

  const logout = useCallback(() => {
    setUserData({} as AuthState);
  }, []);

  const value = useMemo(() => {
    return {
      user: userData.user,
      login,
      logout,
      statementData: userData.statementData,
      investmentData: userData.investmentData,
      balance: userData.balance,
    }
  }, [userData, login, logout]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Using useAuth outside AuthProvider');
  }

  return context;
}
