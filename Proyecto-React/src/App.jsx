import { NavBar } from './components/navbar/Navbar.jsx'
import { ItemListHome } from './itemsListContainer/ItemListHome.jsx'
import { ItemListContainer } from './itemsListContainer/ItemListContainer.jsx'
import { ItemDetailContainer } from './itemsListContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/scss/style.scss'

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element= { <ItemListHome /> } />
        <Route path='/category/:categoryId' element= { <ItemListContainer /> } />
        <Route path='/item/:itemId' element= { <ItemDetailContainer /> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
