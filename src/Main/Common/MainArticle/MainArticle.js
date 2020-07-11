import React from "react"
import "./mainarticle.css"
import MainArticleHeader from "./Common/Header/MainArticleHeader"
import MainArticleData from "./Common/MainArticleData/MainArticleData"
import MainArticleContent from "./Common/MainArticleContent/MainArticleContent"
import MainArticleFooter from "./Common/MainArticleFooter/MainArticleFooter"
function MainArticle(){

        return(

            <article className="first-article">

                 <div className="hero-article">

                        <MainArticleHeader />
                        <MainArticleData />
                        <MainArticleContent />
                        <MainArticleFooter />


                 </div>



            </article>



        )


}

export default MainArticle