import React from "react"
import "./mainheader.css"

function MainArticleHeader(){

        return(
            <div>
                <header className="first-article-header">
                    <strong>Fresh Article </strong>
                    <time datetime="2020-07-07">
                    July 7, 2020 </time>
                </header>
                <h1>
                    <a href="https://css-tricks.com/woocommerce-on-css-tricks/">
                    WooCommerce on CSS-Tricks </a>
                </h1>
           </div>


        )




}


export default MainArticleHeader