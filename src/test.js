var bsWebdriver = require('browserstack-webdriver');
var acConfig = require('../config/config.json');

/**
* {object} request The express-js request object.
* {object} response The express-js response object.
* {Function} next The express next filter function.
*/
exports.runTest = function(request, response, next) {
	var capabilities = {
		'browserName': 'firefox', 
		'browserstack.user': acConfig.browserStack.userName,
		'browserstack.key': acConfig.browserStack.key
	};
	var driver = new bsWebdriver.Builder().
	usingServer(acConfig.browserStack.server).
	withCapabilities(capabilities).
	build();

    var url = request.query.url;
	driver.get(url);
    driver.getPageSource().then(function(source) {
        console.log(source);
        response.send(source);
    });
};
