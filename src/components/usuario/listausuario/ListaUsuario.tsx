import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../../models/Usuario";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import { buscar } from "../../../services/Service";

function ListaUsuario() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("AuthContext deve ser usado dentro de AuthProvider");
  }

  const { usuario: usuarioLogado, handleLogout } = auth;
  const token = usuarioLogado.token;

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    buscarUsuario();
  }, []);

  async function buscarUsuario() {
    try {
      setIsLoading(true);

      await buscar("/usuario", setUsuarios, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <h2>Lista de Usuários</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {usuarios.map((user) => (
            <li key={user.id}>
              {user.nome}
              {user.tipo === 'admin' && (
                <span style={{ color: '#38bdf8', fontWeight: 600, marginLeft: 8 }}>(Admin)</span>
              )}
              {/* Exemplo de ação restrita: só admin logado pode deletar */}
              {usuarioLogado.tipo === 'admin' && (
                <button style={{ marginLeft: 16, color: 'red' }} onClick={() => alert(`Deletar usuário ${user.nome}`)}>
                  Deletar
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaUsuario;

function ToastAlerta(mensagem: string, tipo: string) {
  switch (tipo) {
    case "info":
      toast.info(mensagem);
      break;
    case "error":
      toast.error(mensagem);
      break;
    case "success":
      toast.success(mensagem);
      break;
    default:
      toast(mensagem);
  }
}
