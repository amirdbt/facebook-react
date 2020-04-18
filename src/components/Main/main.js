import React from 'react';
import images from '../../images/image.js'
import './main.css'


class  SecondPart extends React.Component{


    render(){

        return(

           <div  className="container" style={{marginTop: "80px"}}>
            {/* <p>hellooooooooooooooooooooooooooooo</p> */}
                <div className="row">
                    <div className="col-sm-4 border-Right"> {/* side bar*/}
                        <div class="card mb-2" >
                                <p style={{margin: "5px"}}> <span><img src="https://img.icons8.com/color/48/000000/earth-planet.png" style={{height: "25px"}}/></span>Intro</p>
                            <div class="card-body" style={{padding: "0px", marginBottom: "2px", textAlign: "center"}}>
                                
                                <div style={{display: "flex", justifyContent: "center"}}>
                                 <img src="https://img.icons8.com/ios/50/000000/speech-bubble-with-dots.png" style={{width: "25px"}}/>
                                </div>
                                <div style={{textAlign: "center"}}>
                                 <p style={{fontSize:"11px", color: "grey"}}>Add a short bio to tell people more about yourself.</p>
                                <a href="#">  <p style={{fontSize:"11px", fontStyle: "bold"}}>Add bio</p> </a>
                                <hr/>
                                <ul style={{listStyle: "none",display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                    <li> <span><img src="https://img.icons8.com/wired/64/000000/briefcase.png" style={{width: "29px", paddingRight: "6px"}}/></span>Works at Outsource Global</li>
                                    <li> <span><img src="https://img.icons8.com/pastel-glyph/64/000000/clock.png" style={{width: "29px", paddingRight: "6px"}}/></span>Joined in December 2008</li>
                                    <li> <span><img src="https://img.icons8.com/carbon-copy/64/000000/dog-house.png" style={{width: "29px", paddingRight: "6px"}}/></span>Lives in Abuja</li>
                                    <li> <span><img src="https://img.icons8.com/ios/50/000000/book.png" style={{width: "29px", paddingRight: "6px"}}/></span>Went to University of Calabar</li>  
                                </ul>
                                <button style={{width: "250px"}}>Edit Details</button>
                                <hr/>
                                </div>
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                                 <img src="https://img.icons8.com/cotton/64/000000/star.png" style={{width: "25px"}}/>
                                </div>
                                 <p style={{fontSize:"15px"}}>Showcase what's important to you by adding photos, pages, groups and more to your featured section on your public profile.</p>
                                 <p><a href="#">Add to featured</a></p>   
                                
                            </div>
                        </div>
                        <div className="card mb-2">
                            <div class="card-body" style={{padding: "0px", marginBottom: "2px"}}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <p style={{fontSize: "23px"}}> <span><img src="https://img.icons8.com/color/48/000000/stack-of-photos.png"/></span>photos</p>
                                 <a href="#">   <p style={{paddingRight: "21px", paddingTop: "7px"}}>add photo</p> </a>
                                </div>
                                <div className = "cards">
                                 <img src = "./images/tony.jpg" style={{width: "100px"}} />
                                 <img src = "./images/tony2.jpg" style={{width: "100px"}} />
                                 <img src = "./images/qwazar.jpg" style={{width: "100px"}} />
                                 <img src = "./images/plastic.jpg" style={{width: "100px"}} />
                                </div>
                            </div>
                        </div> 
                        {/* <img src="https://img.icons8.com/ultraviolet/40/000000/user-group-man-woman.png"/> */}
                        <div className="card mb-2">
                            <div class="card-body" style={{padding: "0px", marginBottom: "2px"}}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <p style={{fontSize: "23px"}}> <span><img src="https://img.icons8.com/ultraviolet/40/000000/user-group-man-woman.png"/></span>Friends <span style={{fontSize: "13px", color: "grey"}}>12,345</span></p>
                                 <a href="#">   <p style={{paddingRight: "21px", paddingTop: "7px"}}>Find friend</p> </a>
                                </div>
                            </div>
                            <div className = "cards">
                                <div>
                                 <img src = "./images/tony.jpg" style={{width: "100px"}} /> <br/>
                                 <a href="#"><p style={{paddingLeft: "19px"}}>Tony Nta</p></a>
                                </div>
                                <div>
                                 <img src = "./images/tony2.jpg" style={{width: "100px"}} /> <br/>
                                 <a href="#"><p style={{paddingLeft: "19px"}}>Tony Nta</p></a>
                                </div>
                                <div>
                                 <img src = "./images/tony.jpg" style={{width: "100px"}} /> <br/>
                                 <a href="#"><p style={{paddingLeft: "19px"}}>Tony Nta</p></a>
                                </div>
                                 
                            </div>
                        </div>
                        
                        <div className = "card mb-2">
                            <div class="card-body" style={{padding: "0px", marginBottom: "2px"}}>
                                <div style={{display: "flex", justifyContent: "space-between"}}>
                                    <p style={{fontSize: "23px"}}> <span><img src="https://img.icons8.com/nolan/64/star.png"/></span>Life events</p>
                                 <a href="#">   <p style={{paddingRight: "21px", paddingTop: "7px"}}>create</p> </a>
                                </div>
                            </div>
                        </div>
                        <div className = "card mb-2">
                            <div class="card-body" style={{padding: "0px", marginBottom: "2px"}}>
                                <div style={{display: "flex",flexDirection:"row", flexWrap: "wrap", justifyContent:"space-around"}}>
                                      <p>English(US)</p>
                                      <p>Hausa</p>
                                      <p>Portugese (Brasil)</p>
                                      <p>Francais (France)</p>
                                      <p>Espanol</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    <div className="col-sm-7 border">column
                    
                    </div>
                </div>
           </div>


        )
    }







}

export default SecondPart