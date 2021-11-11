import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

firebaseAuthentication();
const auth = getAuth();
const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  // sign in with google provider
  const signInGoogle = (from, history) => {
    setIsloading(true);
    const provier = new GoogleAuthProvider();
    signInWithPopup(auth, provier)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
        setIsloading(false);
        saveToUser(userInfo.displayName, userInfo.email, "PUT");
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
        setIsloading(false);
      });
  };

  // manually new user creating
  const manuallySignUp = (email, password, name) => {
    console.log(email, password, name);
    setIsloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            setUser(userInfo);
            setIsloading(false);
            saveToUser(name, email, "POST");
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        console.log(error);
        setIsloading(false);
      });
  };

  // user manually sign in-
  const manuallySignIn = (email, password, from, history) => {
    setIsloading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
        setIsloading(false);
        history.push(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setIsloading(false);
      });
  };

  // obserbing redering---
  useEffect(() => {
    setIsloading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsloading(false);
      } else {
        setUser(null);
        setIsloading(false);
      }
    });
  }, []);

  // logout-
  const logOut = () => {
    setIsloading(true);
    signOut(auth)
      .then(() => {
        setIsloading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // save user to db
  const saveToUser = (displayName, email, method) => {
    const user = { displayName, email };
    console.log(user);
    fetch("https://guarded-oasis-87785.herokuapp.com/user", {
      method: method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    // console.log(user);
  };

  // check user admin or not
  useEffect(() => {
    fetch(`https://guarded-oasis-87785.herokuapp.com/admin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsAdmin(true);
        }
      });
  }, [user?.email]);

  return {
    isLoading,
    isAdmin,
    user,
    error,
    logOut,
    signInGoogle,
    manuallySignUp,
    manuallySignIn,
  };
};

export default useFirebase;
