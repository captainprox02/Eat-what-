const Menu = require("../../../models/menu");


function EditFood() {
    return {
      edit(req, res) {
        let foods = Menu.findOne({ _id: req.params.id }).then((food) => {
            return food;
        });
        
        foods.then((foods) => {
            return res.render("admin/editFood", { food: foods });
        });
      },
    };
  }
  
  module.exports = EditFood();
  