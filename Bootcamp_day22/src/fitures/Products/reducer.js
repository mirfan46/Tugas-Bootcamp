import {SET_LOADING, SET_PRODUCTS} from './constans';

const defaultState = {
  listProducts: null,
  loading: true,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {...state, loading: action.value};
      break;
    case SET_PRODUCTS:
      return {...state, listProducts: action.value};

    default:
      return state;
  }
};

export default reducer;
