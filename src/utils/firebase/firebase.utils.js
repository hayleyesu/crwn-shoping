import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc,
  collection,
  writeBatch ,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCBajD8lVqE3zJ9DJ6-Efg7kz0WIgFpVMw",
  authDomain: "hylus-clothig-db.firebaseapp.com",
  projectId: "hylus-clothig-db",
  storageBucket: "hylus-clothig-db.appspot.com",
  messagingSenderId: "157810097970",
  appId: "1:157810097970:web:120be36e9ff49ce1e1e12b"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  //To upload data to our firestore database.

  export const addCollectionAndDocuments=async (collectionKey,objectsToAdd)=>{
    const collectionRef=collection(db,collectionKey);
    const batch=writeBatch(db);

    objectsToAdd.forEach((object) => {

      const docRef=doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef,object);
      
    });
    await batch.commit();
    console.log('done')
  } 
   //For retrive data from firebase database
  
  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'catagories');
    const q = query(collectionRef);
  
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot=>docSnapshot.data())
    };
  



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
//for signing out
export  const signOutUser = async()=>await signOut(auth);
export const onAuthStateChangedListner=(callback)=>onAuthStateChanged(auth,callback);

export const getCurrentUser= () => {
  return new Promise((resolve,reject)=>{
    const unsubscribe=onAuthStateChanged(
      auth,
      (userAuth)=>{
      unsubscribe();
      resolve(userAuth)
      },
      reject
       );
    }
    )
  }
