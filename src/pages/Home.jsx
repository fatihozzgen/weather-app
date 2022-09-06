import axios from "axios";
import { useEffect, useState } from "react";
import "../style/button.scss";
import { BsFillCloudDrizzleFill, BsFillCloudSnowFill } from "react-icons/bs";
import { MdOutlineWbSunny } from "react-icons/md";
import { AiFillCloud } from "react-icons/ai";
import { useContext } from "react";
import { mainContext } from "../context";

function Home() {
  const [lastitem, setLastitem] = useState();
  const {
    search,
    setSearch,
    data,
    setData,
    register,
    setRegister,
    lastSearch,
  } = useContext(mainContext);

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9b41855ce7ae49f15ba6d36fe905061&units=metric`
    );
    setData(data);
  };

  useEffect(() => {
    getData();
    setSearch("");
  }, [lastitem]);

  const handleSearch = (e) => {
    if (lastSearch.length < 3) {
      lastSearch.push(search);
    } else {
      lastSearch.shift();
      lastSearch.push(search);
      console.log("else");
    }

    e.preventDefault();
    setSearch("");
    getData();
  };
  console.log(lastSearch);

  const lastClick = (item) => {
    setLastitem(item);
    setSearch(item);
  };

  return (
    <div className="home">
      <div
        className="box1"
        style={register ? { position: "absolute" } : { position: "relative" }}
      >
        <form className="inputwrapper" onSubmit={handleSearch}>
          <input
            className="input"
            type="text"
            placeholder="Your City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="buttonwrapper">
            <button className="button" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="latest">
          {lastSearch.map((item, idx) => (
            <div onClick={() => lastClick(item, idx)} key={idx}>
              {item}
            </div>
          ))}
        </div>

        <div className="location">{data?.name}</div>
        <div className="derece">{Math.round(data?.main.temp)}°C</div>
        <div className="hava">
          <img
            src={`icons/${data?.weather[0].icon}.png`}
            className="icon-small"
            alt="weather"
          />
          <div> {data?.weather[0].main}</div>
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
            Feels Like <div>{Math.round(data?.main.feels_like)} °C</div>
          </div>
          <div className="detail">
            Wind <div>{data?.wind.speed} km/h</div>
          </div>
          <div className="detail">
            Humidity <div>{data?.main.humidity} %</div>
          </div>
          <div className="detail">
            Pressure <div>{data?.main.pressure} mb</div>
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
