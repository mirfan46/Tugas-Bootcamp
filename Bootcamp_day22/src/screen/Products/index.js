import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {ProductsCard} from '../../components';
import {fetchProducts} from '../../fitures/Products/action';

const Products = () => {
  const userData = useSelector((state) => state.login.user);
  const produkList = useSelector((state) => state.products.listProducts);
  console.log('pruduk saya', produkList);
  const dispatch = useDispatch();
  const fetchProduk = dispatch(fetchProducts());

  useEffect(() => {
    fetchProduk;
  }, []);
  return (
    <View>
      <Text>Profile</Text>
      <Text>Username: {userData.data.username}</Text>
      <Text>Full Name: {userData.data.full_name}</Text>
      <Text>Phone Number: {userData.data.phone_number}</Text>
      <Text>Role: {userData.data.role}</Text>
      <ProductsCard name={'Rinso Cokelat'} stock={12} price={15000} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
