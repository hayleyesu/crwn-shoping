import {useState} from 'react'
import{CreateAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-up.styles.scss'
import Button from '../button/button.components'

const defaultFormFields={
    desplayName:'',
    email:'',
    password: '',
    confirmPassword:''
}

const SignUp = () =>{

    const [formFields,setformFields]= useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}=formFields;
    
    console.log(formFields);
 
    const hundleChange= (event)=>{
        const {name,value} = event.target;

        setformFields({...formFields, [name]:value})

    };
    const resetFormFields=()=>{
        setformFields(defaultFormFields);
    }

    const hundleSubmit = async (event)=>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert('Passwords do not match')
            return;
           }
        try{
          const {user}= await CreateAuthUserWithEmailAndPassword(email,password);
           await createUserDocumentFromAuth(user,{displayName})
          }
        catch(error){
            if(error.code ==='auth/email-already-in-use'){
                alert('Can not create user, email already in use');
            }
            else 
            console.log('User creation encountered an error!',error);

          }
         resetFormFields();
     };

    return(
        <div className='sign-up-container'>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={hundleSubmit}>
                
                <FormInput 
                label='Desplay Name'
                type='text' 
                required 
                onChange={hundleChange} 
                name='displayName'
                value={displayName}
                />
                
                <FormInput 
                label='Email'
                type='email' 
                required 
                onChange={hundleChange} 
                name='email' 
                value={email}/>
                
                <FormInput type='password'
                label='Password' 
                required 
                onChange={hundleChange} 
                name='password' 
                value={password}/>
                
                <FormInput type='password' 
                label='Confirm password'
                required onChange={hundleChange} 
                name='confirmPassword' 
                value={confirmPassword}
                 />
                
                <Button  button_types='inverted' type='submit'>Sign Up </Button>
            </form>
        </div>

    )
}
export default SignUp;