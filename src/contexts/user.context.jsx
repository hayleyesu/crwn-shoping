import {createContext,useState,useEffect} from 'react'
import { onAuthStateChangedListner,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils';

//as actual value you want to access
export const UserContext= createContext(
    {
       currentUser:null,
       setCurrentUser:() => null,

    }
);
 

//Provider
export const UserProvider =({children}) =>
{
    const [currentUser,setCurrentUser]= useState(null);
    const value = {currentUser,setCurrentUser};

   
    useEffect(()=>{
      const unsubscribe= onAuthStateChangedListner((user)=>{
        if(user){
           createUserDocumentFromAuth(user);
        }
      setCurrentUser(user);
      console.log(user)
      })
      return unsubscribe;
      },[])


  return <UserContext.Provider value={value}>{children}</UserContext.Provider>  

  
};
