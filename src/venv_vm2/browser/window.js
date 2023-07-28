window = this;
var Window = function Window() {
    // 容易被检测到堆栈
    throw new TypeError("Illegal constructor");
}; env_vm.safefunction(Window);

Object.defineProperties(Window.prototype, {
    [Symbol.toStringTag]: {
        value: "Window",
        configurable: true
    }
})

Window.prototype.__proto__ = WindowProperties.prototype;

window.__proto__ = Window.prototype;
/////////////////////////////////////////
Window.prototype.PERSISTENT = 1;
Window.prototype.TEMPORARY = 0;
/////////////////////////////////////////


Window = env_vm.proxy(Window);
window = env_vm.proxy(window);