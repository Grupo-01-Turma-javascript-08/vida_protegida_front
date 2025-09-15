import React from 'react';
import CardCategoria from '../cardcategoria/CardCategoria';

interface Categoria {
  id: number;
  nome: string;
  descricao: string;
}

interface ListarCategoriaProps {
  categorias: Categoria[];
}

const ListarCategoria: React.FC<ListarCategoriaProps> = ({ categorias }) => (
  <div>
    {categorias.map(cat => (
      <CardCategoria key={cat.id} {...cat} />
    ))}
  </div>
);

export default ListarCategoria;