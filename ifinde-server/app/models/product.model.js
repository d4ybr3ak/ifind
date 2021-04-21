module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    price: {
      type: Sequelize.BOOLEAN
    },
    link: {
      type: Sequelize.BOOLEAN
    }
  });

  return Product;
};
