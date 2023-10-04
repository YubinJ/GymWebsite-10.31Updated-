import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  // Initialize currentMember from localStorage on application start
  useEffect(() => {
    const storedCurrentMember = localStorage.getItem("currentMember");
    if (storedCurrentMember) {
      setCurrentMember(JSON.parse(storedCurrentMember));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedin, setLoggedin, currentMember, setCurrentMember }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
