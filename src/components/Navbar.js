import React from 'react';

import {BrowserRouter, Link, NavLink} from 'react-router-dom';

class Navbar extends React.Component {
    state = {};
    render() {
        return (
          
<nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{justifyContent:"space-between", alignItems:"centre", display:"flex", height:"100%"}}>
        <a className="navbar-brand" href="#" style={{fontSize:"35px", paddingLeft:"50px"}}>PC Gaming Builds</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"  >
            <li className="nav-item active" >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"50px" }} ><NavLink to ="/" style={{ textDecoration: 'none', color:"white", fontFamily:"sans-serif" }}>Home</NavLink> <span className="sr-only"></span></a>
            </li>
            <li className="nav-item"   >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"50px"}}><NavLink to ="/nvidia" style={{ textDecoration: 'none', color:"white", fontFamily:"sans-serif" }}>NVIDIA Cards</NavLink></a>
            </li>
            <li className="nav-item"   >
              <a className="nav-link" href="#" style={{fontSize:"22px", paddingRight:"150px"}}><NavLink to ="/amd" style={{ textDecoration: 'none', color:"white", fontFamily:"sans-serif" }}>AMD Cards</NavLink></a>
            </li>
      
            
          </ul>
          <img src='site main logo.png' style={{ paddingRight:"5%"}}/>
          
        </div>
      </nav>
        
        );
    }
}

export default Navbar;
