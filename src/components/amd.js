import React from "react";
import Aproduct from "./Aproduct";
import Header from "./Header";




export default function amd(props) {
    
    const{productss, onAdd, cartItems}=props; 
        return (
            <>
              <h2 style={{fontFamily:"sans-serif", fontWeight:"bold", paddingTop:"2%", paddingBottom:"2%", paddingRight:"55%"}}>AMD Radeon™ RX Graphics Cards</h2>
              <div style={{backgroundColor:"black", height:"700px", width:"100%"}}>
            
            
                <h2 style={{fontFamily:"sans-serif", color:"white", fontSize:"40px", paddingTop:"2%"}}>Performance to Rule the World</h2> 
                
                <div className="container"style={{display:"inline-flex"}}>
                <p style={{fontFamily:"sans-serif", color:"white",paddingTop:"5%"}}>Introducing the AMD Radeon™ RX 6000 Series graphics cards, featuring the breakthrough AMD RDNA™ 2 architecture, engineered to deliver ultra-high performance and visually stunning gaming for all. We’re powering the next generation of gaming.</p>
                </div>
                
                <div style={{display:"inline-block"}}>
                    <img src="amd.jpg" style={{height:"400px", width:"100%"}}/>
                </div>
                <div style={{display:"inline-block"}}>
                    <img src="amd logo.png" style={{height:"300px", width:"90%"}}/>
                </div>
                
                
</div>

<div >
               <Header name2="AMD" image2="amd logo.jpg" countCartItems={cartItems.length} /> 
               </div>
            
            {/* <div style={{height:"15%"}}></div>
            <h4 style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white"}}>RX 6000 Series</h4>
          <div style={{height:"1%"}}></div> */}
          <div style={{height:"auto", width:"100%"}}>
                {productss.map((product)=>(<Aproduct key={product.id} product={product} onAdd={onAdd}></Aproduct>))}
               
            </div>



        

            </>

        );
    }

 
