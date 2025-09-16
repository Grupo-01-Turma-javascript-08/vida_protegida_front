import React, { useState } from 'react';

// Exemplo de dados (substitua pelo seu backend ou contexto)
const usuarios = [
  {
    id: 1,
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 99999-9999',
    ativo: true,
    funcao: 'Cliente',
    apolices: 2,
    dataCadastro: '14/01/2024'
  },
  {
    id: 2,
    nome: 'Maria Santos',
    email: 'maria@email.com',
    telefone: '(11) 88888-8888',
    ativo: true,
    funcao: 'Cliente',
    apolices: 1,
    dataCadastro: '19/02/2024'
  }
];

const totalUsuarios = usuarios.length;
const usuariosAtivos = usuarios.filter(u => u.ativo).length;
const totalCorretores = usuarios.filter(u => u.funcao === 'Corretor').length;
const totalApolices = usuarios.reduce((acc, u) => acc + u.apolices, 0);

const UsersPage: React.FC = () => {
  const [busca, setBusca] = useState('');
  const [filtroFuncao, setFiltroFuncao] = useState('Todas');
  const [filtroStatus, setFiltroStatus] = useState('Todos');

  const usuariosFiltrados = usuarios.filter(u => {
    const buscaValida =
      u.nome.toLowerCase().includes(busca.toLowerCase()) ||
      u.email.toLowerCase().includes(busca.toLowerCase());
    const funcaoValida =
      filtroFuncao === 'Todas' || u.funcao === filtroFuncao;
    const statusValido =
      filtroStatus === 'Todos' || (filtroStatus === 'Ativo' ? u.ativo : !u.ativo);
    return buscaValida && funcaoValida && statusValido;
  });

  return (
    <div style={{ background: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
          <h1 style={{ color: '#263238', flex: 1 }}>Gerenciar Usuários</h1>
          <button style={{
            background: '#29b6f6',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <span role="img" aria-label="user">👤</span> Novo Usuário
          </button>
        </div>
        <p style={{ color: '#546e7a' }}>
          Gerencie clientes, corretores e administradores do sistema
        </p>
        <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
          <div style={{
            flex: 1,
            background: '#f8fbff',
            borderRadius: 16,
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px #0001'
          }}>
            <div style={{ fontSize: 28, color: '#29b6f6', fontWeight: 500 }}>{totalUsuarios}</div>
            <div style={{ color: '#78909c', marginTop: 8 }}>Total de Usuários</div>
          </div>
          <div style={{
            flex: 1,
            background: '#f8fbff',
            borderRadius: 16,
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px #0001'
          }}>
            <div style={{ fontSize: 28, color: '#00b894', fontWeight: 500 }}>{usuariosAtivos}</div>
            <div style={{ color: '#78909c', marginTop: 8 }}>Usuários Ativos</div>
          </div>
          <div style={{
            flex: 1,
            background: '#f8fbff',
            borderRadius: 16,
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px #0001'
          }}>
            <div style={{ fontSize: 28, color: '#a259e6', fontWeight: 500 }}>{totalCorretores}</div>
            <div style={{ color: '#78909c', marginTop: 8 }}>Corretores</div>
          </div>
          <div style={{
            flex: 1,
            background: '#f8fbff',
            borderRadius: 16,
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 2px 8px #0001'
          }}>
            <div style={{ fontSize: 28, color: '#ff9800', fontWeight: 500 }}>{totalApolices}</div>
            <div style={{ color: '#78909c', marginTop: 8 }}>Apólices Ativas</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 32 }}>
          <input
            type="text"
            placeholder="Buscar por nome ou email..."
            value={busca}
            onChange={e => setBusca(e.target.value)}
            style={{
              flex: 2,
              padding: '12px',
              borderRadius: 8,
              border: '1px solid #b0bec5',
              fontSize: 16
            }}
          />
          <select
            value={filtroFuncao}
            onChange={e => setFiltroFuncao(e.target.value)}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: 8,
              border: '1px solid #b0bec5',
              fontSize: 16
            }}
          >
            <option>Todas as funções</option>
            <option>Cliente</option>
            <option>Corretor</option>
            <option>Administrador</option>
          </select>
          <select
            value={filtroStatus}
            onChange={e => setFiltroStatus(e.target.value)}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: 8,
              border: '1px solid #b0bec5',
              fontSize: 16
            }}
          >
            <option>Todos os status</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
        </div>
      </div>

      {usuariosFiltrados.map(u => (
        <div
          key={u.id}
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px #0001',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div
            style={{
              background: '#29b6f6',
              color: '#fff',
              borderRadius: '50%',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 600,
              marginRight: 16
            }}
          >
            {u.nome.split(' ').map(n => n[0]).join('').toUpperCase()}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 500, color: '#263238' }}>{u.nome}</div>
            <span style={{
              background: '#e0f7fa',
              color: '#00b894',
              borderRadius: 8,
              padding: '2px 12px',
              fontWeight: 500,
              marginRight: 8,
              marginTop: 4
            }}>
              {u.ativo ? 'Ativo' : 'Inativo'}
            </span>
            <span style={{
              background: '#e3f2fd',
              color: '#1976d2',
              borderRadius: 8,
              padding: '2px 12px',
              fontWeight: 500,
              marginRight: 8
            }}>
              {u.funcao}
            </span>
            <div style={{ color: '#78909c', marginTop: 4 }}>
              <span role="img" aria-label="email">✉️</span> {u.email} &nbsp;
              <span role="img" aria-label="phone">📞</span> {u.telefone} &nbsp;
              <span role="img" aria-label="calendar">📅</span> Desde: {u.dataCadastro} &nbsp;
              <span role="img" aria-label="shield">🛡️</span> {u.apolices} apólice(s)
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              background: '#e3f2fd',
              color: '#29b6f6',
              border: 'none',
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 20
            }}>
              ✏️
            </button>
            <button style={{
              background: '#fff',
              color: '#e53935',
              border: '2px solid #e53935',
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 20
            }}>
              🗑️
            </button>
            <button style={{
              background: '#fff',
              color: '#263238',
              border: 'none',
              borderRadius: 8,
              padding: '8px 12px',
              cursor: 'pointer',
              fontSize: 20
            }}>
              ⋮
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
