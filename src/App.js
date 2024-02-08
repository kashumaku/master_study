import react from "react";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/SignUp";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/master_study" element={<Main />} />
        <Route path="/master_study/signup" element={<SignUp />} />
        <Route path="/master_study/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
