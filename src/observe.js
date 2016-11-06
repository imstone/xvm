import {def, query} from './tools.js';
import Dep from './dep.js';
export function observe(value, vm){
	if (!value || typeof value !== 'Object') {
		return;
	}
	let ob = new Observer(value);
	return ob;
}

export function Observer(value) {

	console.log(value)
	this.value = value;
	this.dep = new Dep();
		debugger
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

	Object.defineProperty(obj, key, {
		enumerable: true,
		configurable: true,
		get: function reactiveGetter() {
			let value = getter ? getter.call(obj) : val;
			return value
		},
		set: function (newVal) {
			let value = getter ? getter.call(obj) : val;
			if (value == newVal) {
				return;
			}
			if (setter) {
				setter.call(obj, newVal)
			}
			else {
				val = newVal;
			}
			childObj = observe(newVal);
			dep.notify();
		}
	})
}

















