import React from "react"
import "./name.css"

function Name(props){

        return(

            <div className="name">

                <div class="name-prefix">
                        Author
                </div>
                <a className="author-name" href="https://css-tricks.com/author/chriscoyier/">
                    {props.author}
                </a>


            </div>



        )


}

export default Name