const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Kitchen',
  },
  {
    category_name: 'Pets',
  },
  {
    category_name: 'Shoes',
  },
  {
    category_name: 'Misc',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
