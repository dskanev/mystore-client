import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
    userId: '',
    email: '',
    token: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = ({
        token,
        email,
        userId
    }) => {
        setUser({
            token: token,
            email: email,
            userId: userId
        });
    }

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated: user.email }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}