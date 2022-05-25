import React from "react";
class latestnewsgrid extends React.Component {
    state = {  } 
    render() { 
        return (
         <>
                <div style={{ height: "auto", width: "auto", marginTop: "5%"}}>
                <h4 style={{ fontFamily: "sans-serif", color: "white", backgroundColor: "black" }}>Most Watched Stories</h4> 
                </div>
                <div class="container" style={{ height: "400px", width: "auto", marginTop: "20px" }}>
                    <div class="row" style={{ height: "100%", width: "auto" }}>
                        <div class="col-sm-6" style={{ height: "100%" }}>
                            <img src="outlast.jpg" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div class="col-sm-6" style={{ height: "100%" }}>
                            <img src="froza horizon.jpg" style={{ height: "50%", width: "100%" }} />
                            <div class="row" style={{ height: "100%", width: "auto" }}>
                                <div class="col-sm-3" style={{ height: "50%", width: "50%" }}>
                                    <img src="wdlegion.jpg" style={{ height: "100%", width: "100%" }} />
                                </div>
                                <div class="col-sm-3" style={{ height: "50%", width: "50%" }}>
                                    <img src="sp2.jpg" style={{ height: "100%", width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                
         
         </>

        );
    }
}
 
export default latestnewsgrid;