import React from "react";
import { BiLogIn } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import { useContext } from "react";
import { mainContext } from "../context";

function Navbar() {
  const { login } = useContext(mainContext);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="nav">
      <div className="nav-logo">
        Weather <span>Forecast</span>
      </div>
      {login ? (
        <div className="nav-inout">
          <BiLogIn size={40} />
        </div>
      ) : (
        <div
          className="nav-inout"
          onClick={logOut}
          style={{ color: "#d63031" }}
        >
          <FaPowerOff size={30} />
        </div>
      )}
    </div>
  );
}

export default Navbar;
