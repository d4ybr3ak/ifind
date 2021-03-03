module.exports = app => {
    const TestProducts = require("../controllers/TestProduct.controller.js");
  
    var router = require("express").Router();
  
    // Create a new TestProduct
    router.post("/", TestProducts.create);
  
    // Retrieve all TestProducts
    router.get("/", TestProducts.findAll);
  
    // Retrieve all published TestProducts
    router.get("/published", TestProducts.findAllPublished);
  
    // Retrieve a single TestProduct with id
    router.get("/:id", TestProducts.findOne);
  
    // Update a TestProduct with id
    router.put("/:id", TestProducts.update);
  
    // Delete a TestProduct with id
    router.delete("/:id", TestProducts.delete);
  
    // Delete all TestProducts
    router.delete("/", TestProducts.deleteAll);
  
    app.use('/api/TestProducts', router);
  };
  