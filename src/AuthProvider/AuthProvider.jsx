import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user,setUser]= useState(null);
  const [loader, setLoader] = useState(true);

  const userLogin = (email,password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth,email, password);
  }

  const userLogout = ()=>{
    setLoader(true);
    return signOut(auth);
  }

  const userSignUp = ( email , password )=> {
    setLoader(true);
    return createUserWithEmailAndPassword( auth , email , password );
  }
  
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      if(currentUser){
        console.log('User Logged In from inside onAuthStateChanged');
        // setLoader(true);
        setUser(currentUser);
        setLoader(false);
        console.log(currentUser);
      } 
      else{
        console.log('User Logged Out from Inside onAuthStateChanged');
        setUser(null);
        setLoader(false);
      }
    })

    return ()=>{
      unSubscribe();
    }
  },[])

  const authInfo={
    user,
    userLogin,
    userLogout,
    userSignUp,
    loader
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;