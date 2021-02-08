import {useState} from 'react';
import axios from 'axios';

const useFetcher = () => {
  let dataTemp;

  getData = async (url) => {
    try {
      const response = await axios.get(url);
      dataTemp = response.data;
      return dataTemp;
    } catch (err) {
      console.error(err);
    }
  };

  return [getData];
};

export default useFetcher;
