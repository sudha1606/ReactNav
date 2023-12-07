import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <>
    
<nav role="navigation" className="primary-navigation">
      <div className="logo">
        <img
          src="https://fielmente.com/wp-content/uploads/2023/06/cropped-fielmente-logo.png"
          alt=""
        />
      </div>
      <div className='nav-link'>
      <ul>
        <li>
          <Link to="/Home" className="nav-link active" aria-current="page">
           <a>Home</a> 
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/About" className="nav-link active" aria-current="page">
            About Us
          </Link>
        
        </li>
        <li>|</li>
        <li>
          <Link to="/Services" className="nav-link active" aria-current="page">
            Services
          </Link>
         
        </li>
        <li>|</li>
        <li>
        <Link to="/Blog" className="nav-link active" aria-current="page">
            Blogs
          </Link>
        </li>
        <li>|</li>
        <li>
        <Link to="/Contact" className="nav-link active" aria-current="page">
            Contact Us
          </Link>
        </li>
        <li>
          <a href="#" className="contact-button">
            <div className="calling-icon">
            <i class='bx bxs-phone' style={{position:"relative",right:"8px",top:"2px"}}></i>
            </div>
            +919501868775
          </a>
        </li>
      </ul>
      </div>
    </nav>
    </> 


  
  )
}

export default Header

