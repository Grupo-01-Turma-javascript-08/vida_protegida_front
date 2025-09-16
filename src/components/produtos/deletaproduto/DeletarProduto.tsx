import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (usuario?.token === "") {
      toast.info("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario?.token]);

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {
        headers: {
          Authorization: usuario?.token,
        },
      });
      toast.success("Produto apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      } else {
        toast.error("Erro ao deletar o produto.");
      }
    }
    retornar();
  }

  function retornar() {
    navigate("/produtos");
  }

  return (
    <section className="min-h-screen bg-[#E0F2FE] flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-lg text-center border border-[#CBD5E1]">
        <h1 className="text-2xl font-bold text-[#334155] mb-4">
          Excluir Produto
        </h1>

        <p className="text-[#475569] mb-8">
          Tem certeza que deseja{" "}
          <span className="font-semibold text-red-600">excluir</span> este
          produto? <br /> Essa ação não poderá ser desfeita.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={deletarProduto}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-md transition font-semibold"
          >
            Confirmar
          </button>
          <button
            onClick={retornar}
            className="bg-[#E0F2FE] hover:bg-[#bae6fd] text-[#334155] px-6 py-2 rounded-xl shadow-md transition font-semibold border border-[#334155]/30"
          >
            Cancelar
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeletarProduto;
