/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ListItem from './src/widget/ListItem/index.component';
import {ProductT} from './src/widget/ListItem/index.types';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [list, setList] = useState([]);
  const [filterByName, setFilter] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  useEffect(() => {
    fetch('https://mocki.io/v1/c31d5ce5-4c92-4cee-af7e-4703a8ccbe9a')
      .then(data => data.json())
      .then(json => setList(json.list));
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <TextInput
          onChangeText={text => setFilter(text)}
          placeholder="Search products by name"
          style={styles.input}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={{backgroundStyle}}>
          {!!list.length &&
            list
              .filter((item: ProductT) =>
                item.name
                  .toLocaleLowerCase()
                  .includes(filterByName.toLocaleLowerCase().trimStart()),
              )
              .map((item: ProductT) => {
                return (
                  <ListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                  />
                );
              })}
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 50,
    marginHorizontal: 10,
    padding: 10,
    fontSize: 22,
  },
});

export {styles};

export default App;
