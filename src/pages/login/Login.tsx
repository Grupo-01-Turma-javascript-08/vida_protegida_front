import { Eye, EyeOff, Shield } from "lucide-react";
import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
 
 
function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext)
 
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const [showPassword, setShowPassword] = useState(false);
 
  useEffect(() => {
    if (usuario?.token) {
      navigate("/home");
    }
  }, [usuario, navigate]);
 
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }
 
  function login(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
    console.log(usuarioLogin)
  }
 
  return (
    <div className="max-w-md mx-auto">
      <div className="p-8 bg-white rounded-lg shadow">
        <div className="text-center mb-6">
          <Shield className="h-12 w-12 text-[#38bdf8] mx-auto mb-4" />
          <h1 className="text-[#334155] mb-2">Bem-vindo de volta</h1>
          <p className="text-[#334155]/70">Entre em sua conta</p>
        </div>
 
        <form onSubmit={login} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-[#334155]">Email</label>
            <input
              id="email"
              name="usuario"
              type="email"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              placeholder="seu@email.com"
              className="border border-[#38bdf8]/30 rounded px-3 py-2 focus:border-[#38bdf8] w-full"
              disabled={isLoading}
            />
          </div>
 
          <div className="space-y-2">
            <label htmlFor="password" className="text-[#334155]">Senha</label>
            <div className="relative">
              <input
                id="password"
                name="senha"
                type={showPassword ? 'text' : 'password'}
                value={usuarioLogin.senha || ""}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                placeholder="Digite sua senha"
                className="border border-[#38bdf8]/30 rounded px-3 py-2 pr-10 w-full focus:border-[#38bdf8]"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#334155]/50 hover:text-[#334155]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
 
          <button
            type="submit"
            className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-white py-2 rounded"
            >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
 
        <div className="mt-6 text-center">
          <p className="text-[#334155]/70">
            Não tem uma conta?{' '}
            <button
              onClick={() => console.log("Trocar para página de registro")}
              className="text-[#38bdf8] hover:underline"
            >
              Cadastre-se
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default Login;