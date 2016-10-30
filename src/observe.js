import {def} from './tools.js'
export function observe(value, vm){
	let ob = new Observer(value);
	return ob;
}

export function Observer(value) {
	this.value = value;
	// this.dep = new Dep();
	def(value, '__ob__', this);
	this.walk(value);
}
let pt = Observer.prototype;
pt.walk = function (value) {
	let keys = Object.keys(value);
	let self = this;
	keys.forEach(function(key, item) {
		self.convert(key, item);
		console.log(key + item)
	})
};
pt.convert = function () {

}