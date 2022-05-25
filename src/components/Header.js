import React from "react";

export default function Header(props){
    const {countCartItems}=props;
    return(
    <div>
        <header style={{justifyContent:"space-between", display:"flex", backgroundColor:"black", borderRadius:"0.5rem",height:"100px", width:"100%", marginTop:"2%"}}>
            <div>
                <a href="#/" style={{textDecoration:"none"}}><h4 style={{color:"white", fontFamily:"sans-serif", paddingTop:"25px", paddingLeft:"20px"}}>Shop {props.name1} {props.name2} Cards Now</h4></a>
            </div>
            
                
            
                
            
                {/* <img src={props.image} style={{height:"6rem", paddingRight:"180px"}}/> 
               <img src={props.image2} style={{height:"5rem", paddingLeft:"100px"}}/>  */}
               <div> <a href="#/" style={{textDecoration:"none"}}><h4  style={{color:"white", fontFamily:"sans-serif", paddingTop:"25px", paddingRight:"50px"}}>
                   
                   
                   Cart{' '}
                   {countCartItems?(
                      <button className="badge" style={{backgroundColor:"red", borderColor:"black"}}> {countCartItems} </button>
                   ):(' ') }
                   </h4> 
                   
                   
                   </a>
            </div>
            {/* <div>
                <a href="#/" style={{textDecoration:"none"}}><h4  style={{color:"white", fontFamily:"sans-serif", paddingTop:"25px", paddingRight:"50px"}}>SignIn</h4> </a>
            </div> */}
            
        </header>
        
    </div>
    


    )
}