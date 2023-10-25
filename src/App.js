import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Landingpage from './Pages/Landingpage';
import {Route,Routes} from 'react-router-dom';
import Viewpage from './Pages/Viewpage';
import Sell from './Pages/Sell';
import  Buy from './Pages/Buy';
import Bookpage from './Pages/Bookpage';
import Editpage from './Pages/Editpage';
function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/Home' element={<Home/>} />
        <Route path='/Bookpage' element={<Bookpage/>} />
        <Route path='/Viewpage' element={<Viewpage/>} />
        <Route path='/Sell' element={<Sell/>} />
        <Route path='/Buy' element={<Buy/>} />
        <Route path='/Edit/:id' element={<Editpage/>} />
      </Routes>
      <Footer/>
    </>
  )
}



 
export default App