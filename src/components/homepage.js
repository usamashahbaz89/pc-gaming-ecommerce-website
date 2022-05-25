import React from "react";
import Latestnewsgrid from "./latestnewsgrid";
import {Routes, Route} from 'react-router-dom';
import Latestnews from "./latestnews"
import Morenewstitles from "./morenewstitles";


class homepage extends React.Component {
    state = {  } 
    render() { 
        return (
                <>
    
     <Latestnews/>
     {/* <Latestnewsgrid/> */}
     <Morenewstitles/>
     
                
                
                
            
                   
                   
                </>


        );
    }
}
 
export default homepage;