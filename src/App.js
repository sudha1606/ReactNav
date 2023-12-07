import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog/Blog';





const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path="/" element={<Blog/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/Contact" element={<Contact/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/Blog" element={<Blog/>}></Route>
    </Routes>
    <Footer/>

  </BrowserRouter>
 
  </>
  )
}

export default App
