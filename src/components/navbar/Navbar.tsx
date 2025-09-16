import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario } = useAuth();
  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold text-[#38bdf8]">
          VidaProtegida
        </Link>

        <div className="flex space-x-6 text-[#334155]">
          <Link to="/cadastro" className="font-semibold hover:text-[#0ea5e9] transition-colors">
            Cadastro
          </Link>
          <Link to="/home" className="font-semibold hover:text-[#0ea5e9] transition-colors">
            Home
          </Link>
          <Link to="/sobre" className="font-semibold hover:text-[#0ea5e9] transition-colors">
            Sobre
          </Link>
          {usuario?.token && (
            <>
              <Link to="/categorias" className="font-semibold hover:text-[#0ea5e9] transition-colors">
                Categorias
              </Link>
              <Link to="/produtos" className="font-semibold hover:text-[#0ea5e9] transition-colors">
                Produtos
              </Link>
              <Link to="/usuarios" className="font-semibold hover:text-[#0ea5e9] transition-colors">
                Usuários
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;