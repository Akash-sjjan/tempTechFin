import React, { useState } from "react";
import "./App.css";
import Logo from "./images/Logo.png";
import phone from "./images/phone.png";
import email from "./images/email.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import fb from "./images/fb.png";
import google from "./images/google.png";
import success from "./images/success.png";

function App() {
  const [gen, setGen] = useState("Male");
  return (
    <div className="reg-suc-container">
      <div className="reg-suc-container-c">
        <div className="reg-suc-img-c">
          <img src={success} alt="success" />
        </div>
        <div className="reg-suc-title-c">
          <p className="reg-suc-title">
            Success!, Your Mobile Number is verified
          </p>
          <p className="reg-suc-sub-title">
            we have sent you an email with your login credentials
          </p>
        </div>
        <hr className="reg-suc-hor-line"></hr>
        {/* <div className="reg-suc-hor-line"></div> */}
        <div className="reg-suc-btn-c">
          <button className="reg-suc-back-btn">Back to Profile Page</button>
          <button className="reg-suc-next-btn">Proceed to Step 2</button>
        </div>
      </div>
    </div>
  );
}

export default App;
