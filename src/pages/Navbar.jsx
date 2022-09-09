import React from "react";
import { CgProfile } from "react-icons/cg";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useContext } from "react";
import { mainContext } from "../context";

function Navbar() {
  const { username, login, password } = useContext(mainContext);

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="weathicon">
        Weather <span>Forecast</span>
      </div>
      <div></div>
      <div className="ppicon">
        {login ? (
          <BiLogIn size={40} />
        ) : (
          <label>
            <div className="logout" onClick={logOut}>
              <BiLogOut size={40} />
            </div>
          </label>
        )}
      </div>
    </div>
  );
}

export default Navbar;
