import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type Usuario from "../../../models/Usuario";
import { buscar } from "../../../sevices/Service";


function ListaUsuario() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [usuario, setUsuario] = useState<Usuario[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarUsuario()
    }, [usuario.length])

    async function buscarUsuario() {
        try {
            setIsLoading(true)

            await buscar('/usuario', setUsuario, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <div>ListaUsuario</div>
  )
}

export default ListaUsuario