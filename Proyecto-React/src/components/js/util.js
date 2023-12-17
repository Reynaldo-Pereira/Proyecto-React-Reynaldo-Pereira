import { data } from "./productos"

export const pedirDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}