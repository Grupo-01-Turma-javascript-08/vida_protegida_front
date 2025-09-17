import React from 'react';
import CardCategoria from '../cardcategoria/CardCategoria';
import type Categoria from '../../../models/Categoria';

// interface Categoria {
//   id: number;
//   nome: string;
//   descricao: string;
// }

interface ListarCategoriaProps {
  categorias: Categoria[];
}

const ListarCategoria: React.FC<ListarCategoriaProps> = ({ categorias }) => (
  <div>
    {categorias.map(cat => (
      <CardCategoria key={cat.id} categoria={cat} />
    ))}
  </div>
);

export default ListarCategoria;