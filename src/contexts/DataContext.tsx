/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
// FIXME: Melhorar a persistência dos dados para usar backend futuramente
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

// Definição das interfaces principais usadas no contexto de dados do app
export interface User {
  id: string;
  name: string;
  email: string;
  birthDate?: string;
  phone?: string;
  role: 'admin' | 'user' | 'agent';
  status: 'active' | 'inactive' | 'pending';
  joinDate: string;
  lastLogin: string;
  policies: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  status: 'active' | 'inactive';
  productsCount: number;
  createdAt: string;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  price: string;
  coverage: string;
  features: string[];
  popular: boolean;
  status: 'active' | 'inactive';
  minAge: number;
  maxAge: number;
  createdAt: string;
}

interface DataContextType {
  // Lista de usuários cadastrados e funções para manipulação de usuários
  users: User[];
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  getUserById: (id: string) => User | undefined;

  // Lista de categorias de produtos e funções para manipulação de categorias
  categories: Category[];
  addCategory: (category: Omit<Category, 'id'>) => void;
  updateCategory: (id: string, category: Partial<Category>) => void;
  deleteCategory: (id: string) => void;
  getCategoryById: (id: string) => Category | undefined;

  // Lista de produtos e funções para manipulação de produtos
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProductById: (id: string) => Product | undefined;
  getProductsByCategory: (categoryId: string) => Product[];

