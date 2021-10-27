const axios = require('axios');

export const fetchProductsName = async (productsCount: number) => {
  const url = `https://randomuser.me/api/?results=${productsCount}`;
  
  return await axios.request({
    method: 'get',
    url: url
  });
};
