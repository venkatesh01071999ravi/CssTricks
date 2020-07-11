import React from "react"
import "./photo.css"

    function Photo(props){
        
        console.log(props.photo)
        return(

            <div className="photo">
              
                <a href="https://css-tricks.com/author/chriscoyier/">
                    <img alt="Avatar of Chris Coyier" src={props.photo} srcSet={props.photo}  height="80" width="80" /> 
                </a>
            </div>

        )

    }



export default Photo