const Menu = require("../../../models/menu");

function CreateMenuController() {
    return {
        store(req, res) {
            const { name, price, description, image, size } = req.body;
            if (!name || !price || !description || !image || !size) {
                return res.status(422).json({ message: "All fields are required" });
            }
            const menu = new Menu({
                name,
                price,
                description,
                image,
                size,
            });
            menu.save().then((menu) => {
                // Emit
                const eventEmiiter = req.app.get("eventEmitter");
                eventEmiiter.emit("menuCreated", menu);
                req.flash("success", "Menu created successfully");
                return res.redirect("/admin/create-food");
            }).catch((err) => {
                req.flash("error", "Something went wrong");
                return res.redirect("/admin/create-food");
            });
        },
    }
}

module.exports = CreateMenuController();