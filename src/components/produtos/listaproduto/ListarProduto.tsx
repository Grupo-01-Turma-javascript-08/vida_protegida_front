
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContextOnly";
import { toast } from "react-toastify";
import type Categoria from "../../../models/Categoria";

function ListarProduto() {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const { usuario } = useContext(AuthContext);
  const [filtro, setFiltro] = useState("");
  const [categoria, setCategoria] = useState("Todas");
const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarProduto();
    buscarCategorias();
  }, [produtos.length]);

  async function buscarProduto() {
    try {
      await buscar("/produtos", setProdutos, {
        headers: {
          Authorization: usuario?.token,
        },
      });
    } catch (error: any) {
      console.log(error);
    }
  }

  async function buscarCategorias() {
    try {
      await buscar(`/categorias`, setCategorias, {
        headers: {
          Authorization: usuario?.token,
        },
      });
    } catch (error: any) {
      toast.error("Erro ao carregar categorias.");
    }
  }

    useEffect(() => {
       if (usuario?.token === "") {
         toast.info("Você precisa estar logado");
         navigate("/");
       }
     }, [usuario?.token]);

      const produtosFiltrados = produtos.filter((p) => {
        const matchNome = p.nome.toLowerCase().includes(filtro.toLowerCase());
        const matchCategoria =
          categoria === "Todas" || p.categoria?.nome === categoria;
        return matchNome && matchCategoria;
      });

  return (
    <section className="min-h-screen bg-[#E0F2FE] flex flex-col">
      <header className="flex justify-end items-center p-6">
        <Link
          to="/cadastrarproduto"
          className="bg-[#334155] text-white px-6 py-3 rounded-xl shadow-md 
                     hover:bg-[#1E293B] transition font-semibold tracking-wide"
        >
          + Novo Produto
        </Link>
      </header>
      <header className="text-center py-6">
        <h1 className="text-3xl font-bold text-[#334155]">Nossos Produtos</h1>
        <p className="text-[#475569]">
          Encontre o plano de seguro de vida ideal para você e sua família
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-3 px-6 mb-10">
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2 
                     focus:ring-2 focus:ring-[#334155] outline-none"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded-xl px-4 py-2 
                     focus:ring-2 focus:ring-[#334155] outline-none"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((categoria) => (
            <option key={categoria}>{categoria}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {produtosFiltrados.map((produto) => (
          <CardProduto key={produto.id} produto={produto} />
        ))}
      </div>

      {produtosFiltrados.length === 0 && (
        <p className="text-center text-[#64748B] italic mt-12">
          Nenhum produto encontrado.
        </p>
      )}

      <footer className="text-center mt-12 py-10 border-t border-gray-300 bg-white rounded-t-2xl shadow-inner">
        <p className="text-[#334155] font-medium mb-2">
          Precisa de ajuda para escolher?
        </p>
        <p className="text-[#64748B] mb-4">
          Nossa equipe especializada está pronta para ajudar você a encontrar o
          plano perfeito
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#334155] text-white px-6 py-2 rounded-xl hover:bg-[#1E293B] transition">
            Agendar Consulta
          </button>
          <button className="bg-[#E0F2FE] text-[#334155] px-6 py-2 rounded-xl border border-[#334155] hover:bg-[#bae6fd] transition">
            Chat Online
          </button>
        </div>
      </footer>
    </section>
  );
}

export default ListarProduto;
