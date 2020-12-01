const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => { 

    var query = { from_time: req.body.from_time, to_time: req.body.to_time, date_value : new Date(req.body.date_value)}; 
   db.tutorials.find(query ,function (err, docs) { 
     
          if (docs.length){            
              res.status(201).send({
              message: "Solat already exists"
            });
        } else {   
            const tutorial = new Tutorial({
              slot_mode: req.body.slot_mode,
              date_value: req.body.date_value,
              from_time: req.body.from_time,
              to_time: req.body.to_time, 
            });  

             tutorial.save(tutorial)
              .then(data => {
                // res.send(data);
                res.status(200).send({
                  message: "Solat created successfully"
                });
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while creating the slot."
                });
              });

        }
    }); 
    
  }; 

// Find all  slot
exports.findAlldata = (req, res) => {
  
 //console.log( req.params.check_date)  
  var query = { date_value : new Date(req.params.check_date)}; 

    Tutorial.find(query).then(data => {
        res.send({  result:data  });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving slot."
        });
      });
  };