import type Produto from "./Produto";

export default interface Categoria {
    id: number;
    descricao: string;
    nome: string;
    Produtos?: Produto[];
}


