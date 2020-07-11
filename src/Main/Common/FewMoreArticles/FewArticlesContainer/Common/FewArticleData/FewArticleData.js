import React from "react"
import "./fewarticledata.css"
import Photo from "./Common/Photo/Photo"
import Name from "./Common/Name/Name"
import Comments from "./Common/Comments/Comments"

function FewArticleData(props){

        return(

            <div className="few-article-data">

                 <Photo photo={props.photo} />
                 <Name author={props.author}/>
                 <Comments />


            </div>



        )


}

export default FewArticleData