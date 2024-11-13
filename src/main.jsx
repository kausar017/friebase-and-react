import { createContext, StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Components/Router/Router.jsx';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import auth from './firebase/firebase.init.js';

export const authContext = createContext();

function App() {
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true)

  const googleProvider = new GoogleAuthProvider();
  const githubProvaider = new GithubAuthProvider();
  const twitterProbaider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    setLoading(true)
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };

  const handalGithubLogin = () => {
    setLoading(true)
    signInWithPopup(auth, githubProvaider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };

  const handalTwitterLogin = () => {
    setLoading(true)
    signInWithPopup(auth, twitterProbaider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };


  const handalRegister = (email, password) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
      })
      .catch(error => {
        console.log('Error', error);
      })
  }

  const handalLogin = (email, password) => {
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log('Error', error);

      })
  }


  useEffect(() => {
    // console.log(user);

  }, [user]);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setuser(currentUser);
      }
      else {
        setuser(null)
      }
      setLoading(false)
    })
    return () => {
      unsubcribe()
    }

  }, []);

  const handalSignOut = () => {
    setLoading(true)
    signOut(auth)
      .then(reasult => {
        console.log(reasult);

      })
  }

  const authData = {
    user,
    handleGoogleLogin,
    handalGithubLogin,
    handalTwitterLogin,
    handalSignOut,
    handalRegister,
    handalLogin,
    loading,
  };

  return (
    <authContext.Provider value={authData}>
      <RouterProvider router={Route()}></RouterProvider>
    </authContext.Provider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
