import Xvm from './xvm'
let s  = new Xvm({
	el:'#app',
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
// import Vue from 'vue'
// let v = new Vue({
// 	el: '#app',
// 	data(){
// 		return{
// 			time:2,
// 			name:'d'
// 		}
// 	}
// })
// console.log(v.time)
// v.time=4
// console.log(v)

