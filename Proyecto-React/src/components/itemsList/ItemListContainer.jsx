import '../../App.css'
import { Items } from './Items.jsx'

export function Desarrollo() {

    return (
        <>
            <div className='cards'>
                <Items marca= 'Jordan' />
                <Items marca= 'UnderArmour' />
                <Items marca= 'Puma' />
                <Items marca= 'Nike' />
                <Items marca= 'Adidas' />
            </div>
        </>
    )
}