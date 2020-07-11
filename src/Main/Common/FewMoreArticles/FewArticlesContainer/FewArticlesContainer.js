import React from "react"
import FewArticleHeader from "./Common/FewArticleHeader/FewArticleHeader"
import FewArticleData from "./Common/FewArticleData/FewArticleData"
import FewArticleContent from "./Common/FewArticleContent/FewArticleContent"
import FewArticleFooter from "./Common/FewArticleFooter/FewArticleFooter"
import "./fewarticlescontainer.css"


function FewArticlesContainer(){

    return(

            <div className="few-container">

                <article className="first-article-few">

                    <div className="hero-article">

                        <FewArticleHeader date="July 7,2020" header="WooCommerce on CSS-Tricks" /> 
                        <FewArticleData author="Chris Coyier" photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg" />
                        <FewArticleContent main="Some developers just prefer working in React. I don’t blame them really, because I like React too. Maybe that’s what they learned first. I’ve been using it long enough there is just some comfort to it. But mostly it is the strong component model that I like. There is just something nice about a codebase where things are constructed from components with clear jobs and responsibilities. " gist="It’s not terribly common to see WordPress sites built with React though. The standard …"/> 
                        <FewArticleFooter components1="list" components2="learning"/>
         

                    </div>
                
                </article> 
                <article className="second-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 8,2020" header="A little bit of plain Javascript can do a lot" />
                        <FewArticleData author="Robin Rendle" photo="https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg"  />
                        <FewArticleContent main="I’ve been doing a bit of refactoring this week at Sentry and I noticed that we didn’t have a generic List component that we could use across projects and features. So, I started one, but here’s the rub: we style things at Sentry using Emotion, which I have only passing experience with and is described in the docs as…" gist=' "[…] a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to" ' />
                        <FewArticleFooter components1="components" components2="Emotion" />



                    </div>

                </article>
                <article className="third-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 10,2020" header="How to delete all node_modules directories from your computer
" />
                        <FewArticleData author="Mathew Strom" photo="https://secure.gravatar.com/avatar/2291c4b1b89602a7a5295997a1725aac?s=80&d=retro&r=pg" />
                        <FewArticleContent main="I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things." gist="Well, I recently rolled up my sleeves and got my hands dirty. I wanted to build and deploy a simple read-only API, and goshdarnit, I wasn’t …" />
                        <FewArticleFooter components1="API" components2="Tools" />



                    </div>

                </article> 
                <article className="second-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 8,2020" header="A little bit of plain Javascript can do a lot" />
                        <FewArticleData author="Robin Rendle" photo="https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg"  />
                        <FewArticleContent main="I’ve been doing a bit of refactoring this week at Sentry and I noticed that we didn’t have a generic List component that we could use across projects and features. So, I started one, but here’s the rub: we style things at Sentry using Emotion, which I have only passing experience with and is described in the docs as…" gist=' "[…] a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to" ' />
                        <FewArticleFooter components1="components" components2="Emotion" />



                    </div>

                </article>
                <article className="third-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 10,2020" header="How to delete all node_modules directories from your computer" />
                        <FewArticleData author="Mathew Strom" photo="https://secure.gravatar.com/avatar/2291c4b1b89602a7a5295997a1725aac?s=80&d=retro&r=pg" />
                        <FewArticleContent main="I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things." gist="Well, I recently rolled up my sleeves and got my hands dirty. I wanted to build and deploy a simple read-only API, and goshdarnit, I wasn’t …" />
                        <FewArticleFooter components1="API" components2="Tools" />



                    </div>

                </article> 
                <article className="first-article-few">

                    <div className="hero-article">

                        <FewArticleHeader date="July 7,2020" header="WooCommerce on CSS-Tricks" /> 
                        <FewArticleData author="Chris Coyier" photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg" />
                        <FewArticleContent main="Some developers just prefer working in React. I don’t blame them really, because I like React too. Maybe that’s what they learned first. I’ve been using it long enough there is just some comfort to it. But mostly it is the strong component model that I like. There is just something nice about a codebase where things are constructed from components with clear jobs and responsibilities. " gist="It’s not terribly common to see WordPress sites built with React though. The standard …"/> 
                        <FewArticleFooter components1="list" components2="learning"/>
         

                    </div>
                
                </article> 
                <article className="second-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 8,2020" header="A little bit of plain Javascript can do a lot" />
                        <FewArticleData author="Robin Rendle" photo="https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg"  />
                        <FewArticleContent main="I’ve been doing a bit of refactoring this week at Sentry and I noticed that we didn’t have a generic List component that we could use across projects and features. So, I started one, but here’s the rub: we style things at Sentry using Emotion, which I have only passing experience with and is described in the docs as…" gist=' "[…] a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to" ' />
                        <FewArticleFooter components1="components" components2="Emotion" />



                    </div>

                </article>
                <article className="third-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 10,2020" header="How to delete all node_modules directories from your computer
                    " />
                        <FewArticleData author="Mathew Strom" photo="https://secure.gravatar.com/avatar/2291c4b1b89602a7a5295997a1725aac?s=80&d=retro&r=pg" />
                        <FewArticleContent main="I’ve always wanted to build an API, but was scared away by just how complicated things looked. I’d read a lot of tutorials that start with “first, install this library and this library and this library” without explaining why that was important. I’m kind of a Luddite when it comes to these things." gist="Well, I recently rolled up my sleeves and got my hands dirty. I wanted to build and deploy a simple read-only API, and goshdarnit, I wasn’t …" />
                        <FewArticleFooter components1="API" components2="Tools" />



                    </div>
                </article>  
                <article className="second-article-few">

                    <div className="hero-article">

                        <FewArticleHeader  date="July 8,2020" header="A little bit of plain Javascript can do a lot" />
                        <FewArticleData author="Robin Rendle" photo="https://css-tricks.com/wp-content/uploads/2019/01/me-black-white-80x80.jpg"  />
                        <FewArticleContent main="I’ve been doing a bit of refactoring this week at Sentry and I noticed that we didn’t have a generic List component that we could use across projects and features. So, I started one, but here’s the rub: we style things at Sentry using Emotion, which I have only passing experience with and is described in the docs as…" gist=' "[…] a library designed for writing css styles with JavaScript. It provides powerful and predictable style composition in addition to" ' />
                        <FewArticleFooter components1="components" components2="Emotion" />



                    </div>

                </article> 

                <a href="/archives/page/2/" class="button button-full-width">Keep browsing in the archives</a>            

            </div>



    )





}

export default FewArticlesContainer