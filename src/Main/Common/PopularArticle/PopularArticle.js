import React from "react"
import PopularHeader from "./Common/PopularHeader/PopularHeader"
import PopularSlider from "./Common/PopularSlider/PopularSlider"

import "./populararticle.css"


function PopularArticle(){

        return(

            <div className="popular-article">

                <PopularHeader />
                <PopularSlider />
            
            
            </div>

        )


}

export default PopularArticle