var express = require("express")
var router = express.Router()


router.get("/def", function (req, res, next){
    res.render("views/def/dashboard/default.html")
})

module.exports = router
