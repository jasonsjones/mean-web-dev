angular.module('articles')
    .factory('Articles', ['$resource', function ($resource) {
        return $resource('/api/articles/:artcileId', {
            artcileId: '@_id'
        }, {
            update: {
                method:'PUT'
            }
        });
    }]);