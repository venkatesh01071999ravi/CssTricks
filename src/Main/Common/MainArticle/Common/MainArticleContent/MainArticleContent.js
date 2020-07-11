import React from "react"
import "./mainarticlecontent.css"

function MainArticleContent(){

    return(

            <div className="main-article-content">


                <p>Say you have five buttons. Each button is a step. If you click on the fourth button, you’re on step 4 of 5, and you want to display that.</p>
                <p>This kind of counting and displaying could be hard-coded, but that’s no fun. JavaScript could do this job as well. But CSS? <em>Hmmmm.</em> Can it? CSS 
                    <a href="https://css-tricks.com/almanac/properties/c/counter-increment/"> has counters</a>
                    , so we can certainly count the number of buttons. But how do we calculate only up to a certain button? Turns out … 
                    
                    <a href="https://css-tricks.com/displaying-the-current-step-with-css-counters/" className="read-more">Read article </a>
                    
                </p> 


            </div>



    )

}
export default MainArticleContent