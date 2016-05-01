namespace MyApp.Services {

    export class MovieService {
        private movieResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.movieResource = this.$resource("/api/movies/:id");
        }

        getMovies() {
            return this.movieResource.query();
        }

        saveMovie(mToSave) {
            return this.movieResource.save(mToSave).$promise;
        }
    }


    angular.module('MyApp').service('movieService', MovieService);

}