import axios from 'axios';
import {SET_LOADING} from './constans';

export const setLoading = (status = true) => {
  return {type: SET_LOADING, value: status};
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios.get('http://simple-wms.herokuapp.com/api/v1/product?limit=5&page=1');
  };
};
