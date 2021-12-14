 import React from 'react'
import Navbar from './components/Navbar';
 import Home from './components/Home'
 import Login from './components/Login'
 import Signup from './components/Signup'
 import Contact from './components/Contact'
 import About from './components/About'
 import './App.css';
 import {BrowserRouter as  Router,Routes, Route,Link} from 'react-router-dom';
  

 const App = () => {
   return (
     <>
       <Router>
         
      <nav >
        <Link className='li' to="/"> Home </Link>
        <Link className='li' to="/about"> About </Link>
        <Link className='li' to="/login"> Login </Link>
        <Link className='li' to="/contact"> Contact </Link>
        <Link className='li'to="/Signup">  Signup </Link>
      </nav>
    
      <Routes>

    <Route path="/" element={<Home />}/>
    <Route path="/Navbar" element={<Navbar />}/>
  <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    


</Routes>
</Router>
    
     </>
   )
 }
 
 export default App
 