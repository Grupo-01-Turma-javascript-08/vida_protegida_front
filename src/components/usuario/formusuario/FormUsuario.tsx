import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom"
import type Usuario from "../../../models/Usuario";
import { atualizar, buscar, cadastrar } from "../../../sevices/Service";
import { toast } from "react-toastify";


function FormUsuario() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario);
        } catch (error: any) {
            toast.error("Erro ao carregar usuário.");
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    }

    async function gerarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/usuario`, usuario, setUsuario);
                toast.success("Usuário atualizado com sucesso!");
                navigate("/usuario");
            } catch (error: any) {
                console.log(error);
                toast.error("Erro ao atualizar usuário: " + (error?.response?.data?.message || error.message || 'Erro desconhecido'));
                console.error(error);
            }
        } else {
            try {
                await cadastrar(`/usuarios`, usuario, setUsuario);
                toast.success("Usuário cadastrado com sucesso!");
                navigate("/usuarios");
            } catch (error) {
                toast.error("Erro ao cadastrar usuário.");
            }
        }
    }

    setIsLoading(false)

}
        
    
return (
    <div>FormUsuario</div>
)


export default FormUsuario