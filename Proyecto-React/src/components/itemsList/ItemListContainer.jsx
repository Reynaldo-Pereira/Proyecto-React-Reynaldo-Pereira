import '../../App.css'
import { Items } from './Items.jsx'
import useProductos from '../../hooks/useProductos.jsx'

export function Desarrollo() {

    const { productos } = useProductos()

    return (
        <>
            <div className='cards'>
                <Items marca= 'Jordan' datos={productos} />
                <Items marca= 'UnderArmour' datos={productos} />
                <Items marca= 'Puma' datos={productos} />
                <Items marca= 'Nike' datos={productos} />
                <Items marca= 'Adidas' datos={productos} />
            </div>
        </>
    )
}