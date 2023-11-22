import React from 'react';
import {Text, View} from 'react-native';
import {ProductInfoItemT} from './index.types';

function ProductInfoItem({
  cStyles,
  tStyles,
  text,
  ...textProps
}: ProductInfoItemT) {
  return (
    <View style={cStyles}>
      <Text style={tStyles} {...textProps}>
        {text}
      </Text>
    </View>
  );
}

export default ProductInfoItem;
