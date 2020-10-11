import React, { createContext, useState, useCallback, useContext } from 'react';

interface AuthState {
    user: User;
}

export interface User {
    name: string;
}

interface AuthContextData {
    user: User,
    login(data: LoginCredentials): void;
    logout(): void;
}

interface LoginCredentials {
    name: string;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [userData, setUserData] = useState<AuthState>({} as AuthState);

    const login = useCallback(({ name }: LoginCredentials) => {
        setUserData({ user: { name } });
    }, []);

    const logout = useCallback(() => {
        setUserData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ user: userData.user, login, logout }}>
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
