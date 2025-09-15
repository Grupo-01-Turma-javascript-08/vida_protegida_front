/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';


interface User {
  id: string;
  name: string;
  email: string;
  birthDate?: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (name: string, email: string, password: string, birthDate?: string) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se já existe usuário salvo no localStorage ao iniciar o app
    // (Ajuste feito para evitar bug de usuário sumir ao recarregar)
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulação de autenticação fake só para testes (melhorar depois!)
    await new Promise(resolve => setTimeout(resolve, 1000));
    // TODO: Integrar com backend real no futuro
    if (email === 'admin@seguro.com' && password === 'admin123') {
      const userData = {
        id: '1',
        name: 'Administrador',
        email: email,
        role: 'admin' as const
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    } else if (email && password) {
      // Usuário comum, só para simular cadastro
      const userData = {
        id: '2',
        name: 'Usuário',
        email: email,
        role: 'user' as const
      };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    // Se chegou aqui, login falhou
    setIsLoading(false);
    return false;
  };

  const register = async (name: string, email: string, password: string, birthDate?: string): Promise<boolean> => {
    setIsLoading(true);
    // Simula o registro de um novo usuário (pode melhorar depois para validar e-mail, senha, etc)
    await new Promise(resolve => setTimeout(resolve, 1000));
    const userData = {
      id: Date.now().toString(),
      name: name,
      email: email,
      birthDate: birthDate,
      role: 'user' as const
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    // Limpa o usuário do contexto e do localStorage
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    logout,
    register,
    isLoading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
import { createContext, type ReactNode, useState } from "react"
import type UsuarioLogin from '../models/UsuarioLogin'
import { login } from "../services/Service"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            alert("O Usuário foi autenticado com sucesso!")
        } catch (error) {
            alert("Os Dados do usuário estão inconsistentes!")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
