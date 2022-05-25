import React from "react";

export default function Basket(props){
   const {cartItems, onAdd, onRemove}=props;
   const itemsPrice = cartItems.reduce((a, c) => a +c.price * c.qty, 0);
   const taxPrice = itemsPrice * 0.10;
   const shippingPrice = itemsPrice > 2000? 0: 50;
   const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
    <div className="container" style={{backgroundColor:"black", height:"400px", width:"50%", marginTop:"100px", borderRadius:"10rem"}}>
        <h3 style={{color:"white", display:"inline-block"}}>Cart</h3>
        <img style={{height:"3rem", display:"inline-block"}} src="cart.png"/>
        <div style={{marginTop:"30px"}}>
            {cartItems.length===0 && <div><p style={{color:"white"}}>Cart is empty, what are you waiting for? Buy your favourite Graphics card now!</p></div>}
            
        </div>
      {cartItems.map(   (item) => (<div key={item.id}>  

         <div className="container" style={{display:"inline", fontWeight:"bold", color:"white"}}>{item.name}</div>

         <div className="container" style={{display:"inline"}}> 
         
                 <button style={{backgroundColor:"skyblue"}} onClick={()=>onAdd(item)}>+</button>
                <button  style={{backgroundColor:"red"}} onClick={()=>onRemove(item)}>-</button>
               
          </div>
      
          <div className="container" style={{display:"inline", fontWeight:"bold", color:"white"}}> {item.qty} x ${item.price.toFixed(2)} </div>

          </div>
      
      
       
        
        
        ))}
        { cartItems.length !==0 && (
           <>
           <hr></hr>
           <div className="container" style={{marginLeft:"200px"}}>
           <div className="row">
               <div className="col-3" style={{ color:"white"}}>Items Price:</div>
               <div className="col-1 text-left" style={{ color:"white"}}>${itemsPrice.toFixed(2)}</div>
           </div>

           <div className="row">
               <div className="col-3" style={{ color:"white"}}>Tax Price:</div>
               <div className="col-1 text-left" style={{color:"white"}}>${taxPrice.toFixed(2)}</div>
           </div>

           <div className="row">
               <div className="col-3" style={{ color:"white"}}>Shipping Price:</div>
               <div className="col-1 text-right" style={{ color:"white"}}>${shippingPrice.toFixed(2)}</div>
           </div>

           <div className="row">
               <div className="col-3" style={{fontWeight:"bold", color:"white"}}><strong>Total Price:</strong></div>
               <div className="col-1 text-right" style={{fontWeight:"bold", color:"white"}}><strong>${totalPrice.toFixed(2)}</strong></div>
           </div>
           </div>
           <hr></hr>
           <div className="row">
              <div className="col-2"> <button onClick={()=> alert('Implement checkout')} style={{backgroundColor:"black", color:"white", marginLeft:"290px", borderColor:"white", borderStyle:"solid", height:"40px", borderRadius:"10px"}}>Checkout</button></div>
           </div>

           
           </>

        )


        }
</div> 
    


    )
}