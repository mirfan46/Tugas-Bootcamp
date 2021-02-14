import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {InputSearch, CourseCard} from '../../components/';

const Result = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={require('../../assets/prev.png')} />
          </TouchableOpacity>
          <InputSearch width={315} placeholder="Search" />
        </View>
        <View style={styles.result}>
          <Text style={styles.resultText}>0 Results</Text>
        </View>
        <CourseCard />
        <CourseCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  result: {
    flexDirection: 'row',
    marginLeft: 16,
    marginBottom: 32,
  },
  resultText: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 24,
    color: '#3C3A36',
  },
});

export default Result;
