import { NavBar } from './components/navbar/Navbar.jsx'
import { ItemListHome } from './itemsListContainer/ItemListHome.jsx'
import { ItemListContainer } from './itemsListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './itemsListContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/scss/style.scss'
import { CartContext } from './context/CartContext.jsx'
import { CartView } from './components/cart/CartView.jsx'

function App() {

  return (

    <CartContext>
      
      <BrowserRouter>
      
        <NavBar />
      
        <Routes>
          <Route path='/' element= { <ItemListHome /> } />
          <Route path='/category/:categoryId' element= { <ItemListContainer /> } />
          <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />
          <Route path='/cart' element= { <CartView /> } />
        </Routes>

      </BrowserRouter>

    </CartContext>
    
  )
}

export default App
