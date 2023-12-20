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
                    <Link to={'/category/zapatillas'}>ZAPATILLAS</Link>
                    <Link to={'/category/camisetas'}>CAMISETAS</Link>
                    <Link to={'/category/buzos'}>BUZOS</Link>
                    <Link to={'/category/pantalones'}>PANTALONES</Link>
                    <Link to={'/category/shorts'}>SHORTS</Link>
                    <Link to={'/category/carrito'}> <img src="/carrito.jpg" alt="carrito" /> </Link>
                </div>

            </nav>
        </header>
    )
}