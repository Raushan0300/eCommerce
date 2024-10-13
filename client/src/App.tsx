import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import AllProductsPage from './pages/AllProductsPage'
import SingleProductPage from './pages/SingleProductPage'
import Cart from './pages/Cart'

function App() {

  return (
    <div className='p-5'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/products' element={<AllProductsPage />} />
      <Route path='/item' element={<SingleProductPage />} />
      <Route path='/cart' element={<Cart />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
