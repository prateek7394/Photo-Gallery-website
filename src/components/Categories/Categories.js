import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Categories = () => {

  return (
    <>
    <div className='categories'>
        <ul>
            <li><Link to={'/'}>All photos</Link></li>
            <li><Link to={'/architecture'}>💰Architecture</Link></li>
            <li><Link to={'/'}>🏔️Kashmir</Link></li>
            <li><Link to={'/'}>⛵️Seaside</Link></li>
            <li><Link to={'/'}>🐟Lake view</Link></li>
            <li><Link to={'/'}>🚩Italy</Link></li>
            <li><Link to={'/'}>🚩China</Link></li>
            <li><Link to={'/'}>🚩Argentina</Link></li>
        </ul>
        <button className='btn2'>+New Category</button>
    </div>
    </>
  )
}

export default Categories;