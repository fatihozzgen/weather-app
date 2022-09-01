import React from "react";
import { useState } from "react";
import "../style/button.scss";
import { BsFillCloudDrizzleFill, BsFillCloudSnowFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";
function Home() {
  const [register, setRegister] = useState(true);
  return (
    <div className="home">
      <div
        className="box1"
        style={register ? { position: "absolute" } : { position: "relative" }}
      >
        <div className="inputwrapper">
          <input className="input" type="text" placeholder="Your City" />
          <div className="buttonwrapper">
            <button className="button">Search</button>
          </div>
        </div>

        <div className="latest">
          <div> İstanbul</div>
          <div> Adana</div>
          <div> İzmir</div>
        </div>

        <div className="location"> Adana</div>

        <div className="derece"> 38.9° C</div>

        <div className="hava">
          <BsFillCloudDrizzleFill size={50} color="white" />
          <div> Rainy</div>
        </div>
        <div>
          <button
            className="cssbuttons-io-button"
            onClick={() => setRegister(!register)}
          >
            More details...
            <div className="icon">
              <svg
                height="24"
                width="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="box2">
        <div className="detailwrapper">
          <div className="detail">
            PRECIPITATION : <div>0%</div>
          </div>
          <div className="detail">
            HUMIDITY : <div>34%</div>
          </div>
          <div className="detail">
            WIND: <div>12 km/h</div>
          </div>
        </div>

        <div className="dayswrapper">
          <div className="days">
            <div>
              <MdOutlineWbSunny size={50} />
            </div>
            <div>Tue </div>
            <div>18°C </div>
          </div>

          <div className="days">
            <div>
              <AiFillCloud size={50} />
            </div>
            <div>Wed </div>
            <div>25°C </div>
          </div>

          <div className="days">
            <div>
              <BsFillCloudSnowFill size={50} />
            </div>
            <div>Thu </div>
            <div>22°C </div>
          </div>

          <div className="days">
            <div>
              <BsFillCloudDrizzleFill size={50} />
            </div>
            <div>Fry </div>
            <div>16°C </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
