import React from "react"
import MailChimp from "./Common/MailChimp/MailChimp"
import "./aside.css"
import StickyImage from "./Common/StickyImage/StickyImage"
import {useState} from "react"


function Aside(){
        

        return(
            <aside className="side-articles">

                <div className="all-ads">

                        <MailChimp />
                        <StickyImage />


                </div>

            </aside>
         
        ) 

}

export default Aside