import React, { useState } from "react";
import "./style.scss";
import VideoSlider from "./VideoSlider";

import img1 from "./video/1.mp4";
import img2 from "./video/2.mp4";
import img3 from "./video/3.mp4";
export default function Index() {

const [img, setImg] = useState([{
  id: 1,
  img: img1,
  isActiv: false,
},
{
  id: 2,
  img: img2,
  isActiv: true,
},
{
  id: 3,
  img: img3,
  isActiv: false,
}])




  

  const videoClicHandeler = (id) => {
    let newImg = img.map((el) => {
      el.id === id ? (el.isActiv = true) : (el.isActiv = false);
  
      return el;
    });
    setImg(newImg)
    
  };


  const ImgArr = img.map((el) => {
    return <VideoSlider el={el} videoClicHandeler={videoClicHandeler} />;
  });

  return (
    <div className="featuredVideosContainer">
      <div className="sectionForText">
        <h2>Featured Videos</h2>
        <p>
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
      </div>
      <div className="sectionForVideos">{ImgArr}</div>
    </div>
  );
}
