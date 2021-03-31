import React,{useState,useRef} from "react";
import "./style.scss";
import Video from "./video/1.mp4"

export default function Index() {
  const [playOrPause, setPlayOrPause] =useState(false)
  const ref = useRef(null)

 const playeVideo =()=>{ playOrPause ? ref.current.pause():ref.current.play();

setPlayOrPause(!playOrPause)}

     return (
    <div className="headerContainer">
      <div className="div">
        <nav>
          <div className="socialLogoDiv">
           <a href="https://www.facebook.com/">
           <svg
              width="11"
              height="20"
              viewBox="0 0 11 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 0H8C5.23858 0 3 2.23858 3 5V8H0V12H3V20H7V12H10L11 8H7V5C7 4.44772 7.44772 4 8 4H11V0Z"
                fill="white"
              />
            </svg>
           </a>
           <a href="https://www.twitter.com/"><svg
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20 0.00932958C19.1294 0.6234 18.1656 1.09307 17.1455 1.40024C16.024 0.110728 14.2167 -0.341476 12.6201 0.267924C11.0234 0.877323 9.97709 2.41869 10 4.12751V5.0366C6.75515 5.12074 3.68366 3.57476 1.81818 0.91842C1.81818 0.91842 -1.81818 9.10024 6.36364 12.7366C4.49139 14.0075 2.26105 14.6447 0 14.5548C8.18182 19.1002 18.1818 14.5548 18.1818 4.10024C18.181 3.84701 18.1566 3.59442 18.1091 3.34569C19.0369 2.43069 19.6917 1.27543 20 0.00932958Z"
                fill="white"
              />
            </svg></a>
          </div>

          <p>MITRAVEL</p>
          <div className="burgerMenu">
            <div className="burgerMenuItem"></div>
            <div className="burgerMenuItem"></div>
          </div>
        </nav>
       <button> <p className="newBook">NEW BOOK</p></button>
        <h1>Mother Earth Hosts Our Travels</h1>

        <p className="headerText">
          There are not many cities that have experienced such social and
          political extremes in recent history as Amsterdam. In the 20th century
          alone, Amsterdam faced the atrocities of war for the first time in 400
          years, became the radical center of 1960s social movements and
          witnessed a complete{" "}
        </p>
        <button className="buyTheBook">BUY THE BOOK</button>
        <input placeholder="Search stories"></input>

        <svg
          className="searchIcon"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 19L14.65 14.65"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>







       <div className="videoDiv">
       <video ref={ref} src={`${Video}`} type="video/mp4"  loop   >
        </video>

      <button onClick={ playeVideo} >  
    <svg   width="34" height="44" viewBox="0 0 34 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 1L33 21.5714L1 42.1429V1V1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 



</button>
       </div>
        

        <div className="videoSlider">

          
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8H1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15L1 8L8 1"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <p>wonderful moutain</p>

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8H15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 1L15 8L8 15"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
