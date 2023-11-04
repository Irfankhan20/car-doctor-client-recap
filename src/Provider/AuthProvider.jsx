import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, SetLoading] = useState(true);

    //create user
    const createUser = (email,password) =>{
        SetLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //signIn user
    const signInUser = (email, password) =>{
        SetLoading(true);
        return signInWithEmailAndPassword(auth, email ,password);
    }

    //onAuthStateChanged
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            SetLoading(false);
        });
        return ()=>{
            return unsubscribe();
            
        }
    },[])

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
      };

      const logOut = () => {
        SetLoading(true);
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        updateUserProfile,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;