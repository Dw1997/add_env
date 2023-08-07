var Screen = function Screen() {
    throw new TypeError("Illegal constructor");
};
env_vm.safefunction(Screen);

Object.defineProperties(Screen.prototype, {
    [Symbol.toStringTag]: {
        value: "Screen",
        configurable: true
    }
});

///////////


///////////

screen = {};
screen.__proro__ = Screen.prototype;
screen = env_vm.proxy(screen);