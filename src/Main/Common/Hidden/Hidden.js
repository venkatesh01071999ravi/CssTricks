import React from "react"
import "./hidden.css"
function Hidden(){

        return(

            <div className="hidden-container">
                <div className="hidden-box">
                        <form>

                            <input type="search" placeholder="e.g.  flexbox"></input>
                            <button type="submit" className="hidden-submit">
                                <i className="fas fa-search"></i>
                            </button>
                           
                               

                        </form>
                    </div>
                
            </div>


        )


}

export default Hidden