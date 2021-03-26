import React from 'react'
import "./style.scss"
import Img1 from "./jpg/Mask Group (1).jpg"
import Img2 from "./jpg/Mask Group (2).jpg"
import Img3 from "./jpg/Mask Group (3).jpg"
import Img4 from "./jpg/Mask Group (4).jpg"


export default function index() {
    return (
        <div className="becomeATravelContainer">
            <h2>
            Become A Travel Pro In One Easy Lesson
            </h2>

            <div className="imgContainer">

<img alt="" src={`${Img1}`}/>
<img alt="" src={`${Img2}`}/>
<img alt="" src={`${Img3}`}/>
<img alt="" src={`${Img4}`}/>




            </div>
        </div>
    )
}
