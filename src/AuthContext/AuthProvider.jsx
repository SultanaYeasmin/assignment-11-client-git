import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    };
   
    const signInUser = (email, password) =>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
    }

    const googleSignIn = () =>{

      setLoading(true);
      return  signInWithPopup(auth, provider)

    }

const logOut = () =>{
   setLoading(true);
   return signOut(auth)
  
}
const updateUserProfile = (updatedData) =>{
       
  return updateProfile(auth.currentUser, updatedData);
}
useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth, (currentUser) => {
    setLoading(false);
    setUser(currentUser)
        if (currentUser) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = currentUser.uid;
          // ...
        } else {
          // User is signed out
          // ...
        }
      });

      return () => unSubscribe();
},[])

const authInfo = { 
    createUser, signInUser, user, 
    setLoading, setUser, loading, setLoading,
     googleSignIn, logOut, updateUserProfile

}
return (
    <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </div>
);
};

export default AuthProvider;