import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

const CourseCard = (props) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageCard}>
        <Image source={{uri: 'abc.com/image'}} />
      </View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.textCard}>
          <Text style={{fontStyle: 'normal', fontWeight: '500', fontSize: 24}}>
            {props.name}
          </Text>
          <Text
            style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: 14}}>
            {props.stock}
          </Text>
          <Text
            style={{fontStyle: 'normal', fontWeight: 'normal', fontSize: 14}}>
            {props.price}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F8F2EE',
    borderColor: '#BEBAB3',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
  imageCard: {
    marginTop: 16,
    marginBottom: 40,
  },
  textCard: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
});

export default CourseCard;
