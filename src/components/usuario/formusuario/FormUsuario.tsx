
import React, { useState } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

interface UserRefProps {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    ativo: boolean;
    funcao: string;
    apolices: number;
    dataCadastro: string;
}

interface FormUsuarioProps {
  onSubmit?: (name: string, email: string, password: string, birthDate?: string) => void;
  onClose?: () => void;
  onSave?: (novoUsuario: UserRefProps) => void;
 usuario?: UserRefProps;
}
const FormUsuario: React.FC<FormUsuarioProps> = ({ onSubmit, onClose, onSave }) => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    telefone: '',
    birthDate: '',
    funcao: 'Cliente',
    status: 'Ativo',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sucesso = await register(form.name, form.email, form.password, form.birthDate);
    if (sucesso) {
      setForm({ name: '', email: '', telefone: '', birthDate: '', funcao: 'Cliente', status: 'Ativo', password: '' });
      if (onSubmit) {
        onSubmit(form.name, form.email, form.password, form.birthDate);
      }
      if (onClose) {
        onClose();
      }
    }
  };

  return (
  <div style={{ width: '100%', maxWidth: 400, minWidth: 280, margin: '0 auto', boxSizing: 'border-box', padding: '1rem', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #0001' }}>
      <h2 style={{ marginBottom: 24, color: '#334155' }}>Novo Usuário</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label htmlFor="name" style={{ fontWeight: 500 }}>Nome completo *</label>
          <input
            name="name"
            type="text"
            placeholder="Nome completo do usuário"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          />
        </div>
        <div>
          <label htmlFor="email" style={{ fontWeight: 500 }}>Email *</label>
          <input
            name="email"
            type="email"
            placeholder="email@exemplo.com"
            value={form.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          />
        </div>
        <div>
          <label htmlFor="telefone" style={{ fontWeight: 500 }}>Telefone</label>
          <input
            name="telefone"
            type="text"
            placeholder="(11) 99999-9999"
            value={form.telefone}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          />
        </div>
        <div>
          <label htmlFor="birthDate" style={{ fontWeight: 500 }}>Data de nascimento</label>
          <input
            name="birthDate"
            type="date"
            placeholder="dd/mm/aaaa"
            value={form.birthDate}
            onChange={handleChange}
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          />
        </div>
        <div>
          <label htmlFor="funcao" style={{ fontWeight: 500 }}>Função *</label>
          <select
            name="funcao"
            value={form.funcao}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          >
            <option>Cliente</option>
            <option>Corretor</option>
            <option>Administrador</option>
          </select>
        </div>
        <div>
          <label htmlFor="status" style={{ fontWeight: 500 }}>Status *</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          >
            <option>Ativo</option>
            <option>Inativo</option>
          </select>
        </div>
        <div>
          <label htmlFor="password" style={{ fontWeight: 500 }}>Senha *</label>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            value={form.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #b0bec5', marginTop: 4 }}
          />
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
          <button
            type="button"
            style={{ flex: 1, background: '#fff', color: '#334155', border: '1px solid #b0bec5', borderRadius: 8, padding: '12px 0', fontWeight: 500, cursor: 'pointer' }}
            onClick={() => navigate(0)}
          >
            Cancelar
          </button>
          <button type="submit" style={{ flex: 1, background: '#29b6f6', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, cursor: 'pointer' }}>
            Criar Usuário
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsuario;

