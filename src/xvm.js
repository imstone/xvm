import {observe} from './observe.js'
import {def, query} from './tools.js';
import lifecycleMixin from './lifecycle.js';
import initMixin from './init.js';

function Xvm (options) {
    this._initData(options.data());
    if (options.el) {
        this.$mount(options.el);
            
    }
};
initMixin(Xvm);
lifecycleMixin(Xvm);



export default Xvm;
