import React from "react"
import "./fewarticlecontent.css"

function FewArticleContent(props){

    return(

            <div className="few-article-content">


                <p>{props.main}</p>
                <p>{props.gist}</p>
                <a href="https://css-tricks.com/displaying-the-current-step-with-css-counters/" className="read-more">Read article </a>

            </div>



    )

}
export default FewArticleContent