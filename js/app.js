angular 
  .module('FlicPic', ['angular-jwt', 'ngResource'])
  .constant('API', 'http://flicpic.herokuapp.com/')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('AuthInterceptor')
  });
