# JavaScript MyShows.me API for Node.JS

Module provides a wrapper for the [MyShows.me API](https://api.myshows.me/)

## Installation

Install with the Node.JS package manager:

    $ npm install myshows

Create new MyShows instance:

```javascript
var MyShows = require('myshows');

var myshows = new MyShows({
    login: 'username',
    password: 'password'
});
```

## Shows

### myshows.show.searchShows

```javascript
myshows.show.searchShows('big bang', function (error, result) {
    // Returns array
});
```

### myshows.show.searchEpisodeByFileName

```javascript
myshows.show.searchEpisodeByFileName('Star.Wars.The.Clone.Wars.s02e01e02.rus.LostFilm.TV.avi', function (error, result) {
    // Returns object
});
```

### myshows.show.getShow

```javascript
myshows.show.getShow(1, function (error, result) {
    // Returns object
});
```

### myshows.show.getEpisode

```javascript
myshows.show.getEpisode(1, function (error, result) {
    // Returns object
});
```

### myshows.show.getGenres

```javascript
myshows.show.getGenres(function (error, result) {
    // Returns array
});
```