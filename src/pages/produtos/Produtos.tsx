import React, { useState } from 'react';

// Exemplo de dados (substitua pelo seu backend ou contexto)
const produtos = [
  {
    id: 1,
    nome: 'VidaSegura Básico',
    descricao: 'Cobertura essencial para proteção de vida.',
    categoria: 'Seguros Individuais',
    ativo: true,
    cor: '#1976d2',
    icone: '🛡️',
    dataCriacao: '01/01/2023'
  },
  {
    id: 2,
    nome: 'VidaSegura Premium',
    descricao: 'Cobertura completa e benefícios exclusivos.',
    categoria: 'Seguros Individuais',
    ativo: true,
    cor: '#1976d2',
    icone: '⭐',
    dataCriacao: '01/01/2023'
  },
  {
    id: 3,
    nome: 'VidaSegura Empresarial',
    descricao: 'Proteção para empresas e funcionários.',
    categoria: 'Seguros Empresariais',
    ativo: true,
    cor: '#a259e6',
    icone: '🏢',
    dataCriacao: '31/01/2023'
  }
];

const ProdutosPage: React.FC = () => {
  const [expandido, setExpandido] = useState<number | null>(null);

  return (
    <div style={{ background: '#e3f2fd', minHeight: '100vh', padding: '2rem' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ color: '#263238' }}>Produtos de Seguros</h1>
        <p style={{ color: '#546e7a' }}>
          Veja os produtos disponíveis e escolha o melhor para sua necessidade.
        </p>
      </div>

      {produtos.map(prod => (
        <div
          key={prod.id}
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
                background: prod.cor,
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
              {prod.icone}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 500, color: '#263238' }}>{prod.nome}</div>
              <div style={{ color: '#78909c', marginTop: 4 }}>{prod.descricao}</div>
              <div style={{ color: '#1976d2', marginTop: 4, fontWeight: 500 }}>
                Categoria: {prod.categoria}
              </div>
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
                {prod.ativo ? 'Ativo' : 'Inativo'}
              </span>
            </div>
            <div
              style={{ marginLeft: 16, color: '#b0bec5', fontSize: 28, cursor: 'pointer' }}
              onClick={() => setExpandido(expandido === prod.id ? null : prod.id)}
            >
              {expandido === prod.id ? '▲' : '▼'}
            </div>
          </div>
          {expandido === prod.id && (
            <>
              <hr style={{ border: 'none', borderTop: '1px solid #e3f2fd', margin: '16px 0' }} />
              <div style={{ display: 'flex', gap: 32 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, color: '#263238', marginBottom: 8 }}>
                    <span style={{ marginRight: 8, color: '#1976d2' }}>📅</span>
                    Informações do Produto
                  </div>
                  <div style={{ color: '#263238', marginBottom: 4 }}>
                    <b>Criado em:</b> {prod.dataCriacao}
                  </div>
                  <div style={{ color: '#263238', marginBottom: 4 }}>
                    <b>Status:</b> {prod.ativo ? 'Ativo' : 'Inativo'}
                  </div>
                  <div style={{ color: '#263238' }}>
                    <b>Categoria:</b> {prod.categoria}
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

export default ProdutosPage;
