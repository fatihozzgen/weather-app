import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./pages/Navbar";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(true);

  if (login) {
    return (
      <>
        <Navbar />
        <Login setLogin={setLogin} />;
      </>
    );
  }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
