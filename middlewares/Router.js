var routes = require('../controllers/index');

var yelpFusionNodeRouter = require("../controllers/YelpFusionController.js");

module.exports = function(app) {
	app.use("/yelpfusionbusiness", yelpFusionNodeRouter);
};
