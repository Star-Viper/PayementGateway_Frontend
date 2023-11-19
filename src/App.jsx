import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar1 from './Navbar1';
import Home from "./Home"
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Industries from './Industries';
import Resources from './Resources';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar1 />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/industries' element={<Industries />} />
        <Route exact path='/resources' element={<Resources />} />
        {/* <Navigate replace to="/" /> */}
      </Routes>

<div>
  <h3>Swift. Simple. Secure</h3>
  <h1>Grow your revenue with Digital Payment Solution </h1>
  <h4>We help bussinesses to grow quickly by accepting the payment method that your costumers prefer across flat and digital currencies</h4>
</div>

    </>
  )
}

export default App;
