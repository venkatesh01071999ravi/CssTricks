import React from "react"
import GridArticleHeader from "./Common/GridArticleHeader/GridArticleHeader"
import GridArticleContent from "./Common/GridArticleContent/GridArticleContent"
import GridArticleProfile from "./Common/GridArticleProfile/GridArticleProfile"
import "./article1.css"

function Article1(){

        return(

            <div className="article-1">

                <GridArticleHeader />
                <GridArticleContent />
                <GridArticleProfile />


            </div>



        )


}   


export default Article1