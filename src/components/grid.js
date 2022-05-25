import React from "react";
class grid  extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <div style={{height:"163px"}}></div>
            <h4 style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white"}}>More Stories</h4>
            <div class="container" style={{height:"600px", width:"auto"}}>
                <div class="row">
                   <div className="col-sm-6" style={{height:"400px", backgroundColor:"red"}}>
                      col 1
                   </div>
                   <div className="col-sm-6"  style={{height:"400px", width:"50%", backgroundColor:"green"}}>
                   col 2
                      
                      
                      
                       <div class="row">
                   <div className="col-sm-3" style={{height:"200px", width:"50%",backgroundColor:"orange", marginTop:"176px"}}>
                  col 3
                   </div>
                   <div className="col-sm-3"  style={{height:"200px",  width:"50%", backgroundColor:"yellow", marginTop:"176px"}}>
                   col 4
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </>
                    
        );
    }
}
 
export default grid ;