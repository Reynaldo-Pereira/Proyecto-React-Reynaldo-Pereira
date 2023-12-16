import { NavBar } from './components/navbar/Navbar.jsx'
import { Desarrollo } from './components/itemsList/ItemListContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route path='/' element= { <Desarrollo /> } />
        <Route path='/' element= { <Desarrollo /> } />
        <Route path='/' element= { <Desarrollo /> } />

      </Routes>

    </BrowserRouter>
  )
}

export default App
