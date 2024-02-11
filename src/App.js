import { useState, React } from "react";
import { MyContext } from "./utils/MyContext.js";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Page from "./components/Page";
import Users from "./components/table/Users";
import NotFound from "./components/NotFound";
import Context from "./components/Context.jsx";
import Higher from "./components/Higher.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Login/Signup.jsx";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [text, setText] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <MyContext.Provider value={{ text, setText }}>
      <ToastContainer theme="colored" position="top-right" autoClose="1000" />
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" exact element={<Page />} />
          <Route path="/users" element={isLoggedIn ? <Users /> : null} />
          <Route path="/context" element={isLoggedIn ? <Context /> : null} />
          <Route path="/hoc" element={isLoggedIn ? <Higher /> : null} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
