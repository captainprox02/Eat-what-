const Menu = require("../../../models/menu");

class DeleteFoodController {
    async delete(req, res) {
        const food = await Menu.findById(req.params.id);
        if (!food) {
            return res.redirect("/");
        }
        food.remove();
        return res.redirect("/");
    }
}

module.exports = new DeleteFoodController();