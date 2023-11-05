/**
 *
 * TODOs
 * ====================
 * 1: UserContext
 * 2: States: User, Loading
 * 3: func: createUser, login, googleLogin,
 * 4: effects: onAuthStateChange
 */

import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Authentication/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // register user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login with google
  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // update user
  const updateUser = (userData) => {
    updateProfile(auth.currentUser, userData);
  };

  // logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("Current User: ", currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    login,
    googleLogin,
    updateUser,
    logout,
  };

  console.log(
    "UserContext: ",
    "{user, loading, createUser, login, googleLogin, updateUser, logout}"
  );

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
