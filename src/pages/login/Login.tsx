import { UserSquareIcon } from "@phosphor-icons/react"
import { Eye, EyeOff, Shield } from "lucide-react";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"


function Login() {

    const navigate = useNavigate();

    const { usuario, handleLogin, isLoading } = useContext(AuthContext)

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {} as UsuarioLogin
    )

    useEffect(() => {
        if (UserSquareIcon.token !== "") {
            navigate('/home')
        }
    }, [usuario])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    function login(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleLogin(usuarioLogin)
    }

    return (
        <>
            <div className="max-w-md mx-auto">
                <card className="p-8">
                    <div className="text-center mb-6">
                        <shield className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
                        <h1 className="text-[#334155] mb-2">Bem-vinso de volta</h1>
                        <p className="text-[#334155]/70">Entre em sua conta</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[#334155]">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="seu@email.com"
                                className="border-[#38bdf8]/30 focus:border-[#38bdf8]"
                                disabled={isLoading}
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-[#334155]">Senha</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Digite sua senha"
                                    className="border-[#38bdf8]/30 focus:border-[#38bdf8] pr-10"
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassWord(!showPassaword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 
                                     text-[#334155]/50 hover:text-[#334155]">
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-white"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-[#334155]/70">
                        Não tem uma conta?{' '}
                        <button
                        onClick={() => setCurrentPage('register')}
                        className="text-[#38bdf8] hover:underline">
                            Cadastre-se
                        </button>
                        </p>
                    </div>
                </card>
            </div>
        </>

    )
}

export default Login