import React from "react";
import "./style.scss";
import Avatar from "./jpg/Avatar.jpg";
import Avatar1 from "./jpg/Avatar(1).jpg";
import Avatar2 from "./jpg/Avatar(2).jpg";
import Avatar3 from "./jpg/Avatar(3).jpg";

export default function index() {
  return (
    <div className="featuredStoriesContainer">
      <div className="informationPart">
        <button className="featured">FEATURED</button>
        <h3>How To Fly A Private Jet On Your Next Trip</h3>
        <p>
          The state of Utah in the United States is home to lots of beautiful
          National Parks, & Bryce Canyon National Park ranks as three of the
          most magnificent & awe inspiring.
        </p>
        <button className="readArticle">READ ARTICLE</button>{" "}
      </div>

      <div className="featuredStories">
        <h2>Featured Stories</h2>

        <div className="avatarDiv">


          <div className="unicAvatar">
            <img src={`${Avatar}`} alt=""></img>
            <span>
              <p>Do A Sporting Stag Do In Birmingham</p>
              <p>13 Dec 2019</p>
            </span>
          </div>

          <div className="unicAvatar">
            <img src={`${Avatar1}`} alt=""></img>
            <span>
              <p>From Wetlands To Canals And Dams Amsterdam Is Alive</p>
              <p>13 Dec 2019</p>
            </span>
          </div>

          <div className="unicAvatar">
            <img src={`${Avatar2}`} alt=""></img>
            <span>
              <p>Stu Unger Rise And Fall Of A Poker Genius</p>
              <p>13 Dec 2019</p>
            </span>
          </div>

          <div className="unicAvatar">
            <img src={`${Avatar3}`} alt=""></img>
            <span>
              <p>New Ideas For A Low Cost Vacation On Water</p>
              <p>13 Dec 2019</p>
            </span>
          </div>









        </div>
      </div>
    </div>
  );
}
