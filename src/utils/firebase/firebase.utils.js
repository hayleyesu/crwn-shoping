import {initializeApp} from 'firebase/app';
import {
    getAuth, 
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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
  const googleProvider = new  GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:'select_account'
  });
    // Initialize firestore authentication
  export const auth= getAuth();
  export const signInWithGooglePoPup=() => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect=() =>signInWithRedirect(auth,googleProvider);
  //Initialize firestore database
  export const db=getFirestore();

  export const createUserDocumentFromAuth = async(userAuth,additionalInformation={})=> {
    if(!userAuth) return;
     const userDocRef=  doc(db,'users',userAuth.uid)
     //console.log(userDocRef);
     const userSnapshot= await getDoc(userDocRef)
     //console.log(userSnapshot)
     //console.log(userSnapshot.exists())
      if(!userSnapshot.exists()) {
        const {displayName, email} =userAuth;
        const createdAt= new Date();
        try{
              await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation


              })
        }
        catch(error){
          console.log('error creating the user',error.message);
      }
    }
    return userDocRef;
};

export  const CreateAuthUserWithEmailAndPassword = async(email,password)=>{
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth,email,password)
}
  