import React from "react"
import "./news.css"

function News(){

    return(
        <div className="news-footer">

            <hr className="footer-hr"></hr>   

            <h2>📫 The Newsletter</h2>

            <div className="input">

                <input type="email" placeholder="example@gmail.com" className="subscriber-input"></input>
                <button type="submit" className="subscriber-button">Subscribe</button>

            </div>
            <div class="social-links">
                    <a href="https://www.facebook.com/CSSTricks/" class="social-link-facebook">
                        <strong>Facebook</strong>
                        <span>@CSSTricks</span>
                    </a>
                    <a href="https://twitter.com/css" class="social-link-twitter">
                        <strong>Twitter</strong>
                        <span>@CSS</span>
                    </a>
                    <a href="https://www.youtube.com/user/realcsstricks" class="social-link-youtube">
                        <strong>YouTube</strong>
                        <span>@realcsstricks</span>
                    </a>
                    <a href="https://www.instagram.com/real_css_tricks/" class="social-link-instagram">
                        <strong>Instagram</strong>
                        <span>@real_css_tricks</span>
                    </a>
                    <a href="https://css-tricks.com/feed/" class="social-link-rss">
                        <strong>RSS</strong>
                        <span>Feed</span>
                    </a>
            </div>


        </div>
    )

}

export default News