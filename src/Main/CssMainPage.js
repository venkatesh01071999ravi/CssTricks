import React from "react"
import "./cssmainpage.css"
import Header from "../Header/Header"
import {useState} from "react"
import Hidden from "./Common/Hidden/Hidden"
import MainArticle from "./Common/MainArticle/MainArticle"
import PopularArticle from "./Common/PopularArticle/PopularArticle"
import FewMoreArticles from "./Common/FewMoreArticles/FewMoreArticles"
import Grid from "./Common/Grid/Grid"
import News from "./Common/News/News"
import About from "./Common/About/About"
import Footer from "./Common/Footer/Footer"

function CssMainpage(){

        const[hidden,changeHidden] = useState(false)
        const show = ()=>{

           changeHidden(prevHidden => !prevHidden)

        }

        return(

             <div className="main-page">
                 <Header state={show} currState={hidden} />
                 {hidden?<Hidden />:<></>}
                 <div className="main-down-wrap">
                     <main className="main-article">

                        <MainArticle />
                        <PopularArticle />
                        <FewMoreArticles />
                     
                     </main>
                     <Grid />
                     <News />
                     <About />
                     <Footer />

                 </div>
             </div>
        )

}

export default CssMainpage
