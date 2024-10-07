import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
    <div className='p-5'>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
