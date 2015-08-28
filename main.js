angular.module('hello-bower-angular-component', []).directive('sayHello', function() {

	return {
		replace: true,
		restrict: 'AE',
    	template: '<h1>Hello World!</h1>'
  	};

});