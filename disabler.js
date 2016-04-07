function Disabler(opts){
 	var self = {};
	var opts = opts || {};
	var collection = {};

	/*
	* Private
	*/
	function init(){
	
	}

	function add(name, value){
		if(collection[name]) return;
		collection[name] = (value != undefined) ? value : true;
	}

	function disable(name){
		collection[name] = false;
	}

	function enable(name){
		collection[name] = true;
	}

	function isDisabled(name){
		return (collection[name] === false);
	}

	function isEnabled(name){
		return (collection[name] === true); 	
	}

	/*
	* Public
	*/
	
	self.add = add;
	self.disable = disable;
	self.enable = enable;
	self.isDisabled = isDisabled;
	self.isEnabled = isEnabled;

	/*
	* Init
	*/

	init();

	return self;
}

module.exports = Disabler;