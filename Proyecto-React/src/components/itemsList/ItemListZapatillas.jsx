import { Items } from './ItemList.jsx'
import useProductos from '../../hooks/useProductos.jsx'
import { zapatillas } from '../js/zapatillas.js'

export const CardsZapatillas = () => {

    const { productos, loading } = useProductos(zapatillas)

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