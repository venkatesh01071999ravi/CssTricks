import React from "react"
import "./header.css"
import Logo from "./Common/Logo/Logo"
import Article from "./Common/Article/Article"
import Videos from "./Common/Videos/Videos"
import NewsLetter from "./Common/NewsLetter/NewsLetter"
import Account from "./Common/Account/Account"
import SearchBox from "./Common/SearchBox/SearchBox"
function Header(props){
    console.log(props)
        return(

           
            <div className="header-div">

                  <Logo />
                    <div className="middle-article">
                        
                        <Article />
                        <Videos />
                        <NewsLetter />
                        <Account />
                        <Article />
                    </div>
                  <SearchBox state={props.state} currState={props.currState} />  
            </div>

        )

}

export default Header