import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext.jsx'
import { ItemListHome } from './ItemHome/ItemListHome.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { CartView } from './components/CartView/CartView.jsx'
import { Checkout } from './components/Checkout/Checkout.jsx'
import { NavBar } from './components/navbar/Navbar.jsx'
import '../src/scss/style.scss'

function App() {

  return (
    

    <CartContext>
      
      <BrowserRouter>
      
        <NavBar />
      
        <Routes>
          <Route path='/' element= { <ItemListHome /> } />
          <Route path='/marca/:marcaId' element= { <ItemListContainer /> } />
          <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
          <Route path='/cart' element= { <CartView /> } />
          <Route path='/checkout' element= { <Checkout /> } />
        </Routes>

      </BrowserRouter>

    </CartContext>
    
  )
}

export default App
