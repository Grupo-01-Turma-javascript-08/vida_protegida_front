import { createContext, useContext } from "react";

import type UsuarioLogin from '../models/UsuarioLogin';

export interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout: () => void;
  handleLogin: (usuario: UsuarioLogin) => Promise<void>;
  isLoading: boolean;
  register: (name: string, email: string, password: string, birthDate: string) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
}
