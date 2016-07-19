'use strict';
var angular = require('angular');

angular.module('iei-invoice', [])
	.directive('parent', require('./parent.directive.js'))
	.directive('customerInfo', require('./customerInfo.directive.js'))
	.directive('items', require('./items.directive.js'))
	.directive('row', require('./row.directive.js'));