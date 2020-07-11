import React from "react"
import "./searchbox.css"

function SearchBox(props){
        return(

              <div className="searchbox">

                    <div className="box">
                        <form>

                            <input type="search" placeholder="e.g.  flexbox"></input>
                            <button type="submit" className="submit">
                                <i className="fas fa-search"></i>
                            </button>
                           
                               

                        </form>
                        <button type="button" className="hidden" onClick={props.state}>{props.currState?<i className="far fa-window-close"></i>:<i className="fas fa-search"></i>}</button>

                    </div>
                                            

              </div>


        )

}

export default SearchBox