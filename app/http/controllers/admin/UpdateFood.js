const Menu = require("../../../models/menu");

class UpdateFoodController {
    async update(req, res) {
        const food = await Menu.findById(req.params.id);
        if (!food) {
            return res.redirect("/");
        }
        food.name = req.body.name || food.name;
        food.price = req.body.price || food.price;
        food.description = req.body.description || food.description;
        food.image = req.body.image || food.image;
        food.size = req.body.size || food.size;
        await food.save();
        return res.redirect("/");
    }
}

module.exports = new UpdateFoodController();