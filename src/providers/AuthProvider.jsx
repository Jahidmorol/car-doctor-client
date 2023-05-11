// import React, { useEffect,} from "react";
import { createContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from 'react'

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState([])
const [loading, setLoading] = useState(true);


const createUser = (email, password) => {
  setLoading(true);
  return createUserWithEmailAndPassword(auth, email, password);
};

const logIn = (email, password) => {
  setLoading(true);
  return signInWithEmailAndPassword(auth, email, password);
};

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, currentUser => {
    setUsers(currentUser);
    console.log('currentUser :',currentUser);
    setLoading(false);
  });
  
  return () => {
    return unsubscribe();
  }
}, []);

const authInfo = {
  users,
  createUser,
  logIn,
  loading,
};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
