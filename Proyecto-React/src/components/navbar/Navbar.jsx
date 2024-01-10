import { Cart } from '../cart/CartWidget'
import { Link } from 'react-router-dom'
import { Logo } from '../logo/Logo'

export function NavBar() {

    return (
        <header>

            <Logo />

            <nav>

                <div>
                    <Link to={'/'}>INICIO</Link>
                    <Link to={'/category/zapatillas'}>ZAPATILLAS</Link>
                    <Link to={'/category/camisetas'}>CAMISETAS</Link>
                    <Link to={'/category/buzos'}>BUZOS</Link>
                    <Link to={'/category/pantalones'}>PANTALONES</Link>
                    <Link to={'/category/shorts'}>SHORTS</Link>
                    <Link to={'/cart'}> <Cart /> </Link>
                </div>

            </nav>
        </header>
    )
}