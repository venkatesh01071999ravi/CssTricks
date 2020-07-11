import React from "react"
import {useState} from "react"
import "./stickyimage.css"

function StickyImage(){

        
        const[sticky,changeSticky] = useState("sticky-sidebar-stuff")
        window.addEventListener('scroll',()=>{

            var y_scroll_pos = window.pageYOffset;
            var elem = 1400;
            if(y_scroll_pos >= elem){

                    changeSticky("sticky-sidebar-stuff showing");                

            }else{

                changeSticky("sticky-sidebar-stuff");


            }




        })
        return(

            <div className={sticky}>

                <div class="fem-ad fem-sidebar-ad">
                    <div class="fem-header">
                        <div class="fem-header-inner">
                            <div class="fem-learning-partner">
                                Our Learning Partner
                            </div>
                            <a href="https://frontendmasters.com/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar"><img src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1578251803/FEM-sidebar-Generic_dipjef.png" alt="Frontend Masters logo" class="fem-logo" /></a>
                        </div>
                    </div>
                    <div class="fem-message">
                        <h4>Need some front-end development training?</h4>
                        <p><a href="https://frontendmasters.com/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">Frontend Masters</a> is the best place to get it. They have courses on all the most important front-end technologies, from <a href="https://frontendmasters.com/learn/react/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">React</a> to <a href="https://frontendmasters.com/learn/css/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">CSS</a>, from <a href="https://frontendmasters.com/learn/vue/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">Vue</a> to <a href="https://frontendmasters.com/learn/d3-js/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">D3</a>, and beyond with <a href="https://frontendmasters.com/learn/node-js/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">Node.js</a> and <a href="https://frontendmasters.com/learn/fullstack/?utm_source=css-tricks&amp;utm_medium=website&amp;utm_campaign=css-tricks-tags-sidebar">Full Stack</a>.</p>
                    </div>
                </div>
                


            </div>



        )


}


export default StickyImage