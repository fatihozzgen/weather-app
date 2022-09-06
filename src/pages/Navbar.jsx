import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

import { useContext } from "react";
import { mainContext } from "../context";

function Navbar() {
  const { username, login, password } = useContext(mainContext);
  console.log(login);

  return (
    <div className="navbar">
      <div className="weathicon">
        Weather <span>Forecast</span>
      </div>

      <div className="ppicon">
        <div className="userauth">
          {!login && username} {!login && password}
        </div>
        {login ? <BiLogIn size={40} /> : <CgProfile size={40} />}
      </div>
    </div>
  );
}

export default Navbar;
