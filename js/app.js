angular 
  .module('FlicPic', ['angular-jwt', 'ngResource'])
  .constant('API', 'http://localhost:3000/api') // http://heroku.com/flicpic
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  });
