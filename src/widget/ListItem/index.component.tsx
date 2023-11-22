import React from 'react';
import {Pressable, TextStyle} from 'react-native';

import {StyleSheet} from 'react-native';
import ProductInfoItem from './components/ProductInfoItem/index.component';
import {ProductT} from './index.types';

const styles = StyleSheet.create({
  container: {
    minHeight: 150,
    height: 150,
    borderRadius: 10,
    borderColor: 'greyLight',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
  },
  nameC: {},
  nameT: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  descC: {
    marginTop: 'auto',
    marginBottom: 20,
  },
  descT: {
    fontSize: 18,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  priceC: {},
  priceT: {
    fontSize: 18,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

export {styles};

const textProps = {
  numberOfLines: 1,
  ellipsizeMode: 'tail',
} as TextStyle;

function ListItem({name, description, price}: ProductT) {
  return (
    <Pressable style={styles.container}>
      <ProductInfoItem
        tStyles={styles.nameT}
        text={name}
        textProps={textProps}
      />
      <ProductInfoItem
        cStyles={styles.descC}
        tStyles={styles.descT}
        text={description}
        textProps={textProps}
      />
      <ProductInfoItem
        tStyles={styles.priceT}
        text={price}
        textProps={textProps}
      />
    </Pressable>
  );
}

export default ListItem;
