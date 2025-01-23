import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

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
   
    setUser(currentUser)
        if (currentUser?.email) {
        const user = {email: currentUser.email}
           axios.post('http://localhost:5000/jwt', user, {withCredentials:true} )
           .then(res => {
            console.log('login token', res.data);
            setLoading(false);
           })

        } else {
          axios.post('http://localhost:5000/logout', {}, {withCredentials:true} )
           .then(res =>  {
            console.log('logout-jwt', res.data);
            setLoading(false);
        })
        }
      });

      return () => unSubscribe();
},[])

const authInfo = { 
    createUser, signInUser, user, 
    setLoading, setUser, loading,
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