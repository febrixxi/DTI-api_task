import BaseService from './baseService';
import API from '../config/rest';

const product = () => {
  return BaseService.get(API.PRODUCT, {
    params: {
      limit: 21,
      offset: 0,
      search: '',
    },
  });
};

export default { product };
