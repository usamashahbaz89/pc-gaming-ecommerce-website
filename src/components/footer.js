import React from "react";
import {NavLink} from 'react-router-dom';

class footer extends React.Component {
    state = {  } 
    render() { 
        return (
           <>
         
          <div style={{height:"100%"}}>

          </div>
          
           <footer style={{height:"200px", width:"auto", backgroundColor:"#222222", borderTopColor:"white"}}>
           <div style={{height:"50px", backgroundColor:"#222222"}}> </div>
    
<div style={{display:"inline-block", marginRight:"200px"}}>
    <ul class="nav justify-content-center">
<li className="nav-item"> <a class="nav-link text-white active" href="#"><NavLink to ="/about" style={{ textDecoration: 'none', color:"white", fontFamily:"sans-serif" }}>About Us</NavLink></a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#">Privacy Policy</a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#"><NavLink to ="/register" style={{ textDecoration: 'none', color:"white", fontFamily:"sans-serif" }}>Gaming Contest</NavLink></a> </li>
<li className="nav-item"> <a class="nav-link text-white active" href="#">Contact Us</a> </li>
</ul>

<div style={{height:"30px"}}></div>
<p className="copyright-text" style={{color:"grey"}}>Copyright © 2022 <a href="#">PC Gaming</a>. All Rights Reserved.</p>

    </div> 
     <div style={{display:"inline", float:"left"}} >
        <img src="site main logo footer.png" style={{maxHeight:"9rem", paddingLeft:"30px"}} />
        </div>

            </footer>
           
            </>
        );
    }
}
 
export default footer;