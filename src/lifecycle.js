import {def, query} from './tools.js';
import compile from './compile.js'
export default function (Xvm) {
    let pro = Xvm.prototype;
    pro.$mount = function (el) {
    	debugger;
        el = query(el);
        this._compile(el);
    }
    pro._compile = function(el) {
    	console.log(el)
        let options = this.$options;
        compile(el, options);

    }
}

