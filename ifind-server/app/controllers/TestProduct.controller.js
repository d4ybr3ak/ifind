const db = require("../models");
const TestProduct = db.TestProducts;
const Op = db.Sequelize.Op;

// Create and Save a new TestProduct
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a TestProduct
  const TestProduct = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save TestProduct in the database
  TestProduct.create(TestProduct)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the TestProduct."
      });
    });
};

// Retrieve all TestProducts from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  TestProduct.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TestProducts."
      });
    });
};

// Find a single TestProduct with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  TestProduct.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving TestProduct with id=" + id
      });
    });
};

// Update a TestProduct by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  TestProduct.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "TestProduct was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update TestProduct with id=${id}. Maybe TestProduct was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating TestProduct with id=" + id
      });
    });
};

// Delete a TestProduct with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  TestProduct.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "TestProduct was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete TestProduct with id=${id}. Maybe TestProduct was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete TestProduct with id=" + id
      });
    });
};

// Delete all TestProducts from the database.
exports.deleteAll = (req, res) => {
  TestProduct.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} TestProducts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all TestProducts."
      });
    });
};

// find all published TestProduct
exports.findAllPublished = (req, res) => {
  TestProduct.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving TestProducts."
      });
    });
};
