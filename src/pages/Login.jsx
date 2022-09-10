import "../style/login.scss";
import { GrFacebook } from "react-icons/gr";
import { FaTwitterSquare, FaUser } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { mainContext } from "../context";

const Login = () => {
  const { username, setUsername, password, setPassword, setLogin } =
    useContext(mainContext);
  const getUser = localStorage.getItem("user");
  const getPass = localStorage.getItem("pass");

  const loginChange = (e) => {
    if (username === "admin" && password === "admin") {
      setLogin(false);
      localStorage.setItem("user", username);
      localStorage.setItem("pass", password);
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
    <div className="log">
      {getUser && getPass ? setLogin(false) : setLogin(true)}
      <div className="log-box">
        <p className="log-welcome"> WELCOME TO</p>
        <p className="log-weather">Weather Forecast</p>
        <form>
          <div className="log-username">
            <input
              value={username}
              className="log-input"
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="log-inputicon">
              <FaUser size={16} />
            </span>
          </div>

          <div className="log-password">
            <input
              value={password}
              className="log-input"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <span className="log-inputicon">
              <RiLockPasswordLine size={16} />
            </span>
          </div>

          <button className="log-button" onClick={loginChange}>
            SIGN IN
          </button>
          <p className="log-account">
            Don't have an account? <span> Sign Up Now</span>
          </p>

          <div className="log-line">
            <div className="log-line2" />
            <span className="log-or">OR</span>
            <div className="log-line2" />
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

        <p className="log-continue">Continue with social media </p>
        <div className="log-iconwrapper">
          <div className="log-facebook">
            <GrFacebook size={30} />
          </div>
          <div className="log-twitter">
            <FaTwitterSquare size={32} />
          </div>
          <div className="log-gmail">
            <SiGmail size={31} />
          </div>
          <div className="log-linkedin">
            <BsLinkedin size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
