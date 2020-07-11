import React from "react"
import "./gridarticleprofile.css"

function GridArticleProfile(){

        return(

            <div className="grid-article-profile">

                <div className="author-image">

                    <a href="https://css-tricks.com/author/michael-buchmiller/">
                        
                        <img alt="" className="small-image" src="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg" srcset="https://secure.gravatar.com/avatar/77c33e66f8541902e876daad45c2915e?s=160&amp;d=retro&amp;r=pg 2x"/> 
                    
                    </a>


                </div>
                <div className="author-name-small">

                    <div class="author-name-prefix">
                        Author
                        <br></br>
                        <a class="author-name" href="https://css-tricks.com/author/michael-buchmiller/">Robin </a>
                    </div>
                </div>



            </div>   



        )

}

export default GridArticleProfile