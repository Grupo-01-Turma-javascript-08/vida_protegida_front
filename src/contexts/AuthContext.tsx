import { createContext, type ReactNode, useState } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/Service";
 
interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}
interface AuthProviderProps {
  children: ReactNode;
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
  });
 
  const [isLoading, setIsLoading] = useState(false);
 
  async function handleLogin(usuarioLogin: UsuarioLogin): Promise<void> {
    setIsLoading(true);
    try {
      await login(`/usuarios/logar`, usuarioLogin, setUsuario);
      alert("O Usuário foi autenticado com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Os Dados do usuário estão inconsistentes!");
    }
    setIsLoading(false);
  }
 
  function handleLogout() {
    setUsuario({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: ""
    });
    localStorage.removeItem("token");
  }
 
  async function register(
    email: string,
    password: string,
    birthDate: string
  ): Promise<boolean> {
    try {

      void email;
      void password;
      void birthDate;
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
 
  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
 