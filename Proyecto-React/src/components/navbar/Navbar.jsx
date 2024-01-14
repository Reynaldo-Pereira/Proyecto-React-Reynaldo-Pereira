import { Cart } from '../CartView/CartWidget'
import { Link } from 'react-router-dom'
import { Logo } from '../Logo/Logo'

export function NavBar() {

    return (
        <header>

            <Logo />

            <nav>

                <div>
                    <Link to={'/'}>INICIO</Link>
                    <Link to={'/marca/jordan'}>JORDAN</Link>
                    <Link to={'/marca/under'}>UNDER ARMOUR</Link>
                    <Link to={'/marca/puma'}>PUMA</Link>
                    <Link to={'/marca/nike'}>NIKE</Link>
                    <Link to={'/marca/adidas'}>ADIDAS</Link>
                    <Link to={'/cart'}> <Cart /> </Link>
                </div>

            </nav>
        </header>
    )
}