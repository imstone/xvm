import Xvm from './xvm'
//pro. 测试
let s  = new Xvm({
	data() {
		return {
			time: 1,
			name: 'stone',
			like: {
				out: 'running',
				inner: 'music'
			}
		}
	}
})
console.log(s.time)
s.time=2
console.log(s)