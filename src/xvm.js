function Xvm (options) {
	console.log(options)
};
let pro = Xvm.prototype;
//pro. 测试
new Xvm({
	data() {
		return {
			time: 1
		}
	}
})