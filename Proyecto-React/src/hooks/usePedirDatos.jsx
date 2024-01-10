import { datos } from "../components/js/productos.js"

export const usePedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(datos)
        }, 1000)
    })
}