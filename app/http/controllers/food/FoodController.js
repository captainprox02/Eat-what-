const Menu = require("../../../models/menu");

class FoodController {
    async viewDetails(req, res) {
        const food = await Menu.findById(req.params.id);
        return res.render("food/details", { food: food });
    }
}

module.exports = new FoodController();