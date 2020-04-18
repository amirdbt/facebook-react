import React from 'react';
import images from '../../images/image.js'
import './banner.css'

let s1 = images
console.log(images[0].src);

class  Banner extends React.Component{
    // console.log(props.joke);
    render(){

        return(
            <div className="container " style = {{marginTop: "0px", paddingTop: "0px"}}>
                <div className="jumbotron mt-3 banner">
                        <img className = "profilePic " src = {images[0].src} alt = {"me"}/>
                        <div className = "row inner-banner">
                                <p className="col-sm-5">
                                    <span style = {{color: "white", fontSize: "30px", fontWeight: "bold"}}> Tony nta </span>
                                </p>
                                <div className="col-sm-5 row">

                                    <p className= "border-icon">
                                        Update Info <span className="border-icon-span"> 8 </span> 
                                    </p>
                                    <p className= "border-icon">
                                        Activity  <span className="border-icon-span"> 30 + </span>
                                    </p>
                                </div>
                        </div>  
                        <div className="container">
                            <div className = "bottom-row">
                                <a href={"#"}>  <p>Timeline</p> </a>
                               <a href={"#"}> <p>About</p> </a>
                                <p>Freinds <span style={{fontSize: "12px", color: "grey", margin: "5px"}}> 12,345 </span> </p>
                                <p>Photos</p>
                               <a href={"#"}> <p>Archive</p>   </a>
                               <a href={"#"}> <p>More</p>   </a>   
                            </div>
                        </div> 
                </div>
            </div>    
        )
    }

}


export default Banner