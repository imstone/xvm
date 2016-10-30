export default function Dep () {
	// this.id = uid++;
	this.subs = [];
}
Dep.target = null;
let pt = Dep.prototype;
pt.depend = function () {
	Dep.target.addDep(this);
};
pt.notify = function () {
	let subs = this.subs;
	subs.forEach(function (key, item) {
		// subs[i].update();
		console.log('update')
	})
}

