import React from "react"
import "./mailchimp.css"
import {useState} from "react" 

function MailChimp(){

        const [state,changeState] = useState("mail-chimp")
        let resizeTimer;
        window.addEventListener("resize",()=>{

            changeState("hide");
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {

            changeState("mail-chimp")

            },2000);

        });
      

        return(

            

                <div className={state}>

                    <div className="mail-chimp-image">

                        <a href="//srv.buysellads.com/ads/click/x/GTND42Q7CE7DV5QECWSLYKQMF67IE27JC6YITZ3JCWAIC53NCTYDLK7KFTADC27NFTADKKJMC67DC2QNCEADE27KC6BIL23LFTYIKK3EHJNCLSIZ">
                            <img src="https://res.cloudinary.com/css-tricks/image/fetch/w_600,q_auto,f_auto/https://cdn4.buysellads.net/uu/7/65221/1591028064-MC_CSSTricks_Logo_600x600.jpg" alt="Ad for Mailchimp" />
                        </a>
                    </div>
                    <div className="mail-chimp-text">

                            <a href="//srv.buysellads.com/ads/click/x/GTND42Q7CE7DV5QECWSLYKQMF67IE27JC6YITZ3JCWAIC53NCTYDLK7KFTADC27NFTADKKJMC67DC2QNCEADE27KC6BIL23LFTYIKK3EHJNCLSIZ">Don't spend all day sending messages. Automatically reach out to fans based on how they behave.</a>

                    </div>

                </div> 

        )


}


export default MailChimp