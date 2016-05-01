namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/about.html',
                controller: MyApp.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('movies', {
                url: '/movies',
                templateUrl: '/ngApp/movies.html',
                controller: MyApp.Controllers.MovieController,
                controllerAs: 'controller'
            })
            .state('createMovie', {
                url: '/createMovie',
                templateUrl: '/ngApp/createMovie.html',
                controller: MyApp.Controllers.CreateMovieController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

}