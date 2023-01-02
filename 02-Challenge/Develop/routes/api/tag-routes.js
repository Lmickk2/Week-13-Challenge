const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/:id', (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }, { model: ProductTag}],
    })

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that ID.' });
      return
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.post('/', (req, res) => {
  try {
    const tagDaga = await Tag.create(req.body);
    res.status(200).json(tagDaga);
  } catch (err) {
    res.status(400).json(err);
  }
})

router.put('/:id', (req, res) => {
  Tag.update(
    {
      name: req.body.tag_name
    },
    {
      where: {
        name: req.params.name,
      },
    }
  )
  .then((updatedTag) => {
    res.json(updatedTag)
  })
  .catch((err) => res.json(err))
})

router.delete('/:id', (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that ID.' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
