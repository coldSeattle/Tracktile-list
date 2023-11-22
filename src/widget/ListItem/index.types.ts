import {PriceAlias} from '../../shared/alias-types/product.types';

type ProductT = {
  name: string;
  description: string;
  price: PriceAlias;
};

export type {ProductT};
