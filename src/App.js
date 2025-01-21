import React from 'react'
import Header from './components/Header'
// import Counter from './components/Counter'
import "../src/css/Counter.css";
// import { useState } from 'react';
// import Test from './components/Test';
import Home from './components/Home';
import About from './components/About';
import { Routes, Route } from 'react-router-dom';
const App = () => {

  // const [toggle, setToggle] = useState(false);
  return (

    <div className='min'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
