import { Navigate, useParams } from "react-router-dom"
import { deletar } from "../../../sevices/Service";
import { toast } from "react-toastify";


function DeletarUsuario() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

function DeletarUsuario() {
    try {
        await deletar(`/usuarios/${id}`);
        toast.success("Usuário deletado com sucesso!");
       navigate("/usuarios");
    } catch (error: any) {
        console.log(error);
        toast.error("Erro ao deletar o usuário.");
    }
  return (
    <div>DeletarUsuario</div>
  )
}
}

export default DeletarUsuario