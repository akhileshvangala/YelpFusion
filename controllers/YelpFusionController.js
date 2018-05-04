var express = require('express');
var router = express.Router();
var yelpFusionmodel = require("../models/YelpFusionModel.js");

router.get("", function(req, res) {
    if (!req) {
        return res.json({success: false, data: null});
    } else {
        yelpFusionmodel.getBusinessSearchFn(req, res);
    }
});

module.exports = router;
