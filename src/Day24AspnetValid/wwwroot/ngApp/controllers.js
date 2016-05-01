var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.message = 'Hello from the home page!';
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var MovieController = (function () {
            function MovieController(movieService) {
                this.movieService = movieService;
                this.movies = this.movieService.getMovies();
            }
            return MovieController;
        }());
        Controllers.MovieController = MovieController;
        var CreateMovieController = (function () {
            function CreateMovieController(movieService, $state) {
                this.movieService = movieService;
                this.$state = $state;
                this.mToSave = {};
            }
            CreateMovieController.prototype.saveMovie = function () {
                var _this = this;
                this.movieService.saveMovie(this.mToSave).then(function () {
                    _this.$state.go('movies');
                }).catch(function (err) {
                    _this.errorMessages = err.data;
                });
            };
            return CreateMovieController;
        }());
        Controllers.CreateMovieController = CreateMovieController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=controllers.js.map