var Q = require("q");

const yelp = require('yelp-fusion');

//an object being exported
var yelpFusionmodel = {};

/**
* GET API call to fetch records
*/

yelpFusionmodel.getBusinessSearchFn = function(req, res) {
    console.log("getBusinessSearchFn Function in YelpFusionModel Model");

const apiKey = 's6mDMiYx4bTNxWI2TlhvmYOraCbRgSjF6JSHMVOdRUz7lZbvQaWPiTCYpDYrteS0Gg8-dsgGEPMrCTmtptrLMo60ZTqczvk8omAYMMvqHMtx-9PT49AiZUZH-uboWnYx';

const client = yelp.client(apiKey);
 
    var searchObj = {};

    searchObj.term = 'Four Barrel Coffee';
    searchObj.location = 'san francisco, ca';

    client.search({
        term:'Four Barrel Coffee',
        location: 'san francisco, ca'
    }).then(response => {
         console.log(response.jsonBody.businesses[0]);
	       return res.json({success: true, data: response , message: 'records found!'});
    }).catch(e => {
         console.log(e);
         return res.status(500).json({success: false, data: err, message: 'Failed to get records!'});
    });

};

module.exports = yelpFusionmodel;
