import React from 'react';

interface DeletarCategoriaProps {
  onDelete: () => void;
}

const DeletarCategoria: React.FC<DeletarCategoriaProps> = ({ onDelete }) => (
  <button onClick={onDelete}>Deletar Categoria</button>
);

export default DeletarCategoria;