namespace MyApp.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class MovieController {
        public movies;

        constructor(private movieService: MyApp.Services.MovieService) {
            this.movies = this.movieService.getMovies();
        }
    }

    export class CreateMovieController {
        public mToSave;
        public errorMessages;

        constructor(private movieService: MyApp.Services.MovieService,
            private $state: ng.ui.IStateService) {
            this.mToSave = {};
        }

        saveMovie() {
            this.movieService.saveMovie(this.mToSave).then(() => {
                this.$state.go('movies');
            }).catch((err) => {
                this.errorMessages = err.data;
                });
            
        }
    }
}
