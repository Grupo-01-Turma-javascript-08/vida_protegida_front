import React, { useState } from 'react';

interface FormCategoriaProps {
  onSubmit: (nome: string, descricao: string) => void;
}

const FormCategoria: React.FC<FormCategoriaProps> = ({ onSubmit }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(nome, descricao);
    setNome('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome da categoria"
        value={nome}
        onChange={e => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormCategoria;