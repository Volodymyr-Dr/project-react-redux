import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeSelectedProduct,
  fetchProduct,
} from '../redux/actions/productAction';
import { CardDetail, Description, Img, ImgDetail, Price } from '../style/ui';

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  console.log(product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== '') dispatch(fetchProduct(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <CardDetail>
          <ImgDetail>
            <Img src={image} />
          </ImgDetail>
          <Description>
            <h1>{title}</h1>
            <Price>${price}</Price>
            <h3>{category}</h3>
            <p>{description}</p>
            <div>
              <div>
                <i className="shop icon"></i>
              </div>
              <div>Add to Cart</div>
            </div>
          </Description>
        </CardDetail>
      )}
    </div>
  );
};

export default ProductDetails;
