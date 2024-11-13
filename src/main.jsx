import { createContext, StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import Route from './Components/Router/Router.jsx';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, TwitterAuthProvider } from "firebase/auth";
import auth from './firebase/firebase.init.js';

export const authContext = createContext();

function App() {
  const [user, setuser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvaider = new GithubAuthProvider();
  const twitterProbaider = new TwitterAuthProvider();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };

  const handalGithubLogin = () => {
    signInWithPopup(auth, githubProvaider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };

  const handalTwitterLogin = () => {
    signInWithPopup(auth, twitterProbaider)
      .then(result => {
        setuser(result.user);
      })
      .catch(error => console.log('Error', error.message));
  };


  const handalRegister = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
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
      setuser(currentUser);
    })
    return () => {
      unsubcribe()
    }

  }, []);

  const handalSignOut = () => {
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
    handalRegister
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
