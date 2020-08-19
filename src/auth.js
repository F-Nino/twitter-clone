import React, { createContext, useEffect, useState, useContext } from "react";
import fb from "./firebase";

export const AuthContext = createContext(null);

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fb.auth().onAuthStateChanged((resp) => {
      console.log("resp", resp);
      if (resp) {
        const userData = {
          email: resp.email,
          uid: resp.uid,
        };
        setUser(userData);
      } else {
        setUser(null);
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user }} {...props} />;
};
export const useAuthDataContext = () => useContext(AuthContext);
