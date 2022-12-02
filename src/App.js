
import {Routes,Route,} from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import SignIn from './components/routes/sign-in/sign-in.components';

const Shop =()=>{
  return (
    <h1>This is Shop</h1>
  )
}
const App= () => {
return (
     <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}>
        </Route> 
          <Route path='shop' element={<Shop/>}></Route>
          <Route path='signin' element={<SignIn/>}></Route>
      </Route>
    </Routes>
)
}
export default App;

