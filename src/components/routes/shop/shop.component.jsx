import { Routes,Route} from 'react-router-dom';
import { useEffect } from 'react';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { fetchCategoriesStart } from '../../../store/categories/categories.action';
import { useDispatch } from 'react-redux';

const Shop =()=>{
     const dispatch=useDispatch();

     useEffect(()=> { dispatch(fetchCategoriesStart());},[]);
    
     return (
      <Routes>
        <Route index element={<CategoriesPreview/> }/>
        <Route path=":category" element={<Category/> }/>
      </Routes>
    );
  }

  export default Shop;