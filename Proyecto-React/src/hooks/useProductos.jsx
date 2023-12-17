import { useEffect, useState } from "react"
import { pedirDatos } from "../components/js/util"

const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((data) => {
                setProductos(data)
            })
            .finally(() => setLoading( false ))
        }, [])

    return {
        productos,
        loading
    }    
}

export default useProductos