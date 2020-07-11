import React from "react"
import "./gridarticleprofile.css"

function GridArticleProfile(){

        return(

            <div className="grid-article-profile">

                <div className="author-image">

                    <a href="https://css-tricks.com/author/michael-buchmiller/">
                        
                        <img alt="" className="small-image" src="https://secure.gravatar.com/avatar/2291c4b1b89602a7a5295997a1725aac?s=80&d=retro&r=pg"/> 
                    
                    </a>


                </div>
                <div className="author-name-small">

                    <div class="author-name-prefix">
                        Author
                        <br></br>
                        <a class="author-name" href="https://css-tricks.com/author/michael-buchmiller/">Maddy</a>
                    </div>
                </div>



            </div>   



        )

}

export default GridArticleProfile