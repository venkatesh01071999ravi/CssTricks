import React from "react"
import "./logo.css"
import logo from "./logo.png"
import logotext from "./logotext.PNG"
function Logo(){

        return(

            <div className="logo">

                   <a href="#">
 
                       <img className ="logo-image" src={logo}/>
                       <img className="logo-text" src={logotext}/>
                   </a>
            
            </div>

        )

}

export default Logo