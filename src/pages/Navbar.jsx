import React from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="weathicon">
        <TiWeatherPartlySunny size={42} />
      </div>
      <div className="ppicon">
        <CgProfile size={40} />
      </div>
    </div>
  );
}

export default Navbar;
