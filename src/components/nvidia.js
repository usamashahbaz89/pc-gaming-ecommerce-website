import React from "react";
import Header from "./Header";
import Basket from "./Basket";
import Nproduct from "./Nproduct";



export default function nvidia(props) {
    
       const{products, onAdd, cartItems}=props; 
       
        return (
            <>
            <h2 style={{fontFamily:"sans-serif", fontWeight:"bold", paddingTop:"2%", paddingBottom:"2%", paddingRight:"50%"}}>NVIDIA GeForce RTX™ Graphics Cards</h2>
              <div style={{backgroundColor:"black", height:"700px", width:"100%"}}>
            
            
                <h2 style={{fontFamily:"sans-serif", color:"#76b900", fontSize:"40px", paddingTop:"2%", fontWeight:"bold"}}>GEFORCE RTX 30 SERIES </h2> 
                <h3 style={{color:"white"}}>THE ULTIMATE PLAY</h3>
                
                <div className="container" style={{display:"inline-flex"}}>
                <p style={{fontFamily:"sans-serif", color:"white",paddingTop:"5%"}}>GeForce RTX™ 30 Series GPUs deliver the ultimate performance for gamers and creators. They’re powered by Ampere—NVIDIA’s 2nd gen RTX architecture—with new RT Cores, Tensor Cores, and streaming multiprocessors for the most realistic ray-traced graphics and cutting-edge AI features.</p>
                </div>
                
                <div style={{display:"inline-block"}}>
                    <img src="nvidia.jpg" style={{height:"400px", width:"100%"}}/>
                </div>
                <div style={{display:"inline-block"}}>
                    <img src="nvidia logo.png" style={{height:"300px", width:"90%"}}/>
                </div>
                
                
</div>
            

            <div >
               <Header name1="NVIDIA" image="nvidia logo.jpg" countCartItems={cartItems.length} /> 
               </div>
            
            <div style={{height:"auto", width:"100%"}}>
                {products.map((product)=>(<Nproduct key={product.id} product={product} onAdd={onAdd}></Nproduct>))}
               
            </div>
            
            
            
                
               
                



        

            </>
        );
    }

 