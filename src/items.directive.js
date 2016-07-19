'use strict';

module.exports = function(){
	return {
		restrict: 'EA',
		template: require('./items.html'),
		controller: require('./items.controller.js'),
		controllerAs: 'vm'
	}	
}