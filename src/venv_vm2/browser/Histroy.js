var Histroy = function Histroy() {
    throw new TypeError("Illegal constructor");
};


env_vm.safefunction(Histroy);

Object.defineProperties(Histroy.prototype, {
    [Symbol.toStringTag]: {
        value: "Location",
        configurable: true
    }
});


history = {};
history.__proto__ = Histroy.prototype;
history = env_vm.proxy(history);