import "../style/style.css";
import { Register } from "./Register";
import { Login } from "./Login";
import { Mypage } from "./Mypage";
import React, { useState } from "react";
import { useAuth } from "../AuthContext";

function Reserve() {
  const { loggedin } = useAuth();
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="Reserve">
      {localStorage.getItem("loggedin") === "true" ? (
        <Mypage />
      ) : currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default Reserve;
