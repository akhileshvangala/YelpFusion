var express = require('express');
var package = require("./package.json");
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);

app.set("env", package.config.env);
app.set("port", package.config.port);
app.use(bodyParser.json({limit: '50mb'}));

    app.use(bodyParser.urlencoded({limit: '50mb',
        extended: true
    }));

app.use('/', express.static('views'));

    require("./middlewares/Router")(app);

 // error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function (err, req, res, next) {
            res.status(err.status || 500).end();
            console.log(err);
        });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
        res.status(err.status || 500).end();
    });

    server.listen(app.get("port"), function (err) {
        if (err) {
            throw err;
        }
        console.log("Server listening on port : " + app.get("port") + " !!!");
    });


module.exports = {
    app: app
};

