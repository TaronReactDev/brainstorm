import React from 'react'
import "./style.scss"
import SignUpForm from "./SignUpForm"

export default function index() {
    return (
      <div className="signUpContainer">
          <div className="background">
              <div>
                  <p className="p1">
                  Sign Up Our Newsletter
                  </p>
                  <p>The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the most magnificent.</p>
              </div>

          </div>
          <SignUpForm/>

      </div>
          
     
    )
}
