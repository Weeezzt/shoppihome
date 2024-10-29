import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Homes from "./pages/homes";
import News from "./pages/news";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/Signup";
import IndividualPage from "./pages/homes/id/IndividualPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/homes" element={<Homes />} />
        <Route path="/homes/:id" element={<IndividualPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
