import React from "react"
import "./gridarticleprofile.css"

function GridArticleProfile(){

        return(

            <div className="grid-article-profile">

                <div className="author-image">

                    <a href="https://css-tricks.com/author/michael-buchmiller/">
                        
                        <img alt="" className="small-image" src="https://secure.gravatar.com/avatar/9e8b9ad4b3be1ca09fd1697a52b00df6?s=80&d=retro&r=pg"/> 
                    
                    </a>


                </div>
                <div className="author-name-small">

                    <div class="author-name-prefix">
                        Author
                        <br></br>
                        <a class="author-name" href="https://css-tricks.com/author/michael-buchmiller/">Kirstein</a>
                    </div>
                </div>



            </div>   



        )

}

export default GridArticleProfile