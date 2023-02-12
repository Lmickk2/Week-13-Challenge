const { Product } = require('../models');

const productData = [
  {
    product_name: 'Cool Shirt',
    price: 9.99,
    stock: 4,
    category_id: 1,
  },
  {
    product_name: 'Silverware',
    price: 109.99,
    stock: 6,
    category_id: 2,
  },
  {
    product_name: 'Dog Bone',
    price: 4.99,
    stock: 26,
    category_id: 3,
  },
  {
    product_name: 'Hiking Shoes',
    price: 64.99,
    stock: 2,
    category_id: 4,
  },
  {
    product_name: 'Boots',
    price: 129.99,
    stock: 13,
    category_id: 4,
  },
  {
    product_name: 'Pencil',
    price: 1.99,
    stock: 133,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
