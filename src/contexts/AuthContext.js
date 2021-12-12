import { createContext, useContext } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';

const initialAuthState = {
    email: '',
    token: '',
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    const login = ({
        token,
        email
    }) => {
        setUser({
            token: token,
            email: email
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