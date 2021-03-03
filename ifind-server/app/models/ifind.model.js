module.exports = (sequelize, Sequelize) => {
    const TestProduct = sequelize.define("TestProduct", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return TestProduct;
  };
  