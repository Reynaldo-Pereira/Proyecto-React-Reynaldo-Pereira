import './navbar.css'
import { Cart } from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'

export function NavBar() {

    return (
        <header>
            <Cart />

            <nav>
                <h1><em>Treasure</em></h1>

                <div>
                    <Link to={'/'}>Inicio</Link>
                    <Link to={'/zapatillas'}>Zapatillas</Link>
                    <Link to={'/camisetas'}>Camisetas</Link>
                    <Link to={'/buzos'}>Buzos</Link>
                    <Link to={'/pantalones'}>Pantalones</Link>
                    <Link to={'/shorts'}>Shorts</Link>
                </div>

                <Link  to={'/carrito'}>🛒</Link>

            </nav>
        </header>
    )
}