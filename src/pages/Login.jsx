import React from "react";
import "../style/login.scss";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";

function login() {
  return (
    <div className="logwrapper">
      <div className="log1">
        <p className="logwelcome"> WELCOME TO</p>
        <p className="logweather">Weather Forecast</p>
        <form>
          <div className="username">
            <input className="loginput" placeholder="Username" type="text" />
            <span className="inputicon">
              <FaUser size={16} />
            </span>
          </div>

          <div className="password">
            <input
              className="loginput"
              placeholder="Password"
              type="password"
            ></input>
            <span className="inputicon">
              <RiLockPasswordLine size={16} />
            </span>
          </div>

          <button className="logbutton">SIGN IN</button>
          <p className="logaccount">
            Don't have an account? <span> Sign Up Now</span>
          </p>

          <div className="line">
            <div className=" line2" />
            <span className="logor">OR</span>
            <div className="line2" />
          </div>
        </form>

        <p className="logcontinue">Continue with social media </p>
        <div className="iconwrapper">
          <div className="facebook">
            <GrFacebook size={30} />
          </div>
          <div className="twitter">
            <FaTwitterSquare size={32} />
          </div>
          <div className="gmail">
            <SiGmail size={31} />
          </div>
          <div className="linkedin">
            <BsLinkedin size={30} />
          </div>
        </div>
      </div>

      <div className="log2">log2</div>
    </div>
  );
}

export default login;
