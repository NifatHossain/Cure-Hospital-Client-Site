import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "firebase.config";

export const AuthContext= createContext(null)

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true);

    const registerUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const updateUserInfo=(name,url)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }
    const userLogOut =()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser)
            } else {
              setUser(null)
            }
            setLoading(false)
          });
          return ()=>{
            return unsubscribe();
          }

    },[])
    const contextValues ={user,registerUser,signInUser,loading, googleSignIn,updateUserInfo,userLogOut}
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;