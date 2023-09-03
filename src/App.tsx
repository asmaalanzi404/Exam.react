import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element="/home"></Route>
       <Route path='Signin' element="/Signin"></Route>
       <Route path='login' element="/login"></Route> 
      </Routes>
    </div>
  )
}

export default App
