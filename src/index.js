import Xvm from './xvm'
//pro. 测试
let s  = new Xvm({
	data() {
		return {
			time: 1,
			name: 'stone',
			like: 222
		}
	}
})
console.log(s.time)
s.time=2
console.log(s)