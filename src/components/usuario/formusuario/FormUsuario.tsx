import React, { useState } from 'react';

interface FormUsuarioProps {
  onSubmit: (name: string, email: string, password: string, birthDate?: string) => void;
}

const FormUsuario: React.FC<FormUsuarioProps> = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    birthDate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form.name, form.email, form.password, form.birthDate);
    setForm({ name: '', email: '', password: '', birthDate: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Nome"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="E-mail"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="password"
        type="password"
        placeholder="Senha"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        name="birthDate"
        type="date"
        placeholder="Data de Nascimento"
        value={form.birthDate}
        onChange={handleChange}
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default FormUsuario;