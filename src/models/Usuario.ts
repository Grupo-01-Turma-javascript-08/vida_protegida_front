
export default interface Usuario {

    id: number;
    nome: string;
    usuario: string;
    idade: number;
    senha: string;
    foto: string;
    tipo: string;  
     produtos?: Produto[]; 
}