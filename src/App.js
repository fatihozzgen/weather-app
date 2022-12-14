import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import { useState } from "react";
import { mainContext } from "./context";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const [login, setLogin] = useState(true);
  const [register, setRegister] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("istanbul");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [lastSearch, setLastSearch] = useState([]);
  const [lastitem, setLastitem] = useState([]);
  const [location, setLocation] = useState({});
  const [cityDetails, setCityDetails] = useState();
  const [loading, setLoading] = useState(true);

  const datax = {
    login,
    setLogin,
    register,
    setRegister,
    data,
    setData,
    search,
    setSearch,
    username,
    setUsername,
    password,
    setPassword,
    lastSearch,
    setLastSearch,
    lastitem,
    setLastitem,
    location,
    setLocation,
    cityDetails,
    setCityDetails,
    loading,
    setLoading,
  };

  if (login) {
    return (
      <mainContext.Provider value={datax}>
        <Navbar />
        <Login />;
      </mainContext.Provider>
    );
  }

  return (
    <ErrorBoundary isHome={true}>
      <mainContext.Provider value={datax}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </mainContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
