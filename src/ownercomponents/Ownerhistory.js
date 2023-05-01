import React from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { BiSearchAlt2 } from 'react-icons/bi'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import { icons } from 'react-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import user from './user.png'

const Ownerhistory = () => {

  const columns = [
    {
      name: 'Customer',
      selector: row => row.Name,
      sortable: true
    },
    {
      name: "Model Number",
      selector: row => row.ModelNumber,
      sortable: true
    },
    {
      name: "Model Name",
      selector: row => row.ModelName,
      sortable: true
    },
    {
      name: "Rating",
      selector: row => row.rating,
      sortable: true
    },
    {
      name: "Feedback",
      selector: row => row.Feedback,
      sortable: true
    }
  ];

  const data = [
    {
      id:1,
      ModelNumber:'2023001',
      ModelName:'Audi A4',
      Name:'sanjay',
      rating:"4.85",
      Feedback:"Good"
    },
    {
      id:2,
      ModelNumber:'2023003',
      ModelName:'Hyndai',
      Name:'Sai',
      rating:"4.7",
      Feedback:"Not Bad"
    },
    {
      id:3,
      ModelNumber:'2023004',
      ModelName:'KIA',
      Name:'Raaman',
      rating:"4.95",
      Feedback:"Good"
    },
    {
      id:4,
      ModelNumber:'2023005',
      ModelName:'Scropio',
      Name:'Nithya',
      rating:"4.65",
      Feedback:"Good"
    }
  ];

  const [records, setRecords] = useState(data);
  function handleFilter(event) {
    const newData = data.filter(row => {
      return row.Name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecords(newData)
  }

  return (
    <div className='container-fluid'>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={user} style={{width:"30px"}} />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/Ownerhome'></Link>
            <Nav.Link><Link to='/Ownerhome'  ><li>Home</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerstatus'  ><li>View Status</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerhistory'  ><li>View History</li></Link></Nav.Link>
            <Nav.Link><Link to='/Ownerpayment'><li>Payment</li></Link></Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link><Link to='/Logout'><li>Logout</li></Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        <div className='row'>
        <h2 style={{textAlign:"center" , fontWeight:"bold"}}>Previous Booking</h2>
      </div>
      <div className='row'>
        <div className='col-md-12 form-group'>
          <div class="input-group">
            <div class="input-group-addon" style={{ fontSize: "25px" }}>
              <BiSearchAlt2 />
            </div>
            <input type="text" placeholder="Search" class="form-control" onChange={handleFilter} />
          </div>
        </div>
      </div>

      <div className='row'>
        <DataTable columns={columns}
          data={records}
          fixedHeader
        ></DataTable>
      </div>

    </div>
  )
}

export default Ownerhistory;