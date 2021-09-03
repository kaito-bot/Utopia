import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const config = {
  apiKey: "AIzaSyC05EfBlF2lHSBPGarVYLq0CxAEG1C4kZs",
  authDomain: "utopia-db-faa6e.firebaseapp.com",
  projectId: "utopia-db-faa6e",
  storageBucket: "utopia-db-faa6e.appspot.com",
  messagingSenderId: "520655987526",
  appId: "1:520655987526:web:0ed79b18fc25c63376fb47",
  measurementId: "G-VQSK66Q8LW",
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// checks if user does not exist before
// add details of auth in database for that user 
export const createUserProfileDoc = async (userAuth, additionalInfo) => {
  if (!userAuth) {
    return;
  }
  // DocumentReference
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  // CollectionReference
  const snapShot = await userRef.get();
  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const date = new Date();
    try {
      await userRef.set({ displayName, email, date, ...additionalInfo });
    } catch (error) {
      console.log("some error occured, can't resolve");
    }
  }
  return userRef;
};

//GoogleAuth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
