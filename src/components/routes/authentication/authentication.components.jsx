import SignUp from '../../sign-up/sign-up.component';
import SignIn from '../../sign-in/sign-in.component';
import './authentication.styles.scss';

    

const Authentication =()=>{
    
       
      return (
        <div className='authenticatin-container'>
          <SignIn />
          <SignUp />
        </div>
      );
    };
export default Authentication;