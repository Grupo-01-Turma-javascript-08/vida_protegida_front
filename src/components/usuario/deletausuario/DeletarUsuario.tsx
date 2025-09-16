import React from 'react';

interface DeletarUsuarioProps {
  onDelete: () => void;
}

const DeletarUsuario: React.FC<DeletarUsuarioProps> = ({ onDelete }) => (
  <button onClick={onDelete}>Deletar Usuário</button>
);

export default DeletarUsuario;