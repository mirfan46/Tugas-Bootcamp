import {useSelector} from 'react-redux';
import axios from 'axios';
import {SET_LOADING, SET_PRODUCTS} from './constans';

export const setLoading = (status = true) => {
  return {type: SET_LOADING, value: status};
};

export const fetchProducts = () => {
  const userData = useSelector((state) => state.login.user);
  const token = userData.data.token;
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get('http://simple-wms.herokuapp.com/api/v1/product?limit=5&page=1', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch({type: SET_PRODUCTS, value: response.data});
      })
      .catch((error) => {
        console.log({error});
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  };
};
