import {def} from './tools.js';
import Dep from './dep.js';
export function observe(value, vm){
	let ob = new Observer(value);
	return ob;
}

export function Observer(value) {

	console.log(value)
	this.value = value;
	this.dep = new Dep();
	def(value, '__ob__', this);
	this.walk(value);
}
let pt = Observer.prototype;
pt.walk = function (value) {
	let keys = Object.keys(value);
	let self = this;
	keys.forEach(function(key, item) {
		self.convert(key, item);
	})
};
pt.convert = function (key, value) {
	defineReactive(this.value, key, value)
}


export function defineReactive (obj, key, val) {
	let dep = new Dep();
	let property = Object.getOwnPropertyDescriptor(obj, key);
	if (property && property.configurable === false) {
		return;
	}
	let getter = property && property.get;
	let setter = property && property.set;

	Object.defineProperty({
		enumerable: true,
		configurable: true,
		get: function () {
			let value = getter ? getter.call(obj) :val;
		},
		set: function () {

		}
	})
}

