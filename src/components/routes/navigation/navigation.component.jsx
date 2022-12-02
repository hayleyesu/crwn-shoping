import {Outlet,Link} from 'react-router-dom';
import { Fragment } from 'react';
import {ReactComponent as Crwnlogo} from '../../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = () => {
    const navigationLinks= [
        {
            name:'HOME',
            goto:'/home'

        },
        {
            name:'SHOP',
            goto:'/shop'

        },
        {
            name:'CONTACT',
            goto:'/contacts'

        },
        {
            name:'SIGN IN',
            goto:'/signin'

        }

    ]

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to ='/'>
                <Crwnlogo className='logo'/>
            </Link>
           {navigationLinks.map((navigationLink) => (
                <div className='nav-links-container'>
                <Link className='nav-link' to={navigationLink.goto}>
                {navigationLink.name}
                </Link>
            </div>

            ))}
            
         
        </div>
        <Outlet/>
      </Fragment>
      
    )}
    export default Navigation;