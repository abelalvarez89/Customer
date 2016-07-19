'use strict';

module.exports = function() {
	var vm = this;
	vm.addRow = addRow;
	vm.deleteRow = deleteRow;
	vm.applyTax = applyTax;
	vm.getTotal = getTotal;
	vm.total = 0;
	vm.repeat = [];


	function addRow() {
		vm.repeat.push({
			item: vm.repeat.length + 1,
			description: '',
			quantity: 0,
			price: 0,
			total: 0
		});
	}

	function deleteRow(index) {
		vm.repeat.splice(index, 1);
		for (var i = 0; i < vm.repeat.length; i++) {
			vm.repeat[i].item = i + 1;
		}
	}

	function getTotal(){
		var total = 0;
		for (var i = 0; i < vm.repeat.length; i++) {
			total += vm.repeat[i].price * vm.repeat[i].quantity;
		}
		return total;
	}

	function applyTax(tax){
		if(tax == null){
			tax = 0.07;
		}
		return getTotal() * tax;
	}
	addRow();
};