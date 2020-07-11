import React from "react"
import "./fewarticlefooter.css"


function FewArticleFooter(props){

        return(

            <div className="few-article-footer">

        <a className="footer-a" href="https://css-tricks.com/tag/counter-increment/" >{props.components1}</a> 
        <a className="footer-a" href="https://css-tricks.com/tag/counters/" >{props.components2}</a> 

           </div>



        )


}

export default FewArticleFooter