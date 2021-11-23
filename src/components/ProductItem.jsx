import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct } from '../redux/actions/productAction';
import {
  Button,
  ButtonBox,
  Card,
  CardTitle,
  Category,
  Content,
  Img,
  ImgBox,
  Price,
  ProductCard,
} from '../style/ui';

const ProductsItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <ProductCard key={id}>
        <Card>
          <ImgBox>
            <Img src={image} alt={title} />
          </ImgBox>
          <Content className="content_hover">
            <CardTitle>{title}</CardTitle>
            <Price>$ {price}</Price>
            <Category>{category}</Category>
          </Content>
          <ButtonBox className="button_box">
            <Button>
              <Link to={`/project-react-redux/product/${id}`}>Details</Link>
            </Button>
            <Button onClick={() => dispatch(deleteProduct(id))} red>
              Delete
            </Button>
          </ButtonBox>
        </Card>
      </ProductCard>
    );
  });

  return <>{renderList}</>;
};

export default ProductsItem;
