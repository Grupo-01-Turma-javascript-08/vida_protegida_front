import React from 'react';

interface UsuarioProps {
  id: string;
  name: string;
  email: string;
  birthDate?: string;
  role: 'admin' | 'user';
}

const CardUsuario: React.FC<UsuarioProps> = ({ id, name, email, birthDate, role }) => (
  <div>
    <h3>{name}</h3>
    <p>Email: {email}</p>
    {birthDate && <p>Nascimento: {birthDate}</p>}
    <p>Tipo: {role}</p>
    <small>ID: {id}</small>
  </div>
);

export default CardUsuario;