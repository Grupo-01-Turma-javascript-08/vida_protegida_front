import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContext"; // Ainda não criado
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria[]>([])

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategoria()    
    }, [categoria.length])

    async function buscarCategoria() {
        try {

            setIsLoading(true)

            await buscar('/categorias', setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }finally {
            setIsLoading(false)
        }
    }

    return (
        <>

            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    {(!isLoading && categoria.length === 0) && (
                            <span className="text-3xl text-center my-8">
                                Nenhuma Categoria foi achada!
                            </span>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                categoria.map((categoria) => (
                                    <CardCategoria key={categoria.id} categoria={categoria}/>
                                ))
                            }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategoria;

