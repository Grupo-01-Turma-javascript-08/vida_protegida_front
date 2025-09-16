import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContextOnly";
import { useContext } from "react";

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {
    const { usuario } = useContext(AuthContext);
 

  return (
    <div className="border border-[#CBD5E1] flex flex-col rounded-2xl overflow-hidden shadow-md bg-[#fff] transition hover:shadow-lg p-5">
      <h2 className="text-2xl font-bold text-[#334155] mb-2">{produto.nome}</h2>

      <p className="text-[#475569] text-sm leading-relaxed">
        {produto.descricao}
      </p>

      <p className="text-lg font-extrabold text-[#1E3A8A] mt-4">
        R$ {produto.preco.toFixed(2)}
      </p>

      <p className="text-xs text-[#64748B] mt-1">
        Categoria: {produto.categoria?.nome || "Não informado"}
      </p>

      <button
        onClick={() => {
          toast.info("Contação Enviada!");
        }}
        className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 
                   bg-[#334155] text-white rounded-xl font-medium cursor-pointer
                   hover:bg-[#1E293B] transition"
      >
        Solicitar Cotação
      </button>

      {usuario?.tipo == "admin" && (
        <div className="flex gap-2 mt-4">
          <Link
            to={`/editarproduto/${produto.id}`}
            className="flex-1 bg-[#3B82F6] hover:bg-[#2563EB] 
                       text-white rounded-xl py-2 text-center transition"
          >
            Editar
          </Link>
          <Link
            to={`/deletarproduto/${produto.id}`}
            className="flex-1 bg-red-500 hover:bg-red-600 
                       text-white rounded-xl py-2 text-center transition"
          >
            Deletar
          </Link>
        </div>
      )}
    </div>
  );
}
