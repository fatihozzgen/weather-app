import { useState } from "react";
import "../style/login.scss";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginChange = (e) => {
    if (username === "admin" && password === "admin") {
      setLogin(false);
      console.log("giriş başarılı");
    } else {
      e.preventDefault();
      setUsername("");
      setPassword("");
      notify();
    }
  };

  const notify = () =>
    toast.warn("Hatalı giriş !", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  return (
    <div className="logwrapper">
      <div className="log1">
        <p className="logwelcome"> WELCOME TO</p>
        <p className="logweather">Weather Forecast</p>
        <form>
          <div className="username">
            <input
              value={username}
              className="loginput"
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="inputicon">
              <FaUser size={16} />
            </span>
          </div>

          <div className="password">
            <input
              value={password}
              className="loginput"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <span className="inputicon">
              <RiLockPasswordLine size={16} />
            </span>
          </div>

          <button className="logbutton" onClick={loginChange}>
            SIGN IN
          </button>
          <p className="logaccount">
            Don't have an account? <span> Sign Up Now</span>
          </p>

          <div className="line">
            <div className=" line2" />
            <span className="logor">OR</span>
            <div className="line2" />
          </div>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
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

      {/* <div className="log2">log2</div> */}
    </div>
  );
};

export default Login;
