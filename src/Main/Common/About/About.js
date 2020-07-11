import React from "react"
import "./about.css"

function About(){

    return(

        <div className="about">

            <div className="about-founder">

            
                    <p>
                        CSS-Tricks<span>*</span> is created, written by, and maintained by <a href="https://chriscoyier.net">Chris
                        Coyier</a> and <a href="/about/">a team</a> of swell people. The tech stack for this site is fairly <a href="/simple-boring/">boring</a>. That's a good thing! I've used <a href="https://wordpress.org/">WordPress</a> since day one all the way up to <a href="/design-v17/">v17</a>,
                        a decision I'm <a href="/video-screencasts/154-poster-child-wordpress-site/">very happy with</a>. I also
                        leverage <a href="/jetpack/">Jetpack</a> for extra functionality and <a href="/local-by-flywheel/">Local </a>
                        for local development.
                    </p>
                    <p class="short-note">
                        <small>
                            <span>*</span>May or may not contain any actual "CSS"
                            or&nbsp;"Tricks".
                        </small>
                    </p>

            </div>
            <div className="nav">

                 <h2>Other  Nav</h2>
                 <a href="/contact/" className="navs">Contact</a>
                 <a href="/about/" className="navs">About</a>
                 <a href="/guest-posting/" className="navs">Guest Writing</a>
                 <a href="/jobs" className="navs">Jobs</a>
                 <a href="/advertising/" className="navs">Advertise</a>
                 <a href="/license/" className="navs">License</a>
                 <a href="/subscription-options/"className="navs">Subscribe</a>
                 <a href="/authors/" className="navs">All Authors</a>

            </div>

        </div>

    )

}

export default About