import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "./ProductItem";
import { fetchProducts } from "../redux/actions/productAction";
import { ProductsField } from "../ui/ui";

const ProductsList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Products:", products);
  return (
    <ProductsField>
      <ProductsItem />
    </ProductsField>
  );
};

export default ProductsList;
