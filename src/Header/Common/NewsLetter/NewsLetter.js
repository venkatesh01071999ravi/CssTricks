import React from "react"
import "./news.css"
import news from "./news.png"
function NewsLetter(){

        return(

        <div className="news">

            <a href="#">

                <img className="img-news" src={news} />

            </a>

        </div>


        )


}

export default NewsLetter