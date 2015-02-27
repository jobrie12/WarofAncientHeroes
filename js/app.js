angular
    .module('WarOfAncientHeroes',[])
    .controller('gameCtrl',function($scope, LoadHeroesService, $http,  $log){
        var init = function(){

            $scope.heroes = [];
            LoadHeroesService.fetch().then(function(data) {
                $scope.heroes= data.heroes;
                console.log($scope.heroes);
            })
            $scope.hero = null;
            $scope.tree = null;
        }

        init();
    })
    .factory('LoadHeroesService', function($q,$timeout,$http) {
        var heroes = {
            fetch: function(callback) {
                var deferred = $q.defer();
                $timeout(function() {
                    $http.get("data.json").success(function(data) {
                        deferred.resolve(data);
                    });
                }, 30);

                return deferred.promise;
            }
        };

        return heroes;
    });
