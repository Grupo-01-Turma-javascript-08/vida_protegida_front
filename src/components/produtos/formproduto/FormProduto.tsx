
import { useEffect, useState, ChangeEvent, FormEvent, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toast } from "react-toastify";
import type Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContextOnly";
import type Categoria from "../../../models/Categoria";


function FormProduto() {
  const navigate = useNavigate();
  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { id } = useParams<{ id: string }>();

  const { usuario } = useContext(AuthContext);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: usuario?.token,
        },
      });
    } catch (error: any) {
      toast.error("Erro ao carregar produto.");
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
    if (id !== undefined) {
      buscarPorId(id);
      buscarCategorias();
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "categoria") {
      setProduto({
        ...produto,
        categoria: { ...produto?.categoria, nome: e.target.value },
      });
    }

    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: usuario?.token,
          },
        });
        toast.success(" Produto atualizado com sucesso!");
        navigate("/produtos");
      } catch (error: any) {
        console.log(error);
        toast.error(
          "Erro ao atualizar produto: " +
            (error?.response?.data?.message ||
              error.message ||
              "Erro desconhecido")
        );
        console.error(error);
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto, {
          headers: {
            Authorization: usuario?.token,
          },
        });
        toast.success("Produto cadastrado com sucesso!");
        navigate("/produtos");
      } catch (error) {
        toast.error("Erro ao cadastrar Produto.");
      }
    }

    setIsLoading(false);
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-[bg-[#E0F2FE]] to-[bg-[#E0F2FE]] flex items-center justify-center p-6">
      <form
        onSubmit={gerarNovoProduto}
        className="bg-white w-full max-w-lg p-8 rounded-2xl shadow-xl space-y-6 border border-[#334155]/20"
      >
        <h1 className="text-2xl font-extrabold text-[#334155] text-center">
          {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
        </h1>

        <div>
          <label className="block mb-2 text-[#334155] font-semibold">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={produto.nome || ""}
            onChange={atualizarEstado}
            required
            className="w-full border border-[#334155]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#334155] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block mb-2 text-[#334155] font-semibold">
            Descrição
          </label>
          <input
            type="text"
            name="descricao"
            value={produto.descricao || ""}
            onChange={atualizarEstado}
            required
            className="w-full border border-[#334155]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#334155] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block mb-2 text-[#334155] font-semibold">
            Preço
          </label>
          <input
            type="number"
            name="preco"
            value={produto.preco || ""}
            onChange={atualizarEstado}
            required
            className="w-full border border-[#334155]/40 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#334155] focus:border-transparent transition"
          />
        </div>
        <div>
          <label className="block mb-1 text-[#334155]">Categoria</label>
          <select
            name="categoria"
            value={produto.categoria?.id || ""}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              atualizarEstado(e as any)
            }
            required={id === undefined}
            disabled={id !== undefined}
            className={`w-full border border-[#334155] rounded-lg px-3 py-2`}
          >
            <option value="" disabled>
              Selecione categoria
            </option>
            {categorias.map((u) => (
              <option key={u.id} value={u.id}>
                {u.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between items-center gap-4">
          <Link
            to="/produtos"
            className="w-1/2 bg-gray-200 text-[#334155] px-4 py-2 rounded-lg hover:bg-gray-300 transition text-center font-medium"
          >
            Voltar
          </Link>

          <button
            type="submit"
            disabled={isLoading}
            className="w-1/2 bg-[#334155] text-[#fff] px-4 py-2 rounded-lg hover:bg-[#334155] transition flex justify-center items-center font-semibold"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={20} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}

export default FormProduto;