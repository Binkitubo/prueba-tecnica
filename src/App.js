import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/Frontend/Pages/Login - Register/login"
import Register from "../src/Frontend/Pages/Login - Register/register"
import Navbar from "../src/Frontend/Components/Navbar/navbar"
import Home from "../src/Frontend/Pages/Home/home"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
