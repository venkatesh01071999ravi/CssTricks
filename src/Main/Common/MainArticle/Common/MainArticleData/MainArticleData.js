import React from "react"
import "./mainarticledata.css"
import Photo from "./Common/Photo/Photo"
import Name from "./Common/Name/Name"
import Comments from "./Common/Comments/Comments"

function MainArticleData(){

        return(

            <div className="main-article-data">

                 <Photo />
                 <Name />
                 <Comments />


            </div>



        )


}

export default MainArticleData