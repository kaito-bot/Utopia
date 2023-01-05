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

// add details of auth in database for that user
export const createUserProfileDoc = async (userAuth, additionalInfo) => {
  //if userAuth is null then return
  if (!userAuth) {
    return;
  }
  console.log(userAuth);
  // DocumentReference
  const userRef = firestore.doc(`Users/${userAuth.uid}`);
  //CollectionReference
  const collectionRef = firestore.collection("Users");
  // get snapshot of user
  const snapShot = await userRef.get();
  console.log({ snapShot });
  const collectionSnapShot = await collectionRef.get();
  console.log({ collectionSnapShot });
  //console.log(snapShot);
  // checks if user does not exist before and adds data if this holds true
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const date = new Date();
    try {
      await userRef.set({ displayName, email, date, ...additionalInfo });
    } catch (error) {
      console.log("some error occured, can't resolve");
    }
  }
  //console.log(userRef);
  return userRef;
};

//to shift shop data present on the frontend to backend (firebase)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  console.log("collectionRef", collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    console.log(obj);
    const newDocRef = collectionRef.doc(); //make new document reference objects
    console.log(newDocRef);
    batch.set(newDocRef, obj); //to batch these calls together
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    //console.log(accumulator);
    return accumulator;
  }, {});
};

//GoogleAuth
const provider = new firebase.auth.GoogleAuthProvider();

//The authorization server prompts the user to select a user account
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export default firebase;
