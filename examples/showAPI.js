var MyShows = require('../index');

var m = new MyShows();
/*m.show.searchShows('big bang theory', function (error, result) {
    console.log(error || result);
});*/

/*m.show.searchEpisodeByFileName('Star.Wars.The.Clone.Wars.s02e01e02.rus.LostFilm.TV', function (error, result) {
    console.log(error || result);
});*/

/*m.show.getShow(1, function (error, result) {
    console.log(error || result);
});*/

m.show.getEpisode(1, function (error, result) {
    console.log(error || result);
});

/*m.show.getGenres(function (error, result) {
    console.log(error || result);
});*/