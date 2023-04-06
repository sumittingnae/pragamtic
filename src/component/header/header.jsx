import React from "react";
import { NavDropdown } from "react-bootstrap";
import Menu from '../../component/Menu/Menus';

import { Link } from "react-router-dom";
import './header.scss';


function header(){
    return(
        <>
      
          <section className=" navbar navbar-expand-lg navbar-light bg-danger ">
          <Link to='/'>
            <img src="/logow2.png" 
            alt="" 
            className='ml-5 logo d-flex' />
        </Link>
            <Link to='/' className="logo">
              <img src="/logot.png" alt=""  className='ml-5 logo d-flex'/>
            </Link>

            <div className='menu'>
              {/* <Link to='/' className="home">Home</Link> */}
              <NavDropdown title="Home" id="basic-nav-dropdown" className="home">
              <NavDropdown.Item href="#our" id="drop">Our Service</NavDropdown.Item>
              <NavDropdown.Item href="#client" id="drop">
                Our Client              
              </NavDropdown.Item>
              <NavDropdown.Item href="#" id="drop">Something</NavDropdown.Item>
              
            </NavDropdown>
              <Link to='/about'className="home">About</Link>
              <Link to='/career'className="home">Career</Link>
              <Link to='/idea'className="home">Idea!</Link>
              
               
            </div> 
            <Menu/>
            
          
           
        </section>
      
        </>
           
    )
}
export default header;