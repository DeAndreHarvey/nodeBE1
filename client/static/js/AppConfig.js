myApp.config(function ($routeProvider) {
      $routeProvider
        .when('/',{
            templateUrl: 'partials/login.html'
        })
        .when('/dashboard',{
            templateUrl: 'partials/Dashboard.html'
        })

        .when('/:user_id',{
          templateUrl:'partials/Show.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
