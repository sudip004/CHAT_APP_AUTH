import {Routes,Route} from 'react-router-dom'
import { Toaster} from 'react-hot-toast'
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {


  return (
    <div className='p-4 h-screen flex items-center justify-center' id="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
   
  )
}

export default App
