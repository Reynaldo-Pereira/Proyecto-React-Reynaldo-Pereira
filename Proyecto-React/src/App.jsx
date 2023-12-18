import { NavBar } from './components/navbar/Navbar.jsx'
import { Home } from './components/itemsList/ItemListContainer.jsx'
import { CardsZapatillas } from './components/itemsList/ItemListZapatillas.jsx'
import { CardsShorts } from './components/itemsList/ItemListShorts.jsx'
import { CardsPantalones } from './components/itemsList/ItemListPantalones.jsx'
import { CardsBuzos } from './components/itemsList/ItemListBuzos.jsx'
import { CardsCamisetas } from './components/itemsList/ItemListCamisetas.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../src/scss/style.scss'

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element= { <Home /> } />
        <Route path='/zapatillas' element= { <CardsZapatillas /> } />
        <Route path='/camisetas' element= { <CardsCamisetas /> } />
        <Route path='/buzos' element= { <CardsBuzos /> } />
        <Route path='/pantalones' element= { <CardsPantalones /> } />
        <Route path='/shorts' element= { <CardsShorts /> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
