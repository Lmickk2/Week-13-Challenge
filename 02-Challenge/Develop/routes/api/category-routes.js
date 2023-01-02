const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try{
    const categoryData = await.Category.findAll({
      include: [{ model: Category}, {model: Product}],
    })
    res.status(200).json(categoryData)
  } catch(err) {
    res.status(500).json(err)
  }
})

router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    })

    if (!Product) {
      res.status(404).json({ message: 'No product found. Please try again.' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(400).json(err)
  }
})

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      name: req.body.category_name
    },
    {
      where: {
        name: req.params.name,
      },
    }
  )
  .then((updatedCategory) => {
    res.json(updatedCategory)
  })
  .catch((err) => res.json(err))
})

router.delete('/:id', (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found under that ID. Please try again.' });
      return
    }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
