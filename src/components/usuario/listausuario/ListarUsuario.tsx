import React from 'react';
import CardUsuario from '../cardusuario/CardUsuario';

interface Usuario {
  id: string;
  name: string;
  email: string;
  birthDate?: string;
  role: 'admin' | 'user';
}

interface ListarUsuarioProps {
  usuarios: Usuario[];
}

const ListarUsuario: React.FC<ListarUsuarioProps> = ({ usuarios }) => (
  <div>
    {usuarios.map(user => (
      <CardUsuario key={user.id} {...user} />
    ))}
  </div>
);

export default ListarUsuario;