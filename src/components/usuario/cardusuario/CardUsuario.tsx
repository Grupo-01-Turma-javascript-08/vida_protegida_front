import type Usuario from "../../../models/Usuario"


function CardUsuario() {

    interface CardUsuarioProps {
        usuario: Usuario;
    }

    function CardUsuario({ usuario }: CardUsuarioProps) {
        
    }

  return (
    <div>CardUsuario</div>
  )
}

export default CardUsuario