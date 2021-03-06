import React from "react"
import "./gridarticleprofile.css"

function GridArticleProfile(){

        return(

            <div className="grid-article-profile">

                <div className="author-image">

                    <a href="https://css-tricks.com/author/michael-buchmiller/">
                        
                        <img alt="" className="small-image" src="https://secure.gravatar.com/avatar/59247a80fdf2632dfea43b8824e07cdb?s=80&d=retro&r=pg"/> 
                    
                    </a>


                </div>
                <div className="author-name-small">

                    <div class="author-name-prefix">
                        Author
                        <br></br>
                        <a class="author-name" href="https://css-tricks.com/author/michael-buchmiller/">Rob Perceival </a>
                    </div>
                </div>



            </div>   



        )

}

export default GridArticleProfile