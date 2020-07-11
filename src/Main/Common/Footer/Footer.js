import React from "react"
import "./footer.css"
import image1 from "./Capture.PNG"
import image2 from "./Capture1.PNG"
import image3 from "./Capture2.PNG"

function Footer(){

        return(

            <div className="footer-down">

                <img className="footer-down-image" src={image1}></img>
                <img className="footer-down-image" src={image2}></img>
                <img className="footer-down-image" src={image3}></img>


            </div>


        )


    }

 export default Footer   