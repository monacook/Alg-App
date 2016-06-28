algorithmApp.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/home.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/profile',{
        templateUrl: 'partials/profile.html'
    })
    .when('/docs',{
        templateUrl: 'partials/docs.html'
    })
    .when('/algorithm/:id',{
        templateUrl: 'partials/algorithm.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
