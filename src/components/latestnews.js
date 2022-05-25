import React from "react";
import { Carousel } from "react-bootstrap";
class latestnews extends React.Component {
    state = {  } 
    render() { 
        return (
          <>
          <div style={{height:"50px"}}></div>
          <h4 style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white"}}>Must Read</h4>
            <div style={{width:"100%", height:"800px", marginTop:"17px"}}>
               
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="c1.png"
      alt="First slide"
    />
    {/* <Carousel.Caption>
      <h3>New Rumours and leaks About Next Gen Assassin's Creed Game has Been Discussed</h3>
      
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="c2.png"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="c3.png"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
            </div>
            
            </>
        );
    }
}
 
export default latestnews;