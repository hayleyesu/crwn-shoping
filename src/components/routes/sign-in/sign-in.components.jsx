import SignUp from '../../sign-up/sign-up.component';
import { 
    signInWithGooglePoPup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
    auth} from '../../../utils/firebase/firebase.utils'

const SignIn =()=>{
    
     
  const logGoogleUser= async ()=>{
        const {user}= await signInWithGooglePoPup();
       const userDocRef= await createUserDocumentFromAuth(user);
    };
       
    return(
        <div>
        <h1>Sign In</h1> 
        <button onClick={logGoogleUser}>
            Sign in with Google popup
            </button>
            <SignUp/>  
              
        </div>
    );
} ;
export default SignIn;