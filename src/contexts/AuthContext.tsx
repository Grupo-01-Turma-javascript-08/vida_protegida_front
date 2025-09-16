import { type ReactNode, useState } from "react"
import type UsuarioLogin from '../models/UsuarioLogin'
import { login } from "../services/Service"
import { AuthContext } from './AuthContextOnly'

interface AuthProviderProps {
    children: ReactNode
}

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
            console.error(error);
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

    // Implementação da função register conforme a interface AuthContextProps
    async function register(email: string, password: string, birthDate: string): Promise<boolean> {
        // Implemente a lógica de registro conforme necessário
        // Exemplo fictício:
        try {
            // await registerService({ email, password, birthDate });
            // Sucesso no registro
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
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading, register }}>
            {children}
        </AuthContext.Provider>
    )
}
