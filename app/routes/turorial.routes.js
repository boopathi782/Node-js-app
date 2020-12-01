module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router(); 
  
  router.post('/create', tutorials.create); 

  router.get("/getalldata/:check_date", tutorials.findAlldata); 
 
  app.use('/api/tutorials', router);
};