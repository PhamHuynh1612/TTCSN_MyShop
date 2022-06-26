let express = require('express')
let router = express.Router();

router.get('/quen-mat-khau', (req, res) => {
    res.render("quenmatkhau", {})
})

module.exports  =  router