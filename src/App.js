import {Routes,Route,} from 'react-router-dom';
import {useEffect,lazy,Suspense} from 'react'
import {checkUserSession} from './store/user/user.action';
import { useDispatch } from 'react-redux';
import Spinner from './components/spinner/spinner.component';

const Home= lazy(()=>import('./components/routes/home/home.component'));
const Navigation =lazy( ()=>import('./components/routes/navigation/navigation.component'));
const Authentication= lazy(()=>import('./components/routes/authentication/authentication.components'));
const Shop= lazy(()=>import('./components/routes/shop/shop.component'));
const Checkout= lazy(()=>import('./components/routes/checkout/checkout.component'));

const App= () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(checkUserSession());
    },[])
return (
  <Suspense fallback={<Spinner />}>
    
     <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}>
        </Route> 
          <Route path='shop/*' element={<Shop/>}></Route>
          <Route path='auth' element={<Authentication/>}></Route>
          <Route path='checkout' element={<Checkout/>}></Route>
      </Route>
    </Routes>
    </Suspense>
)
}
export default App;

