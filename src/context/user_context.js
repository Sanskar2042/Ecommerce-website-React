import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "../reducers/user_reducer";
import { SET_USER } from "../actions";
import { auth, provider } from "../firebase/fire";
import { signInWithPopup, signOut } from "@firebase/auth";

const UserContext = React.createContext();

const initialState = {
  user: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setUser = (user) => {
    dispatch({ type: SET_USER, payload: user });
  };

  const signIn = (e) => {
    e.preventDefault();
    if (!state.user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          if (result.user) {
            setUser(result.user);
          }
        })
        .catch((err) => alert(err.message));
    } else {
      signOut(auth, provider);
      setUser(null);
    }
  };

  return (
    <UserContext.Provider value={{ ...state, setUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
