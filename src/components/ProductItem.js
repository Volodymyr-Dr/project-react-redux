import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Img,
  ImgBox,
  ProductCard,
  Card,
  Content,
  Price,
  CardTitle,
  Category,
} from "../ui/ui";

const ProductsItem = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <ProductCard key={id}>
        <Link to={`/project-react-redux/product/${id}`}>
          <Card>
            <ImgBox>
              <Img src={image} alt={title} />
            </ImgBox>
            <Content>
              <CardTitle>{title}</CardTitle>
              <Price>$ {price}</Price>
              <Category>{category}</Category>
            </Content>
          </Card>
        </Link>
      </ProductCard>
    );
  });

  return <>{renderList}</>;
};

export default ProductsItem;
