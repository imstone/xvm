
function Xvm (options) {
    this._initData(options.data());
};
let pro = Xvm.prototype;
pro._initData = function (data) {
    this._data = data;
    let keys = Object.keys(data);
    let i = keys.length;
    while (i--) {
        let key = keys[i];
        this._proxy(key);
    }
}
pro._proxy =  function (key) {
    console.log(key);
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
}


export default Xvm;