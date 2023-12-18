import { Items } from './ItemList.jsx'
import useProductos from '../../hooks/useProductos.jsx'
import { buzos } from '../js/buzos.js'

export const CardsBuzos = () => {

    const { productos, loading } = useProductos(buzos)

    return (
        <>

            {
                loading
                ? <h2>cargando...</h2>
                : <div className='cards'>
                    <Items marca= 'Adidas' datos={productos} />
                </div>
            }

        </>
    )
}