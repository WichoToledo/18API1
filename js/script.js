var P = angular.module("P",[])
P.controller("Pokemon",function($scope,$rootScope,$http){
	
$scope.ListadoPokemon =[];
 for(var z-1;z<=100;++)(

	$http({
	method;"GET"
	url: "https://pokeapi.co/api/v2/Pokemon/1"
})then(function Datos(x) {
   console.log(x);
   $scope.ListadoPokemon.push(x);

})  