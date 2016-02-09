var request = require('request');
var Show = require('./show');
var querystring = require('querystring');
var utils = require('./utils');

function MyShows(login, password) {
    this.request = request.defaults({jar: true});
    this.endpoint = 'https://api.myshows.me/';
    this.login = login;
    this.password = password;
    this.show = new Show(this);
}

MyShows.prototype.get = function (path, params, callback) {
    var url = this.endpoint + path + '/';

    if (utils.isObject(params)) {
        url += '?' + querystring.stringify(params);
    } else {
        url += params;
    }

    var options = {
        url: url,
        method: 'GET',
        json: true
    };

    this.request(options, function (error, response, body) {
        if (error) {
            return callback(error);
        }

        var statusCode = response.statusCode;

        if (statusCode === 200) {
            return callback(null, body);
        }
        if (statusCode === 401) {
            return callback(new Error('You need to be authorized'));
        }
        if (statusCode === 403) {
            return callback(new Error('Incorrect user name or password'));
        }
        if (statusCode === 404) {
            return callback(new Error('Not found'));
        }
    });
};

module.exports = MyShows;