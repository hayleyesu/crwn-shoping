import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

import {
getFirestore,
  doc,
  setDoc,
  getDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBajD8lVqE3zJ9DJ6-Efg7kz0WIgFpVMw",
    authDomain: "hylus-clothig-db.firebaseapp.com",
    projectId: "hylus-clothig-db",
    storageBucket: "hylus-clothig-db.appspot.com",
    messagingSenderId: "157810097970",
    appId: "1:157810097970:web:120be36e9ff49ce1e1e12b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new  GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  });
    // Initialize firestore authentication
  export const auth= getAuth();
  export const signInWithGooglePoPup=() => signInWithPopup(auth,provider);
  //Initialize firestore database
  export const db=getFirestore();

  export const createUserDocumentFromAuth = async(userAuth)=> {
     const userDocRef=  doc(db,'users',userAuth.uid)
     console.log(userDocRef);
     const userSnapshot= await getDoc(userDocRef)
     console.log(userSnapshot)
     console.log(userSnapshot.exists())
      if(!userSnapshot.exists()) {
        const {displayName, email} =userAuth;
        const createdAt= new Date();
        try{
              await setDoc(userDocRef,{
                displayName,
                email,
                createdAt

              })
        }
        catch(error){
          console.log('error creating the user',error.message);
      }
    }
    return userDocRef;
};
  