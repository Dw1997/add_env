window = this;


function vmProxy(obj) {
    return new Proxy(obj, {
        set(target, prototype, value) {
            console.log('set--->', target, prototype, value);
            return Reflect.set(...arguments);
        },
        get(target, prototype, receiver) {
            console.log('get--->', target, prototype, receiver);
            return target[prototype];
        }
    })
};

(() => {
    "use strict";
    const $toSting = Function.toString;
    const myFunction_toString_symbol = Symbol('('.concat('', ')_', (Math.random() + '').toString(36)));
    const myToString = function () {
        return typeof this == 'function' && this[myFunction_toString_symbol] || $toSting.call(this);
    };
    function set_native(func, key, value) {
        Object.defineProperty(func, key, {
            "enumerable": false,
            "configurable": true,
            "writable": true,
            "value": value
        })
    };
    delete Function.prototype['toString'];
    set_native(Function.prototype, "toString", myToString);
    set_native(Function.prototype.toString, myFunction_toString_symbol, "function toString() { [native code] }");
    this.func_set_native = (func) => {
        set_native(func, myFunction_toString_symbol, `function ${myFunction_toString_symbol, func.name || ''}() { [ native code ] }`);
    }
}).call(this);

Object.defineProperties(window, {
    [Symbol.toStringTag]: {
        value: 'window',
        configurable: true
    }
})

window = vmProxy(window);
navigator = vmProxy(class navigator { });
document = vmProxy(class document { });
location = class location { };
location.reload = function relaod() {

}; func_set_native(location.reload);
debugger;
screen = vmProxy(class screen { });




window.dw = 1;
console.log(window.dw);