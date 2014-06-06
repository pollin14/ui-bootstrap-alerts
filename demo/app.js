'use strict';

var app = angular.module('Demo',['ui.bootstrap.alerts']);

app.controller('DemoController',['$scope','AlertService',function($scope, Alerts){
	
	$scope.error = function()
	{
		Alerts.error('A mistake');
	}
	
	$scope.success = function()
	{
		Alerts.success('A tick');
	}
	
	$scope.danger = function()
	{
		Alerts.danger('This is danger');
	}
	
	$scope.warning = function()
	{
		Alerts.warning('You are warned');
	}
	
	$scope.info = function()
	{
		Alerts.info('Advirsement');
	}

}]);
