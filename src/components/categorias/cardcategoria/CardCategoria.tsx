import React from 'react';

interface CategoriaProps {
  id: number;
  nome: string;
  descricao: string;
}

const CardCategoria: React.FC<CategoriaProps> = ({ id, nome, descricao }) => (
  <div>
    <h3>{nome}</h3>
    <p>{descricao}</p>
    <small>ID: {id}</small>
  </div>
);

export default CardCategoria;