var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.$resource = $resource;
                this.movieResource = this.$resource("/api/movies/:id");
            }
            MovieService.prototype.getMovies = function () {
                return this.movieResource.query();
            };
            MovieService.prototype.saveMovie = function (mToSave) {
                return this.movieResource.save(mToSave).$promise;
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('MyApp').service('movieService', MovieService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=services.js.map