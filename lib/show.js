var utils = require('./utils');

function Show(instance) {
    this.myshows = instance;
}

/**
 * Search show by name.
 * @param {string} query - Search query
 * @param {function} callback - Callback
 * */
Show.prototype.searchShows = function (query, callback) {
    if (typeof query !== 'string') {
        return callback(new Error('Type of a parameter must be a string'));
    }

    this.myshows.get('shows/search', {
        q: query
    }, function (error, result) {
        if (error) {
            return callback(error);
        }

        callback(null, utils.makeArray(result));
    });
};

/**
 * Search episode by file name.
 * @param {string} filename - File name of episode
 * @param {function} callback - Callback
 * */
Show.prototype.searchEpisodeByFileName = function (filename, callback) {
    if (typeof filename !== 'string') {
        return callback(new Error('Type of a parameter must be a string'));
    }

    this.myshows.get('shows/search/file', {
        q: filename
    }, callback);
};

/**
 * Get show with all episodes by ID.
 * @param {string} showId - Show ID
 * @param {function} callback - Callback
 * */
Show.prototype.getShow = function (showId, callback) {
    if (!utils.isNumeric(showId)) {
        return callback(new Error('Type of a parameter must be a number.'));
    }

    this.myshows.get('shows', showId, callback);
};

Show.prototype.getEpisode = function (episodeId, callback) {
    if (!utils.isNumeric(episodeId)) {
        return callback(new Error('Type of a parameter must be a number.'));
    }

    this.myshows.get('episodes', episodeId, callback);
};

/**
 * Get list of genres.
 * @param {function} callback - Callback
 * */
Show.prototype.getGenres = function (callback) {
    this.myshows.get('genres', '', function (error, result) {
        if (error) {
            return callback(error);
        }

        callback(null, utils.makeArray(result));
    });
};

module.exports = Show;