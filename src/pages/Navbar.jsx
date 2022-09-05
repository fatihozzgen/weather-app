import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BiLogIn } from "react-icons/bi";

import { useContext } from "react";
import { mainContext } from "../context";

function Navbar() {
  const { username, login } = useContext(mainContext);
  return (
    <div className="navbar">
      <div className="weathicon">
        <TiWeatherPartlySunny size={42} />
      </div>

      <div className="ppicon">
        <div> {!login && username}</div>
        {login ? <BiLogIn size={40} /> : <CgProfile size={40} />}
      </div>
    </div>
  );
}

export default Navbar;
