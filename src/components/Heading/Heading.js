import React from 'react';
import './Heading.css';
import { BsSearch } from "react-icons/bs";

const Heading = () => {
  return (
    <>
    <div className='heading'>
        <h1>Library</h1>
        <div className='search'>
        <input type='text' placeholder={`Search all photos`} />
        <BsSearch style={{padding: '3px 10px' , color: '#6F7378', height: '25px', width: '25px'}}/>
        </div>
        
    </div>
    </>
  )
}

export default Heading