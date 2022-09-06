import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Heading from './components/Heading/Heading';
import Categories from './components/Categories/Categories';
import Home from './components/Layout/Home';

const App = () => {
  return (
    <div>
        <Navbar/>
        <Heading />
        <Categories/>
        <Home />
    </div>
  )
}

export default App