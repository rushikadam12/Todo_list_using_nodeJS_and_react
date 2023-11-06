import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './assets/navbar/Navbar'
import Login from './assets/loginpage/Login'
import Signup from './assets/SignUp/Signup'
function App() {

  return (
    <>
       <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<Signup/>}/>
      </Routes>
       </Router>
    </>
  )
}

export default App
