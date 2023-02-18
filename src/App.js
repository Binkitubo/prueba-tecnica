import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar1 from "./Components/Navbar/navbar";
import Home from "./Pages/Home/home";
import Register from "./Pages/Login - Register/register";
import Login from "./Pages/Login/login";

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
