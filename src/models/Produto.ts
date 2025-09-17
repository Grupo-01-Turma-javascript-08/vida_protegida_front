import type Categoria from "./Categoria";
import type Usuario from "./Usuario";

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    criadoEm: Date;
    atualizadoEm: Date;
    categoria?: Categoria;
    usuario?: Usuario[];
}





