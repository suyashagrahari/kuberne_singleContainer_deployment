import React from 'react'
import Signup from './Signup'
import Login from '../src/Login.js'
import "./index.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home.js'
import Dashboard from './Dashboard.js'

const App = () => {
  return (
   <>
<BrowserRouter>
<Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/singin' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
</BrowserRouter>
       


        
     
   </>
  )
}

export default App