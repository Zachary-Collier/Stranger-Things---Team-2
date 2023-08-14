import { Routes, Route } from "react-router-dom";
import Posts from "./Pages/Posts";
import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
