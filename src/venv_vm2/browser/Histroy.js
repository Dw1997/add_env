var Histroy = function Histroy() {
    throw new TypeError("Illegal constructor");
};


env_vm.safefunction(Histroy);

Object.defineProperties(Histroy.prototype, {
    [Symbol.toStringTag]: {
        value: "Histroy",
        configurable: true
    }
});
/////////////////
Histroy.prototype.back = function back() { debugger; };
env_vm.safefunction(Histroy.prototype.back);

/////////////////

history = {};
history.__proto__ = Histroy.prototype;
history = env_vm.proxy(history);