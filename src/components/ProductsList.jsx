import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from './ProductItem';
import { fetchProducts } from '../redux/actions/productAction';
import { ProductsField } from '../style/ui';

const ProductsList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log('Products:', products);
  return (
    <div>
      {Object.keys(products.allProducts.products).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <ProductsField>
          <ProductsItem />
        </ProductsField>
      )}
    </div>
  );
};

export default ProductsList;
