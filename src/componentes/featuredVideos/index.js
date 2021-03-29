import React from "react";
import "./style.scss";
import img1 from "./video/Mask Group (7).jpg"
import img2 from "./video/greece-1920x1080 1.jpg"
import img3 from "./video/Mask Group (8).jpg"
// import Video1 from "./video/1.mp4";
// import Video2 from "./video/2.mp4";
// import Video3 from "./video/3.mp4";
// import Video4 from "./video/4.mp4";

export default function index() {
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
      <div className="sectionForVideos">
          <img alt="" src={`${img1}`}></img>
          <img alt="" src={`${img2}`}></img>
          <img  alt="" src={`${img3}`}></img>
         
      </div>
    </div>
  );
}
