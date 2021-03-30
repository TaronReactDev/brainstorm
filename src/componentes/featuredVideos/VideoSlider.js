import React, { useState,useRef } from "react";

export default function VideoSlider({ el, videoClicHandeler }) {
    const [playOrPause, setPlayOrPause] =useState(false);
  const refVideo = useRef(null);
  const videoClicHandeler2 = (id) => () => {
    videoClicHandeler(id);
  };


  const playeActivVideo =()=>{
    
    playOrPause ? refVideo.current.pause():refVideo.current.play();
    setPlayOrPause(!playOrPause)
  }

  return (
    <div
      className={el.isActiv ? "activ" : "notActiv"}
      onClick={videoClicHandeler2(el.id)}
    >


   
      <svg
       onClick={playeActivVideo}
        className={el.isActiv ? "activSvg" : "notActivSvg"}
        width="160"
        height="151"
        viewBox="0 0 160 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M104 151C134.928 151 160 125.928 160 95C160 64.0721 134.928 39 104 39C73.0721 39 48 64.0721 48 95C48 125.928 73.0721 151 104 151Z"
          fill="#E8594E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M94 80L118 95.4286L94 110.857V80Z"
          fill="white"
        />
      </svg>

      {/* <img alt="" src={el.img} ></img> */}
      <video ref={refVideo} src={el.img}  ></video>
    </div>
  );
}
