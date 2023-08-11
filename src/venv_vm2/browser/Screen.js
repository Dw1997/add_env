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
screen.width = 2560;
screen.height = 1440;
screen.__proto__ = Screen.prototype;
screen = env_vm.proxy(screen);