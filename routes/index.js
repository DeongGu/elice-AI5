const { Router } = require("express");
const router = Router();
/* GET home page. */
router.get("/", (req, res) => {
  res.redirect("/posts");
});

module.exports = router;
