import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {selectCategoriesIsLoading, selectCategoriesMap} from '../../../store/categories/categories.selector'
import { useSelector } from 'react-redux';
import ProductCard from '../../../components/product-card/product-card.component';

import {CategoryContainer} from './category.styles';
import Spinner from '../../spinner/spinner.component';
const Category = () => {
  const { category } = useParams();
  const categoriesMap=useSelector(selectCategoriesMap);
  const isLoading=useSelector(selectCategoriesIsLoading)
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {
        isLoading ? 
        (<Spinner/>): (
          <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
        )
        
         
      }
      
    </Fragment>
  );
};

export default Category;