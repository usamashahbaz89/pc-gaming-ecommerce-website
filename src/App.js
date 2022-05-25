import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Nvidia from './components/nvidia';
import Amd from './components/amd';
import nvidiaproducts from './nvidiaproducts';
import './index.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Basket from './components/Basket';
import amdproducts from './amdproducts';
import Registration from './components/Registeration';
import About from './components/about';




function App() {

  const {products}= nvidiaproducts;
  const {productss}= amdproducts;
  const [cartItems,setCartItems]= useState( [] );

  const onAdd =(product) =>{  
    const exist = cartItems.find((x) => x.id === product.id );   // check by id if product exists 
    // if exit then increase quantity of that product
    if (exist){  
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty+1} : x  ));
            }
     else{
       setCartItems( [...cartItems, {...product, qty:1} ]);
                      
                          }

          };

   const onRemove=(product) =>{
     const exist = cartItems.find((x) => x.id === product.id );  // check by id if product exists
     // if exist and quantity is exactly 1
     if (exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id));
     }
     else{
             // else if quantity exists more than 1 then decrease the quantity
      setCartItems(cartItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty-1} : x  ));
     }
   }       
  

           return (
    <div className="App">
    
  
   <Navbar/>



  
      <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/nvidia" element={<Nvidia  onAdd={onAdd} products={products} cartItems={cartItems}/>}/>
      {/* <Route path="/nvidia" element={<Basket cartItems={cartItems}/>}/> */}
      <Route path="/amd" element={<Amd onAdd={onAdd} productss={productss} cartItems={cartItems}/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      <Basket  onAdd={onAdd} onRemove={onRemove}  style={{marginBottom:"50px"}}cartItems={cartItems}/>
      
      
      



  <div style={{marginTop:"100px"}}>
 <Footer/>
 </div>
  </div>  
     
     
    
    
    
    
     
    
      
      
    
   
    
    
    
  );
}

export default App;
