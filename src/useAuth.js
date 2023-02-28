import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase.config";
import { useState } from "react";

const useAuth = () => {
   
    const [state, setState] = useState(null)
  onAuthStateChanged(auth, (user) => {
    
    if (user) {

      setState(user);
    }
  });
  return state
};
export default useAuth
