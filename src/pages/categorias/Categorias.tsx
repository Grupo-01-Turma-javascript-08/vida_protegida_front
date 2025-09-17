import React, { useState } from 'react';

// Exemplo de dados (substitua pelo seu backend ou contexto)
const categorias = [
  {
    id: 1,
    nome: 'Seguros Individuais',
    descricao: 'Proteção personalizada para você',
    ativa: true,
    produtos: 4,
    cor: '#1976d2',
    icone: '👤',
    produtosDisponiveis: ['VidaSegura Básico', 'VidaSegura Premium'],
    dataCriacao: '31/12/2022'
  },
  {
    id: 2,
    nome: 'Seguros Familiares',
    descricao: 'Cobertura completa para toda a família',
    ativa: true,
    produtos: 2,
    cor: '#00b894',
    icone: '👥',
    produtosDisponiveis: [],
    dataCriacao: '01/01/2023'
  },
  {
    id: 3,
    nome: 'Seguros Empresariais',
    descricao: 'Soluções corporativas e benefícios para funcionários',
    ativa: true,
    produtos: 1,
    cor: '#a259e6', // Roxo
    icone: '🏢',
    produtosDisponiveis: ['VidaSegura Empresarial'],
    dataCriacao: '31/01/2023'
  }
];

const totalCategorias = categorias.length;
const categoriasAtivas = categorias.filter(c => c.ativa).length;
const totalProdutos = categorias.reduce((acc, c) => acc + c.produtos, 0);
const produtosAtivos = totalProdutos; // Supondo todos ativos

const resumo = [
  { label: 'Total de Categorias', value: totalCategorias, icon: '🛡️' },
  { label: 'Categorias Ativas', value: categoriasAtivas, icon: '👥' },
  { label: 'Total de Produtos', value: totalProdutos, icon: '⭐' },
  { label: 'Produtos Ativos', value: produtosAtivos, icon: '📅' }
];

const CategoriesPage: React.FC = () => {
  const [expandido, setExpandido] = useState<number | null>(null);

  return (
    <div style={{ background: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ color: '#263238' }}>Categorias de Seguros</h1>
        <p style={{ color: '#546e7a' }}>
          Explore nossas diferentes categorias de seguros de vida e encontre a proteção ideal
        </p>
        <div style={{ display: 'flex', gap: 24, marginTop: 32 }}>
          {resumo.map((item, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                background: '#f8fbff',
                borderRadius: 16,
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 2px 8px #0001'
              }}
            >
              <div style={{ fontSize: 32, color: '#29b6f6', marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontSize: 28, color: '#29b6f6', fontWeight: 500 }}>{item.value}</div>
              <div style={{ color: '#78909c', marginTop: 8 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {categorias.map(cat => (
        <div
          key={cat.id}
          style={{
            background: '#fff',
            borderRadius: 16,
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 8px #0001',
            cursor: 'pointer',
            transition: 'box-shadow 0.2s'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                background: cat.cor,
                color: '#fff',
                borderRadius: 12,
                width: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 28,
                marginRight: 16
              }}
            >
              {cat.icone}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: '#263238' }}>{cat.nome}</div>
              <div style={{ color: '#78909c', marginTop: 4 }}>{cat.descricao}</div>
            </div>
            <div style={{ marginLeft: 16 }}>
              <span
                style={{
                  background: '#e0f7fa',
                  color: '#00b894',
                  borderRadius: 8,
                  padding: '2px 12px',
                  fontWeight: 500,
                  marginRight: 8
                }}
              >
                {cat.ativa ? 'Ativo' : 'Inativo'}
              </span>
              <span
                style={{
                  background: '#e3f2fd',
                  color: '#1976d2',
                  borderRadius: 8,
                  padding: '2px 12px',
                  fontWeight: 500
                }}
              >
                {cat.produtos} produto(s)
              </span>
            </div>
            <div
              style={{ marginLeft: 16, color: '#b0bec5', fontSize: 28, cursor: 'pointer' }}
              onClick={() => setExpandido(expandido === cat.id ? null : cat.id)}
            >
              {expandido === cat.id ? '▲' : '▼'}
            </div>
          </div>
          {expandido === cat.id && (
            <>
              <hr style={{ border: 'none', borderTop: '1px solid #e3f2fd', margin: '16px 0' }} />
              <div style={{ display: 'flex', gap: 32 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#263238', marginBottom: 8 }}>
                    <span style={{ marginRight: 8, color: '#1976d2' }}>📄</span>
                    Produtos Disponíveis
                  </div>
                  <ul style={{ paddingLeft: 20, margin: 0 }}>
                    {cat.produtosDisponiveis.map((prod, idx) => (
                      <li key={idx} style={{ color: '#1976d2', marginBottom: 4 }}>
                        {prod}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#263238', marginBottom: 8 }}>
                    <span style={{ marginRight: 8, color: '#1976d2' }}>📅</span>
                    Informações da Categoria
                  </div>
                  <div style={{ color: '#263238', marginBottom: 4 }}>
                    <b>Criada em:</b> {cat.dataCriacao}
                  </div>
                  <div style={{ color: '#263238', marginBottom: 4 }}>
                    <b>Status:</b> {cat.ativa ? 'Ativa' : 'Inativa'}
                  </div>
                  <div style={{ color: '#263238' }}>
                    <b>Total de produtos:</b> {cat.produtos}
                  </div>
                </div>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid #e3f2fd', margin: '16px 0' }} />
              <div style={{ display: 'flex', gap: 16 }}>
                <button style={{
                  background: '#29b6f6',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '10px 24px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Solicitar Informações
                </button>
                <button style={{
                  background: '#fff',
                  color: '#29b6f6',
                  border: '2px solid #29b6f6',
                  borderRadius: 8,
                  padding: '10px 24px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}>
                  Fazer Simulação
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoriesPage;