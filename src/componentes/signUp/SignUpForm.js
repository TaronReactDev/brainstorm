import React from "react";

export default function SignUpForm() {
  return (
    <div className="formContainer">
      <form>
        <label for="Email">Email</label>
        <input type="text" name="gender" id="Email" />
        <br />
        <label for="Email2">Email</label>
        <input type="text" name="gender" id="Email2" />
        <br />
        <label for="PhoneNumber">Phone number</label>
        <input type="text" name="gender" id="PhoneNumber" />
        <br />
      </form>
      <button><p>sign up now</p></button>
    </div>
  );
}
