const Menu = require("../../models/menu");

class homeController {
  async index(req, res) {
    const pizzas = await Menu.find();
    if(req.user){
      return res.render("home", { pizzas: pizzas, user: req.user });
    }else{
      return res.render("home", { pizzas: pizzas });
    }
  }
}

module.exports = new homeController();
