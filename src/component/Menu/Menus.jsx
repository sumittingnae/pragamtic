import React from 'react';
import './Menus.scss';
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Menus (){

    return(
        <>
        
            <div id='menu'>
                <DropdownButton id="dropdown-basic-button item " title="Menu" variant='secondary' >
                <Dropdown.Item ><Link to='/'  id="sub-menu"><span className='fa fa-home'id='fa'></span> Home</Link></Dropdown.Item>
                <Dropdown.Item  ><Link to='/about'id="sub-menu"><span className='fa fa-address-card solid'> </span> About</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/career' id="sub-menu"><span className='fa fa-briefcase'></span> career</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/idea' id="sub-menu"><span className='fa fa-lightbulb solid'></span> Idea!</Link></Dropdown.Item>
                 {/* <Dropdown.Item ><Link to='/'><span className='fa fa-briefcase'></span></Link></Dropdown.Item>  */}
            
             </DropdownButton>
            </div>

             {/* <NavDropdown title="Home" id="basic-nav-dropdown" className="menu">
              <NavDropdown.Item href="#our" id="drop"><Link>home</Link></NavDropdown.Item>
              <NavDropdown.Item href="#client" id="drop">
                Our Client              
              </NavDropdown.Item>
              <NavDropdown.Item href="#" id="drop">Something</NavDropdown.Item>
              
            </NavDropdown> */}
              

        
      
        
        
       
        
        </>

    )

}
export default Menus;
