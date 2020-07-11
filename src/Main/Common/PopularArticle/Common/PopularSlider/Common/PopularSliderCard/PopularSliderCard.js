import React from "react"
import "./popularslidercard.css"

function PopularSliderCard(props){

        return(

            <div className="main-mini-card">

                <article className="mini-card module module-article article" id="mini-post-314496">
                    <header className="mini-article-card-header">
                        <div className="mini-article-card-title">
                            <div className="mini-article-subhead">
                                Article
                                <time datetime={props.date}>
                                {props.date} </time>
                            </div>
                            <h2>
                                <a href="https://css-tricks.com/in-defense-of-a-fussy-website/" className="article-card-header read-article">
                                {props.title} </a>
                            </h2>
                        </div>
                    </header>
                    <div className="mini-article-meta">
                        <div className="mini-article-byline">
                            <div className="author-avatar">
                                <a className="author-name" href="https://css-tricks.com/author/sdrasner/">
                                <div className="image-author">   
                                    <img alt="" src={props.photo} className="avatar avatar-80" height="80" width="80"/> 
                                </div>
                                </a>
                            </div>
                            <div className="name">
                                <div className="name-prefix">
                                   Author
                                </div>
                                <a className="author-name" href="https://css-tricks.com/author/sdrasner/">
                                {props.author} </a>
                            </div>
                        </div>
                        <div className="tags">
                            <a href="https://css-tricks.com/tag/care/" rel="tag">care</a>
                            <a href="https://css-tricks.com/tag/intention/" rel="tag">intention</a>
                            <br/>
                            <br/>
                            <a href="https://css-tricks.com/tag/portfolio/" rel="tag">portfolio</a> 
                            <a href="https://css-tricks.com/tag/ux/" rel="tag">ux</a> 
                        </div>
                    </div>
                </article>
            </div>



        )

}


export default PopularSliderCard