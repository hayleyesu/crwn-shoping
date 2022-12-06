
import {Routes,Route,} from 'react-router-dom'
import Home from "./components/routes/home/home.component";
import Navigation from './components/routes/navigation/navigation.component';
import Authentication from './components/routes/authentication/authentication.components';
import Shop from './components/routes/shop/shop.component'


const App= () => {
return (
     <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}>
        </Route> 
          <Route path='shop' element={<Shop/>}></Route>
          <Route path='auth' element={<Authentication/>}></Route>
      </Route>
    </Routes>
)
}
export default App;
