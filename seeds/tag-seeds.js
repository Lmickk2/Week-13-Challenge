const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'black',
  },
  {
    tag_name: 'silver',
  },
  {
    tag_name: 'N/A',
  },
  {
    tag_name: 'brown',
  },
  {
    tag_name: 'green',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
