function CreateController() {
  return {
    index(req, res) {
        res.render("admin/createFood");
    },
  };
}

module.exports = CreateController();