  // Indica se alguma operação de dados está em andamento (útil para mostrar loading na UI)
  isLoading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

// Dados simulados para facilitar o desenvolvimento e testes locais.
// No futuro, esses dados podem ser substituídos por uma API real.
const mockUsers: User[] = [
  {
    id: '1',
    name: 'João Silva',
    email: 'joao@email.com',
    birthDate: '1990-05-15',
    phone: '(11) 99999-9999',
    role: 'user',
    status: 'active',
    joinDate: '2024-01-15',
    lastLogin: '2024-09-14',
    policies: 2
  },
  {
    id: '2',
    name: 'Maria Santos',
    email: 'maria@email.com',
    birthDate: '1985-12-20',
    phone: '(11) 88888-8888',
    role: 'user',
    status: 'active',
    joinDate: '2024-02-20',
    lastLogin: '2024-09-13',
    policies: 1
  },
  {
    id: '3',
    name: 'Pedro Oliveira',
    email: 'pedro@email.com',
    birthDate: '1980-08-10',
    phone: '(11) 77777-7777',
    role: 'agent',
    status: 'active',
    joinDate: '2023-12-10',
    lastLogin: '2024-09-15',
    policies: 15
  },
  {
    id: '4',
    name: 'Ana Costa',
    email: 'ana@email.com',
    birthDate: '1995-03-25',
    phone: '(11) 66666-6666',
    role: 'user',
    status: 'inactive',
    joinDate: '2024-03-05',
    lastLogin: '2024-08-20',
    policies: 0
  },
  {
    id: '5',
    name: 'Carlos Lima',
    email: 'carlos@email.com',
    birthDate: '1975-06-01',
    phone: '(11) 55555-5555',
    role: 'admin',
    status: 'active',
    joinDate: '2023-06-01',
    lastLogin: '2024-09-15',
    policies: 8
  }
];

const mockCategories: Category[] = [
  {
    id: 'individual',
    name: 'Seguros Individuais',
    description: 'Proteção personalizada para você',
    icon: 'User',
    color: 'bg-blue-500',
    status: 'active',
    productsCount: 4,
    createdAt: '2023-01-01'
  },
  {
    id: 'familiar',
    name: 'Seguros Familiares',
    description: 'Cobertura completa para toda a família',
    icon: 'Users',
    color: 'bg-green-500',
    status: 'active',
    productsCount: 2,
    createdAt: '2023-01-15'
  },
  {
    id: 'empresarial',
    name: 'Seguros Empresariais',
    description: 'Soluções corporativas e benefícios para funcionários',
    icon: 'Building',
    color: 'bg-purple-500',
    status: 'active',
    productsCount: 1,
    createdAt: '2023-02-01'
  }
];

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'VidaSegura Básico',
    categoryId: 'individual',
    price: 'A partir de R$ 49/mês',
    coverage: 'R$ 100.000',
    features: [
      'Cobertura por morte natural e acidental',
      'Assistência funeral',
      'Suporte 24h',
      'Carência de 24 meses'
    ],
    popular: false,
    status: 'active',
    minAge: 18,
    maxAge: 70,
    createdAt: '2023-01-10'
  },
  {
    id: '2',
    name: 'VidaSegura Premium',
    categoryId: 'individual',
    price: 'A partir de R$ 89/mês',
    coverage: 'R$ 250.000',
    features: [
      'Cobertura por morte natural e acidental',
      'Invalidez permanente total',
      'Assistência funeral',
      'Auxílio educação',
      'Suporte 24h',
      'Carência de 12 meses'
    ],
    popular: true,
    status: 'active',
    minAge: 18,
    maxAge: 70,
    createdAt: '2023-01-15'
  },
  {
    id: '3',
    name: 'VidaSegura Família',
    categoryId: 'familiar',
    price: 'A partir de R$ 149/mês',
    coverage: 'R$ 500.000',
    features: [
      'Cobertura para toda a família',
      'Morte natural e acidental',
      'Invalidez permanente total',
      'Doenças graves',
      'Assistência funeral',
      'Auxílio educação',
      'Renda familiar',
      'Suporte 24h'
    ],
    popular: false,
    status: 'active',
    minAge: 18,
    maxAge: 70,
    createdAt: '2023-01-20'
  },
  {
    id: '4',
    name: 'VidaSegura Empresarial',
    categoryId: 'empresarial',
    price: 'Consulte valores',
    coverage: 'Personalizável',
    features: [
      'Cobertura para funcionários',
      'Planos flexíveis',
      'Gestão online',
      'Relatórios detalhados',
      'Suporte especializado',
      'Descontos por volume'
    ],
    popular: false,
    status: 'active',
    minAge: 18,
    maxAge: 65,
    createdAt: '2023-02-01'
  }
];

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [categories, setCategories] = useState<Category[]>(mockCategories);
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [isLoading, setIsLoading] = useState(false);

  // Carrega dados do localStorage ao montar o componente.
  // Isso garante que, ao recarregar a página, os dados persistam e o usuário não perca informações já cadastradas.
  useEffect(() => {
    const savedUsers = localStorage.getItem('users');
    const savedCategories = localStorage.getItem('categories');
    const savedProducts = localStorage.getItem('products');

    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);

  // Sempre que houver alteração nos dados, salva no localStorage.
  // Assim, mantemos a persistência local sem depender de backend.
  // TODO: Substituir por chamada à API quando backend estiver pronto.
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Funções para criar, atualizar, remover e buscar usuários.
  // (Adicionar validação de dados futuramente para evitar inconsistências)
  const addUser = (user: Omit<User, 'id'>) => {
    const newUser = {
      ...user,
      id: Date.now().toString(),
    };
    setUsers(prev => [...prev, newUser]);
  };

  const updateUser = (id: string, userData: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...userData } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const getUserById = (id: string) => {
    return users.find(user => user.id === id);
  };

  // Funções para criar, atualizar, remover e buscar categorias.
  // (Melhorar para evitar categorias duplicadas e garantir unicidade)
  const addCategory = (category: Omit<Category, 'id'>) => {
    const newCategory = {
      ...category,
      id: Date.now().toString(),
    };
    setCategories(prev => [...prev, newCategory]);
  };

  const updateCategory = (id: string, categoryData: Partial<Category>) => {
    setCategories(prev => prev.map(category => 
      category.id === id ? { ...category, ...categoryData } : category
    ));
  };

  const deleteCategory = (id: string) => {
  // Também remove produtos desta categoria
    setProducts(prev => prev.filter(product => product.categoryId !== id));
    setCategories(prev => prev.filter(category => category.id !== id));
  };

  const getCategoryById = (id: string) => {
    return categories.find(category => category.id === id);
  };

  // Funções para criar, atualizar, remover e buscar produtos.
  // TODO: Adicionar verificação de estoque e regras de negócio para produtos
  const addProduct = (product: Omit<Product, 'id'>) => {
    // Adiciona um novo produto à lista.
    // Ainda não há validação dos campos obrigatórios, isso pode ser melhorado depois.
    const newProduct = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts(prev => [...prev, newProduct]);
    
  // Atualizar quantidade de produtos da categoria
    setCategories(prev => prev.map(category => 
      category.id === product.categoryId 
        ? { ...category, productsCount: category.productsCount + 1 }
        : category
    ));
  };

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...productData } : product
    ));
  };

  const deleteProduct = (id: string) => {
    // Remove o produto da lista e atualiza a contagem de produtos na categoria correspondente.
    const product = products.find(p => p.id === id);
    if (product) {
      setProducts(prev => prev.filter(product => product.id !== id));
      
  // Atualizar quantidade de produtos da categoria
      setCategories(prev => prev.map(category => 
        category.id === product.categoryId 
          ? { ...category, productsCount: Math.max(0, category.productsCount - 1) }
          : category
      ));
    }
  };

  const getProductById = (id: string) => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (categoryId: string) => {
    return products.filter(product => product.categoryId === categoryId);
  };

  // TODO: Adicionar filtros e paginação nos dados se necessário para melhorar performance e usabilidade
  const value = {
  // Usuários
    users,
    addUser,
    updateUser,
    deleteUser,
    getUserById,

  // Categorias
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    getCategoryById,

  // Produtos
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById,
    getProductsByCategory,

  // Carregamento
    isLoading
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};