import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

const provider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        //   .then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     // ...
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
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
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
    }

const logOut = () =>{
   setLoading(true);
   return signOut(auth)
    // .then(() => {
    //     // Sign-out successful.
    //   }).catch((error) => {
    //     // An error happened.
    //   });
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
    setLoading, setUser, loading,
     googleSignIn, logOut

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