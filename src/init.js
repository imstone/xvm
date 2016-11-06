import {observe} from './observe.js'
export default function (Xvm) {
let pro = Xvm.prototype;
pro._initData = function (data) {
    this._data = data;
    let keys = Object.keys(data);
    let i = keys.length;
    while (i--) {
        let key = keys[i];
        this._proxy(key);

    }
    observe(data, this);

}
pro._proxy =  function (key) {
    
    let self = this;
    Object.defineProperty(self, key, {
        configurable: true,
        enumerable: true,
        get: function (){
            console.log(`${key} get value`)
            return self._data[key]
        },
        set: function (value) {
            console.log(`${key} set value => ${value}`)
            self._data[key] = value;

        }
    })
};
}
