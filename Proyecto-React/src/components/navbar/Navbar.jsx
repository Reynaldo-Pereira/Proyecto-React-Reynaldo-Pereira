import { Cart } from '../cartwidget/CartWidget'
import { Link } from 'react-router-dom'

export function NavBar() {

    return (
        <header>

            <Cart />

            <nav>

                <p><em>Treasure</em></p>

                <div>
                    <Link to={'/'}>INICIO</Link>
                    <Link to={'/zapatillas'}>ZAPATILLAS</Link>
                    <Link to={'/camisetas'}>CAMISETAS</Link>
                    <Link to={'/buzos'}>BUZOS</Link>
                    <Link to={'/pantalones'}>PANTALONES</Link>
                    <Link to={'/shorts'}>SHORTS</Link>
                    <Link to={'/carrito'}> <img src="/carrito.jpg" alt="carrito" /> </Link>
                </div>

            </nav>
        </header>
    )
}