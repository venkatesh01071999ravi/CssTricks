import React from "react"
import "./fewarticleheader.css"

function FewArticleHeader(props){

        return(
            <div>
                <header className="few-article-header">
                    <strong>Fresh Article </strong>
                    <time datetime="2020-07-07">
                    {props.date} </time>
                </header>
                <h1>
                    <a href="https://css-tricks.com/woocommerce-on-css-tricks/">
                    {props.header} </a>
                </h1>
           </div>


        )




}


export default FewArticleHeader