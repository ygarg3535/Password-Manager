
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Manager from './components/Manager'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Manager/>}></Route>
          <Route path='/passwords' element={<Manager/>}></Route>
          <Route path='/edit-password/:id' element={<Manager/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
