import './navbar.css'
import { Cart } from '../cartwidget/CartWidget'

export function NavBar() {

    return (
        <header>
            <Cart />

            <nav>
                <h1><em>Treasure</em></h1>
                <ul>
                    <li><a href="">Camisetas</a></li>
                    <li><a href="">Buzos</a></li>
                    <li><a href="">Pantalones</a></li>
                    <li><a href="">Shorts</a></li>
                </ul>
                <a className= "carrito" href="">🛒</a>
            </nav>
        </header>
    )
}