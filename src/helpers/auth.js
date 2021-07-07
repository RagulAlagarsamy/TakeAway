
import { auth } from "../config/fbConfig";

export function signInWithGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return auth().signInWithPopup(provider);
  }