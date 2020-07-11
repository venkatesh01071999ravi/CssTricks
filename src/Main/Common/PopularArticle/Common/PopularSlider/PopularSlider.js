import React from "react"
import PopularSliderCard from "./Common/PopularSliderCard/PopularSliderCard"
import "./popularslider.css"

function PopularSlider(){

        return(

            <div className="popular-slider">

                <PopularSliderCard date="June26,2020" title="In Defence of a fussy Website" author="Venkatesh" photo="https://secure.gravatar.com/avatar/48cfd8342f9b9e5b7970f63afb0a8ee3?s=80&d=retro&r=pg"/>
                <PopularSliderCard date="June27,2020" title="Jsx Rendering" author="Sarah" photo="https://secure.gravatar.com/avatar/835dc76d060c6401e4c1ef5465f048be?s=160&d=retro&r=pg"/>
                <PopularSliderCard date="June28,2020" title="CSS,JAVASCRIPT" author="Rob" photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png"/>
                <PopularSliderCard date="June29,2020" title="Bootstrap" author="Client" photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg"/>
                <PopularSliderCard date="June30,2020" title="AJAX Methods" author="Jack" photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg"/>
                <PopularSliderCard date="July1,2020"  title="API Calls" author="Shelby"  photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png" />
                <PopularSliderCard date="July2,2020"  title="ANGULAR"  author="Tommy" photo="https://secure.gravatar.com/avatar/835dc76d060c6401e4c1ef5465f048be?s=160&d=retro&r=pg"/>
                <PopularSliderCard date="July3,2020"  title="HTML5,CSS3" author="Ralphie"  photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png"/>
                <PopularSliderCard date="July3,2020"  title="JAVASCRIPT Mastering" author="Kirstein"  photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png"/>
                <PopularSliderCard date="July4,2020"  title="Full Stack" author="Shreyaa"  photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg"/>
                <PopularSliderCard date="July5,2020"  title="Node.JS" author="Robin"  photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png"/>
                <PopularSliderCard date="July6,2020"  title="React JS" author="Venki"  photo="https://css-tricks.com/wp-content/uploads/2020/07/32795085-80x80.png"/>
                <PopularSliderCard date="July8,2020"  title="MongoDB" author="Sundar"  photo="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=80&d=retro&r=pg"/>



            </div>

        )


}

export default PopularSlider