import React from 'react';
import './index.css';

 export default function Nproduct(props) {
  const {product, onAdd}=props;
    return (
    <div className="card" style={{display:"inline-block", marginTop:"100px", marginRight:"100px", width:"18rem", borderRadius:"10px"}}>
      <img className='card-img-top' src={product.image} alt={product.name}/>
      <div className="card-body">
      <h5 style={{fontFamily:"sans-serif"}}>{product.name}</h5>
      <div><h5>${product.price}</h5></div>
      <button onClick={() =>onAdd(product)} class="btn btn-primary" style={{backgroundColor:"#76b900", borderColor:"white"}} >Add To Cart</button>
      
      <div> 
      </div>
      </div>
      
      </div>
      
  );
}

