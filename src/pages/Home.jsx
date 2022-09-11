import axios from "axios";
import { useEffect, useState } from "react";
import "../style/button.scss";
import { useContext } from "react";
import { mainContext } from "../context";
import { WiStrongWind, WiHumidity } from "react-icons/wi";
import { BsThermometerHalf } from "react-icons/bs";
import { MdOutlineCompress } from "react-icons/md";

function Home() {
  const {
    search,
    setSearch,
    data,
    setData,
    register,
    setRegister,
    lastSearch,
    location,
    setLocation,
    cityDetails,
    setCityDetails,
    lastitem,
    setLastitem,
    setLastSearch,
  } = useContext(mainContext);

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c9b41855ce7ae49f15ba6d36fe905061&units=metric&lang=tr`
    );
    setData(data);
    setLocation({
      lat: data.coord.lat,
      lon: data.coord.lon,
    });
  };

  const detailsFetch = async () => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&exclude=current,minutely,hourly,alerts&appid=ec7d1c0e712571e97e77329fca7e15f3&units=metric&lang=tr`
    );
    setCityDetails(data);
  };

  useEffect(() => {
    detailsFetch();
  }, [data]);

  useEffect(() => {
    getItem();
  }, []);

  useEffect(() => {
    getData();
    detailsFetch();
    setSearch("");
  }, [lastitem]);

  const handleSearch = (e) => {
    if (lastSearch.length < 3) {
      lastSearch.push(search);
      localStorage.setItem("testData", JSON.stringify(lastSearch));
    } else {
      lastSearch.shift();
      lastSearch.push(search);
      localStorage.setItem("testData", JSON.stringify(lastSearch));
    }

    e.preventDefault();
    setSearch("");
    getData();
  };

  const getItem = () => {
    const localData = localStorage.getItem("testData") ?? [];
    setLastSearch(localData.length > 1 ? JSON.parse(localData) : localData);
  };

  const lastClick = (item) => {
    setLastitem(item);
    setSearch(item);
  };
  const forecastDays = (item) => {
    const date = new Date(item * 1000);
    const day = date.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  };

  return (
    <div
      className="home"
      style={{ backgroundImage: `url("icons/${data?.weather[0].icon}.jpg")` }}
    >
      <div className="box1">
        <form className="box1-inputwrapper" onSubmit={handleSearch}>
          <input
            className="box1-input"
            type="text"
            placeholder="Your City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <button className="box1-button" type="submit">
              Search
            </button>
          </div>
        </form>
        <div className="box1-latest">
          {lastSearch.map((item, i) => (
            <div onClick={() => lastClick(item, i)} key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="box1-location">{data?.name}</div>
        <div className="box1-temp">{Math.round(data?.main.temp)}°C</div>
        <div className="box1-weath">
          <img
            src={`icons/${data?.weather[0].icon}.png`}
            className="box1-iconsmall"
            alt="weather"
          />
          <div className="box1-desc">{data?.weather[0].main}</div>
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

      <div
        className="box2"
        style={register ? { display: "none" } : { display: "block" }}
      >
        <div className="box2-wrapper">
          <div className="box2-detail">
            <div className="box2-minicon">
              <span>
                <BsThermometerHalf size={22} />
              </span>
              Feels Like
            </div>

            <div>{Math.round(data?.main.feels_like)} °C</div>
          </div>

          <div className="box2-detail">
            <div className="box2-minicon">
              <span>
                <WiStrongWind size={22} />
              </span>
              Wind
            </div>
            <div>{data?.wind.speed} km/h</div>
          </div>

          <div className="box2-detail">
            <div className="box2-minicon">
              <span>
                <WiHumidity size={22} />
              </span>
              Humidity
            </div>
            <div>{data?.main.humidity} %</div>
          </div>

          <div className="box2-detail">
            <div className="box2-minicon">
              <span>
                <MdOutlineCompress size={22} />
              </span>
              Pressure
            </div>
            <div>{data?.main.pressure} mb</div>
          </div>
        </div>

        <div className="box2-dayswrapper">
          <div className="box2-days">
            <div className="box2-detail-icon">
              <img
                src={`icons/${cityDetails?.daily[1].weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
            </div>
            <div>{forecastDays(cityDetails?.daily[1].dt)}</div>
            <div>{Math.floor(cityDetails?.daily[1].temp.day)} °C</div>
          </div>
          <div className="box2-days">
            <div className="box2-detail-icon">
              <img
                src={`icons/${cityDetails?.daily[2].weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
            </div>
            <div>
              <div>{forecastDays(cityDetails?.daily[2].dt)}</div>
            </div>
            <div>{Math.floor(cityDetails?.daily[2].temp.day)} °C</div>
          </div>
          <div className="box2-days">
            <div className="box2-detail-icon">
              <img
                src={`icons/${cityDetails?.daily[3].weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
            </div>

            <div>
              <div>{forecastDays(cityDetails?.daily[3].dt)}</div>
            </div>
            <div>{Math.floor(cityDetails?.daily[3].temp.day)} °C</div>
          </div>
          <div className="box2-days">
            <div className="box2-detail-icon">
              <img
                src={`icons/${cityDetails?.daily[4].weather[0].icon}.png`}
                className="icon-small"
                alt="weather"
              />
            </div>
            <div>
              <div>{forecastDays(cityDetails?.daily[4].dt)}</div>
            </div>
            <div>{Math.floor(cityDetails?.daily[4].temp.day)} °C</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
