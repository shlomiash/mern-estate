import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signin from "./routes/signin";
import Home from "./routes/home";
import Profile from "./routes/profile";
import SignUp from "./routes/signUp";
import About from "./routes/about";
import Header from "./components/header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-out" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
