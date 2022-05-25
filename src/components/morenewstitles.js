import React from 'react'
import N1 from './n1'
import N2 from './n2'
import N3 from './n3'
import N4 from './n4'
import N5 from './n5'
import N6 from './n6'
import N7 from './n7'
import N8 from './n8'


function morenewstitles() {

    const news1 = "Something incredible Has Just Happened In Cyberpunk 2077 Development"
    const news2 = "According To The Rumors GTA VI Location Will Be In Miami Fictional Vice City"
    const news3 = "Hogwarts Legacy finally gets a release window and trailer at Sony's latest State of Play"
    const news4 = "Need for Speed Heat will be EA’s first game with PC, PS4, and Xbox One crossplay"
    const news5 = "Call of Duty 2021 is being developed by Sledgehammer, Activision confirms"
    const news6 = "Battlefield 2042 won’t have voice chat at launch"
    const news7 = "Fortnite Chapter 3 Season 2 removes Building from battle royale"
    const news8 = "Outlast 2 runs at native 4K resolution at 60 FPS on Xbox One X"
    
  return (
    
      <>    
    <div style={{height:"15%"}}></div>
    <h4 style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white"}}>Trending Now</h4>
  <div style={{height:"1%"}}></div>
    <div className="container-fluid" style={{height:"600px", width:"85%"}}>
    <div className="row">
     <div className="col-sm-3 " style={{ height:"300px"}}>
         <img src="cyberpunk.jpg" style={{ height: "70%", width:"100%"}}/>
         <N1 ln1={news1}  />
             </div>
    <div className="col-sm-3" style={{ height:"300px"}}>
        <img src="gta6news.jpg" style={{ height: "70%", width:"100%"}}/>
         <N2 ln2={news2}  />
            </div>

    <div className="col-sm-3" style={{height:"300px"}}>
        <img src="hogwertslegacy.jpg" style={{ height: "70%", width:"100%"}}/>
         <N3 ln3={news3}  />
             </div>

    <div className="col-sm-3" style={{height:"300px"}}>
        <img src="nfs.jpg" style={{ height: "70%", width:"100%"}}/>
        <N4 ln4={news4}  />
            </div>


    <div className="row">
     <div className="col-sm-3 " style={{height:"300px"}}>
        <img src="cod.jpg" style={{ height: "70%", width:"100%"}}/>
        <N5 ln5={news5}  />
             </div>
     <div className="col-sm-3" style={{ height:"300px"}}>
        <img src="bf.jpg" style={{ height: "70%", width:"100%"}}/>
        <N6 ln6={news6}  />
              </div>
    <div className="col-sm-3" style={{ height:"300px"}}>
        <img src="fn.jpg" style={{ height: "70%", width:"100%"}}/>
        <N7 ln7={news7}  />
             </div>
    <div className="col-sm-3" style={{ height:"300px"}}>
        <img src="outlast2.jpg" style={{ height: "70%", width:"100%"}}/>
        <N8 ln8={news8}  />
            </div>
    
   
        </div>
        </div>
        </div>
        
        </>   
    
    
  )
}

export default morenewstitles