import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AccordionListItem from './components/AccordionList/AccordionListItem';

const App = () => {
  return (
      <View style={styles.container}>
        <AccordionListItem title={'List Item'}>
          <Text>Some body text!</Text>
        </AccordionListItem>
      </View>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2rem',
    paddingTop: '5rem',
    justifyContent: 'flex-start',
  },
});