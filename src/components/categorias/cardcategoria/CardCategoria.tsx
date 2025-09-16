import React from 'react';

interface Produto {
  id: number;
  nome: string;
}

interface CardCategoriaProps {
  nome: string;
  descricao: string;
  ativa: boolean;
  produtos: Produto[];
  totalProdutos: number;
  dataCriacao: string;
  icone: React.ReactNode;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({
  nome,
  descricao,
  ativa,
  produtos,
  totalProdutos,
  dataCriacao,
  icone
}) => {
  const [expandido, setExpandido] = React.useState(false);

  return (
    <div
      style={{
        border: '2px solid #81d4fa',
        borderRadius: 18,
        background: '#fff',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: expandido ? '0 4px 16px #29b6f6' : '0 2px 8px #0001',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s'
      }}
      onClick={() => setExpandido(e => !e)}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
        <div style={{
          background: '#1976d2',
          color: '#fff',
          borderRadius: 12,
          width: 48,
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          marginRight: 16
        }}>
          {icone}
        </div>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: 22, fontWeight: 600, color: '#263238' }}>{nome}</span>
          <span style={{
            background: '#e0f7fa',
            color: '#00b894',
            borderRadius: 8,
            padding: '2px 12px',
            fontWeight: 500,
            marginLeft: 12
          }}>
            {ativa ? 'Ativo' : 'Inativo'}
          </span>
          <span style={{
            background: '#e3f2fd',
            color: '#1976d2',
            borderRadius: 8,
            padding: '2px 12px',
            fontWeight: 500,
            marginLeft: 8
          }}>
            {totalProdutos} produto(s)
          </span>
        </div>
        <div style={{ marginLeft: 16, color: '#b0bec5', fontSize: 28 }}>
          {expandido ? '▲' : '▼'}
        </div>
      </div>
      <div style={{ color: '#78909c', marginBottom: 16 }}>{descricao}</div>
      {expandido && (
        <>
          <hr style={{ border: 'none', borderTop: '1px solid #e3f2fd', margin: '16px 0' }} />
          <div style={{ display: 'flex', gap: 32 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, color: '#263238', marginBottom: 8 }}>
                <span style={{ marginRight: 8, color: '#1976d2' }}>📄</span>
                Produtos Disponíveis
              </div>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                {produtos.map(prod => (
                  <li key={prod.id} style={{ color: '#1976d2', marginBottom: 4 }}>
                    {prod.nome}
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
                <b>Criada em:</b> {dataCriacao}
              </div>
              <div style={{ color: '#263238', marginBottom: 4 }}>
                <b>Status:</b> {ativa ? 'Ativa' : 'Inativa'}
              </div>
              <div style={{ color: '#263238' }}>
                <b>Total de produtos:</b> {totalProdutos}
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
  );
};

export default CardCategoria;