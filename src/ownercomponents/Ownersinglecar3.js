import React from 'react';
import { Link } from 'react-router-dom';
import car1 from '../images/Hyundai.jpg'
import "./Singlecar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from './user.png'

const Ownnersinglecar3 = () => {

  return (
    <div className='container-fluid'>
      <div className='row mb-3'>
      <div className='col-md-2'></div>
      <div className='col-md-8 car'>
          <img src={car1} className='img-fluid car-img' />
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
       <center><ul>
          <li>Model Number: <span>2023003</span></li>
          <li>Model Name: <span>Hyundai</span></li>
          <li>Miles Driven: <span>4800km</span></li>
          <li>Model Number: <span>123456789</span></li>
          <li>Required documents:
            
              <li>Insurance:</li>
              <li>Population:</li>
            
          </li>
        </ul></center> </div>
      </div>
    </div>
  )
}

export default Ownnersinglecar3;