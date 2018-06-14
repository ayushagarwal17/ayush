var app=angular.module("myapp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateurl='login.html'
	});
	.when('/dashboard',{
		templateurl='dashboard.html'
	});
	.otherwise ({
		redirect to:'/dashboard'
	});
});
app.controller('loginctrl',function($scope,$location){
$scope.submit()=function()
{
	var uname=$scope.username;
	var password=$scope.password;
	if ($scope.username == 'admin' && $scope.password == 'admin'){
	$location.path=('/dashboard')
	};
	};

});