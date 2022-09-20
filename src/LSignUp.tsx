import React, { useState } from "react";
import "./App.css";
import Logo from "./images/Logo.png";
import phone from "./images/phone.png";
import email from "./images/email.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";
import fb from "./images/fb.png";
import google from "./images/google.png";

function App() {
  const [gen, setGen] = useState("Male");
  return (
    <div className="pr-inputs-container">
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <input className="pr-input" />
        </div>
        <div className="pr-input-right">
          <input className="pr-input" />
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <div className="pr-input-dd">
            <select className="pr-input-dd-s">
              <option value="Male">male</option>
              <option value="Female">Female</option>
            </select>
            <span className="pr-input-arrow">
              {/* <img src={phone} alt="arrow" /> */}
            </span>
          </div>
        </div>
        <div className="pr-input-right">
          <input className="pr-input" />
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <input className="pr-input" />
        </div>
        <div className="pr-input-right">
          <div className="pr-input-phone">
            <div className="pr-input-dd">
              <select className="pr-input-dd-s">
                <option value="Male">male</option>
                <option value="Female">Female</option>
              </select>
              <span className="pr-input-arrow">
                {/* <img src={phone} alt="arrow" /> */}
              </span>
            </div>
            <input className="pr-input" />
          </div>
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <input className="pr-input" />
        </div>
        <div className="pr-input-right">
          <input className="pr-input" />
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <div className="pr-input-dd">
            <select className="pr-input-dd-s">
              <option value="Male">male</option>
              <option value="Female">Female</option>
            </select>
            <span className="pr-input-arrow">
              {/* <img src={phone} alt="arrow" /> */}
            </span>
          </div>
        </div>
        <div className="pr-input-right">
          <div className="pr-input-dd">
            <select className="pr-input-dd-s">
              <option value="Male">male</option>
              <option value="Female">Female</option>
            </select>
            <span className="pr-input-arrow">
              {/* <img src={phone} alt="arrow" /> */}
            </span>
          </div>
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-left">
          <input className="pr-input" />
        </div>
        <div className="pr-input-right">
          <input className="pr-input" />
        </div>
      </div>
      {/* <div className="pr-input-cc">
        <div className="pr-input-c-left">
          <div className="pr-input-i-c">
            <input className="pr-input-i" />
          </div>
        </div>
        <div className="pr-input-c-right">
          <input className="pr-input-i" />
        </div>
      </div>
      <div className="pr-input-cc">
        <div className="pr-input-c-left">
          <select className="pr-input">
            <option value="Male">male</option>
            <option value="Female">Female</option>
          </select>
          <span className="pr-input-arrow">
            <img src={phone} alt="arrow" />
          </span>
        </div>
        <div className="pr-input-c-right">
          <select className="pr-input">
            <option value="Male">male</option>
            <option value="Female">Female</option>
          </select>
          <span className="pr-input-arrow"></span>
        </div>
      </div> */}
      {/* <div className="opt-container-c">
        <div className="opt-title">
          <p> Please enter the 4 digit OTP sent to +91 1234567890</p>
        </div>
        <div className="otp-input-c">
          <p>input</p>
        </div>
        <div className="otp-validate-c">
          <button className="otp-validate-btn">Validate</button>
        </div>
        <div className="otp-resend-c">
          <button>Resend OTP</button>
        </div>
        <div className="otp-btp-c">
          <p> Entered a wrong number? </p>
          <button>Back to Profile</button>
        </div>
      </div> */}
    </div>
  );
}

export default App;
