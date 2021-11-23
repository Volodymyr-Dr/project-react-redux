import fakeStoreApi from '../../apis/fakeStoreApi';
import {
  DELETE_PRODUCT,
  FETCH_PRODUCTS,
  REMOVE_SELECTED_PRODUCT,
  SELECTED_PRODUCT,
  SET_PRODUCTS,
} from '../types/actionTypes';

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get('/products').catch((err) => {
    console.log('Error', err);
  });

  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`).catch((err) => {
    console.log('Error', err);
  });

  dispatch({ type: SELECTED_PRODUCT, payload: response.data });
};

export const deleteProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi
    .get(`/products/${id}`, {
      method: 'DELETE',
    })
    .catch((err) => {
      console.log('Error', err);
    });
  dispatch({ type: DELETE_PRODUCT, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
