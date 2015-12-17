angular.module('FlicPic')
  .controller('MoviesController', MoviesController);

  // create the controller and inject $http
  MoviesController.$inject = ['$http'];
  function MoviesController($http, genre){

    getGenres()

    var self = this; //this is in a variable self because of scope. this is in global scope. would be different in function get presidents
    // self and this is the same below in global scope. 

    //get all of the movies
    this.all = [];


    this.getMovieByGenre = getMovieByGenre;
    this.getMovies       = getMovies;
    // this.getActors       = getActors;
    // find out how to put all of the genres in a drop down box

    // this.title = "FlicPic"
    // this.addMovie = addMovie;
    // this.newMovie = {};

    // get all of the genres to populate them in an array
    self.genres = [];
    

    function getMovies() {
      var url = 'http://api.themoviedb.org/3/search/movie?query=' + this.title + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
      $http
        .get(url)
        .then(function(res) {
          self.all = res.data.results;
        });
    }

    function getGenres() {
      var url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=213e6d38b03c7af40fb82d70ad6f0139'
      $http
        .get(url) //https://api.themoviedb.org/3/genre/movie/list?api_key=213e6d38b03c7af40fb82d70ad6f0139
        //genre/id/movies gets a list of movies for a particular genre by id
        .then(function(res) {
          console.log(res.data);
          self.genres = res.data.genres;
        });
    }

    function getMovieByGenre(genre) {
      console.log(genre);

      var url = 'http://api.themoviedb.org/3/genre/' + genre.name + '/movies?api_key=213e6d38b03c7af40fb82d70ad6f0139' //'http://api.themoviedb.org/3/search/genre/id/movies?query=' + self.genres + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'

      $http
        .get(url)
        .then(function(res) {
          console.log(res);
          self.all = res.data.results;
        });
    }

    // function getActors() {
      
    //   var url = 'https://api.themoviedb.org/3/search/person?query=' + this.person.name + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
    //   // https://api.themoviedb.org/3/person/287/combined_credits?api_key=213e6d38b03c7af40fb82d70ad6f0139
    //   $http
    //     .get(url)//api url
    //     .then(function(res) {
    //       console.log(res);
    //       self.all = res.data.person;
    //     });
    // }

    // function getYears(queryString) {
    //   var url = 'https://api.themoviedb.org/3/discover/movie?primary_release_year=' + queryString + '&api_key=213e6d38b03c7af40fb82d70ad6f0139'
    //   $http
    //     .get()//api url
    //     .then(function(res) {
    //       console.log(res);
    //       self.all = res.data.movies;
    //     });
    // }

        // getMovieByGenre();
    // getMovies();
    // getGenres();
    // getActors();
    // getYears();
  }
