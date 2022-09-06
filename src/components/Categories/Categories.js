import React from 'react';
import './Categories.css';



const Categories = (props) => {

  return (
    <>
    <div className='categories'>
        <ul>
            <li><a href='/'>All photos</a></li>
            <li><a href='/'>💰Architecture</a></li>
            <li><a href='/'>🏔️Kashmir</a></li>
            <li><a href='/'>⛵️Seaside</a></li>
            <li><a href='/'>🐟Lake view</a></li>
            <li><a href='/'>🚩Italy</a></li>
            <li><a href='/'>🚩China</a></li>
            <li><a href='/'>🚩Argentina</a></li>
        </ul>
        <button className='btn2'>+New Category</button>
    </div>
    </>
  )
}

export default Categories;