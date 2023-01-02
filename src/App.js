
import {Routes,Route,} from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.components';
import Shop from './components/routes/shop/shop.component'
import Checkout from './components/routes/checkout/checkout.component';

import {useEffect} from 'react'

import {checkUserSession} from './store/user/user.action';
import { useDispatch } from 'react-redux';
const App= () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUserSession())
    },[])
return (
     <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}>
        </Route> 
          <Route path='shop/*' element={<Shop/>}></Route>
          <Route path='auth' element={<Authentication/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes>
)
}
export default App;

