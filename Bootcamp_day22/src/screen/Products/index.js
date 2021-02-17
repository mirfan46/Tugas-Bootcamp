import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProductsCard} from '../../components';

const Products = () => {
  return (
    <View>
      <ProductsCard name={'Rinso Cokelat'} stock={12} price={15000} />
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({});
