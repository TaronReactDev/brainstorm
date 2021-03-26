import React from "react";
import Avatar from "./svg/Avatar"

export default function Section1() {
  return (
    <div className="footerSection1Div">
      <div>
        <h6>COMPANY</h6>
        <div className="greenline"></div>
        <ul>
          <li>About</li>
          <li>Press</li>
          <li>Blog</li>
          <li>Careers</li>
          <li>Security</li>
          <li>Driver Centre</li>
        </ul>
      </div>

      <div>
        <h6>INFORMATION</h6>
        <div className="greenline"></div>
        <ul>
          <li>Our Story</li>
          <li>Recipes</li>
          <li>Nutrition</li>
          <li>Resources</li>
          <li>Newsletter</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <h6>INFORMATION</h6>
        <div className="greenline"></div>
        <ul>
          <li>Customer service</li>
          <li>Recommend a restaurant</li>
          <li>Signup a restaurant</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Terms of use</li>
        </ul>
      </div>

      <div>
        <h6>SUSCRIBE NOW</h6>
        <div className="greenline"></div>

        <div className="inputAvatarContainer">
        <input placeholder="Your Email"></input>
          <Avatar/>
        </div>
      <button className ="subscribeButton"><p>SUBSCRIBE NOW</p></button>
      </div>
    </div>
  );
}
